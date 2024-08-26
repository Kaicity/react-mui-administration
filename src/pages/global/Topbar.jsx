import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useTheme,
  Badge,
} from "@mui/material";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FullScreenIcon from "@mui/icons-material/Fullscreen";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinningSettingOutlinedIcon = styled(SettingsOutlinedIcon)`
  animation: ${spin} 3s linear infinite;
`;

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const enterFullScreen = () => {
    const doc = document.documentElement;

    if (doc.requestFullscreen) {
      doc.requestFullscreen();
    } else if (doc.mozRequestFullScreen) {
      // Firefox
      doc.mozRequestFullScreen();
    } else if (doc.webkitRequestFullscreen) {
      // Chrome, Safari, and Opera
      doc.webkitRequestFullscreen();
    } else if (doc.msRequestFullscreen) {
      // IE/Edge
      doc.msRequestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      // Chrome, Safari, and Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      // IE/Edge
      document.msExitFullscreen();
    }
  };

  const handleClickFullScreen = () => {
    if (document.fullscreenElement) {
      exitFullscreen();
    } else {
      enterFullScreen();
    }
  };

  const navigate = useNavigate();

  // State to control the menu open state
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Handle menu opening
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle menu closing
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("account");
    navigate("/login");
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* Thanh Search Header*/}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Tìm kiếm"></InputBase>

        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon></SearchIcon>
        </IconButton>
      </Box>

      {/* Nav menu icons */}
      <Box display="flex">
        <IconButton>
          <SignalCellularAltOutlinedIcon
            style={
              theme.palette.mode === "dark"
                ? { color: "greenyellow" }
                : { color: "#00b34e" }
            }
          />
          <Typography
            variant="h6"
            color={
              theme.palette.mode === "dark"
                ? { color: "greenyellow" }
                : { color: "#00b34e" }
            }
          >
            Connected
          </Typography>
        </IconButton>

        <Tippy content="Change Theme">
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
        </Tippy>

        <Tippy content="Notifications">
          <IconButton>
            <Badge badgeContent={5} color="error">
              <NotificationsOutlinedIcon />
            </Badge>
          </IconButton>
        </Tippy>

        <Tippy content="User">
          <IconButton>
            <PersonOutlinedIcon />
          </IconButton>
        </Tippy>

        <Tippy content="Screen Mode">
          <IconButton onClick={handleClickFullScreen}>
            <FullScreenIcon />
          </IconButton>
        </Tippy>

        <Box>
          <IconButton
            aria-controls={open ? "menu" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <SpinningSettingOutlinedIcon />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: 48 * 4.5,
                width: "20ch",
                backgroundColor: colors.primary[400],
              },
            }}
          >
            <MenuItem onClick={handleClose}>
              <AccountCircleIcon style={{ marginRight: 8 }} />
              Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <AccountCircleIcon style={{ marginRight: 8 }} />
              Account
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <LogoutIcon style={{ marginRight: 8 }} />
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
