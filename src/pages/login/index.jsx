import React, { useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  Button,
  useMediaQuery,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";
import { tokens } from "../../theme";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { account } from "../../auth/account";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });
  const [blockSubmit, setBlockSubmit] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "username") setEmail(value);
    if (id === "outlined-adornment-password") setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    let isValid = true;
    let newErrors = { username: "", password: "" };

    if (!email) {
      newErrors.username = "Username is required";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    // Clear errors if valid
    setErrors({ username: "", password: "" });

    if (email === account.email && password === account.password) {
      let isAccount = { email, password };
      localStorage.setItem("account", JSON.stringify(isAccount));

      setBlockSubmit(true);
      setTimeout(() => {
        setBlockSubmit(false);
        navigate("/");
      }, 1500);
    } else {
      alert("Login failed");
    }
  };

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{
        background: colors.primary[400],
        padding: isSmallScreen ? "20px" : "0",
      }}
    >
      <Box
        display="flex"
        flexDirection={isSmallScreen ? "column" : "row"}
        alignItems="center"
        sx={{
          width: isSmallScreen ? "100%" : 1400,
          height: isSmallScreen ? "auto" : 600,
          padding: "20px",
        }}
      >
        {!isSmallScreen && (
          <Box display="flex" alignItems="start">
            <Box mr="30px">
              <Box>
                <Typography
                  variant="h1"
                  fontWeight="bold"
                  color={colors.primary[100]}
                >
                  Sign In to
                </Typography>
                <br />
                <Typography
                  variant="h1"
                  fontWeight="bold"
                  color={colors.primary[100]}
                >
                  Recharge Direct
                </Typography>
              </Box>
              <Box mt="50px" alignItems="center">
                <Typography
                  variant="h3"
                  sx={{ marginRight: 1 }}
                  color={colors.primary[100]}
                >
                  If you don't have an account
                </Typography>

                <Typography variant="h3" color={colors.primary[100]}>
                  you can{" "}
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: colors.blueAccent[500],
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Register here
                  </a>
                </Typography>
              </Box>
            </Box>

            <Box>
              <img
                width={450}
                src="../../assets/Picture.png"
                alt="Illustration"
              />
            </Box>
          </Box>
        )}

        <Box
          sx={{
            flex: 1,
            mb: "20px",
            paddingLeft: isSmallScreen ? "0" : "100px",
            paddingRight: isSmallScreen ? "0" : "100px",
            paddingTop: "50px",
            textAlign: isSmallScreen ? "center" : "left",
          }}
        >
          <Typography
            variant="h2"
            align={isSmallScreen ? "center" : "left"}
            color={colors.primary[100]}
            fontWeight="bold"
            gutterBottom
          >
            Sign In
          </Typography>
          <br />
          <form onSubmit={handleSubmit}>
            <FormControl
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "currentColor", // Default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "currentColor", // Border color when hovered
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "currentColor", // Border color when focused
                  },
                },
                "& .MuiInputLabel-root": {
                  position: "absolute",
                  top: "0px",
                  left: "2px",
                  bottom: "5px",
                  transform: "translateY(-50%)",
                  fontSize: "14px",
                  color: "grey",
                },
              }}
            >
              <InputLabel htmlFor="username" color="secondary">
                Email
              </InputLabel>

              <OutlinedInput
                id="username"
                placeholder="Enter your email"
                value={email}
                onChange={handleInputChange}
                sx={{
                  color: colors.primary[100],
                }}
              />
              {errors.username && (
                <FormHelperText error>{errors.username}</FormHelperText>
              )}
            </FormControl>

            <FormControl
              fullWidth
              variant="outlined"
              sx={{
                mt: "40px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "currentColor",
                  },
                  "&:hover fieldset": {
                    borderColor: "currentColor",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "currentColor",
                  },
                },
                "& .MuiInputLabel-root": {
                  position: "absolute",
                  top: "0px",
                  left: "2px",
                  bottom: "5px",
                  transform: "translateY(-50%)",
                  fontSize: "14px",
                  color: "grey",
                },
              }}
            >
              <InputLabel
                htmlFor="outlined-adornment-password"
                color="secondary"
              >
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handleInputChange}
                sx={{
                  color: colors.primary[100],
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      sx={{
                        color: colors.primary[100],
                      }}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {errors.password && (
                <FormHelperText error>{errors.password}</FormHelperText>
              )}
            </FormControl>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={blockSubmit}
              sx={{
                mt: "40px",
                fontWeight: "bold",
                height: "50px",
                borderRadius: "10px",
                backgroundColor: colors.blueAccent[600],
                color: "white",
                "&:hover": {
                  backgroundColor: colors.blueAccent[400],
                },
              }}
            >
              Sign In
            </Button>
          </form>

          <Box display="flex" alignItems="center" mb="20px" mt="20px">
            <Box flex="1" height="1px" bgcolor={colors.grey[400]} />{" "}
            <Typography 
              variant="body1"
              sx={{
                mx: 2,
                color: colors.primary[100],
                fontWeight: "bold",
              }}
            >
              Or login with
            </Typography>
            <Box flex="1" height="1px" bgcolor={colors.grey[400]} />{" "}
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            mt="20px"
            width="100%"
            maxWidth="400px"
            gap="20px"
          >
            <Box
              component="a"
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: "100px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
                borderRadius: "8px",
              }}
            >
              <img
                src="../../assets/i-gg.png"
                alt="Google"
                style={{ width: "24%", height: "auto" }}
              />
            </Box>

            <Box
              component="a"
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: "100px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
                borderRadius: "8px",
              }}
            >
              <img
                src="../../assets/i-appstore.png"
                alt="App Store"
                style={{ width: "24%", height: "auto" }}
              />
            </Box>

            <Box
              component="a"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: "100px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
                borderRadius: "8px",
              }}
            >
              <img
                src="../../assets/i-fb.png"
                alt="Facebook"
                style={{ width: "24%", height: "auto" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
