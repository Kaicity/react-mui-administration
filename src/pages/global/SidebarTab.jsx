import { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import BookOnlineOutlinedIcon from "@mui/icons-material/BookOnlineOutlined";
import CardMembershipOutlinedIcon from "@mui/icons-material/CardMembershipOutlined";
import DiscountSharpIcon from "@mui/icons-material/DiscountSharp";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
import ChatBubbleOutlineOutlined from "@mui/icons-material/ChatBubbleOutlineOutlined";
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PersonOffOutlinedIcon from "@mui/icons-material/PersonOffOutlined";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import DoorFrontOutlinedIcon from "@mui/icons-material/DoorFrontOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { LineAxisOutlined } from "@mui/icons-material";

// Define the Item component
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color:
          selected === title ? "#fff" : isHovered ? "#333" : colors.grey[100],
        backgroundColor:
          selected === title
            ? "#3699e5"
            : isHovered
            ? "#3699e5"
            : "transparent", // Set màu item khi hover ở sidebar
        borderRadius: "5px",
        transition: "background-color 0.3s ease", // Smooth transition
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setSelected(title)}
      icon={icon}
      suffix={title === "Dashboard" ? "🔥" : ""}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const SidebarTab = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // State để kiểm soát trạng thái collapse
  const [isCollapsed, setIsCollapsed] = useState(
    window.innerWidth <= theme.breakpoints.values.md
  );

  // useEffect để theo dõi sự thay đổi kích thước màn hình
  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth <= theme.breakpoints.values.md);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener khi component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [theme.breakpoints.values.md]);

  // Set mặc định Item đầu tiên là Dashboard
  const [selected, setSelected] = useState("Dashboard");

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div style={{ display: "flex", height: "100%", minHeight: "400px" }}>
      <Sidebar
        collapsed={isCollapsed}
        backgroundColor={colors.primary[400]}
        transitionDuration={1000}
        style={{ border: "none" }}
        width={
          window.innerWidth <= theme.breakpoints.values.md
            ? window.innerWidth + "px"
            : "300px"
        }
      >
        <Menu>
          <MenuItem
            onClick={handleCollapse}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              backgroundColor: "transparent", // Maintain default background
              borderRadius: "5px",
              transition: "background-color 0.3s ease", // Smooth transition
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Box display="flex" alignItems="center">
                  <img
                    alt="logo"
                    src="../../logo512.png" // Replace with your logo path
                    style={{
                      width: "40px", // Adjust size as needed
                      height: "auto",
                    }}
                  />
                  <Typography
                    variant="h4"
                    color={colors.grey[100]}
                    sx={{ p: "5px" }}
                  >
                    Nail Salon
                  </Typography>
                </Box>
                <IconButton onClick={handleCollapse}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* User */}
          {!isCollapsed && (
            <Box
              mb="25px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src="../../assets/user.jpg"
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Thong Thong
                </Typography>
                <Typography color={colors.greenAccent[400]}>
                  User is Administration
                </Typography>
              </Box>
            </Box>
          )}

          {/* MENU ITEMS USERS */}
          <Box padding={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {!isCollapsed && (
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Operation Management
              </Typography>
            )}

            <Item
              title="Ticket POS"
              to="/ticket-pos"
              icon={<ComputerOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Booking Online"
              to="/booking-onl"
              icon={<BookOnlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {!isCollapsed && (
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Gift Card Management
              </Typography>
            )}

            <Item
              title="Gift Card"
              to="/gift-card"
              icon={<CardMembershipOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="E-Gift Card Discount"
              to="/gift-card-discount"
              icon={<DiscountSharpIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="E-Gift Card Setting"
              to="/gift-card-setting"
              icon={<CardMembershipOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="E-Gift Card Management"
              to="/gift-card-manage"
              icon={<CardMembershipOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {!isCollapsed && (
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Management
              </Typography>
            )}

            <Item
              title="Sale Report"
              to="/sale-report"
              icon={<ArticleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Gift Card Report"
              to="/gift-card-report"
              icon={<ArticleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Invoices"
              to="/invoice"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Payroll"
              to="/payroll"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Audit"
              to="/audit"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Statictis"
              to="/statictis"
              icon={<LineAxisOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            {!isCollapsed && (
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Discount Management
              </Typography>
            )}

            <Item
              title="Discounts"
              to="/discount-management"
              icon={<DiscountSharpIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {!isCollapsed && (
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Promotion & Loyalty Management
              </Typography>
            )}

            <Item
              title="Promotion"
              to="/promotion"
              icon={<DiscountSharpIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Loyalty Program"
              to="/loyalaty-prog"
              icon={<DiscountSharpIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {!isCollapsed && (
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Marketing
              </Typography>
            )}

            <Item
              title="SMS"
              to="/marketing"
              icon={<ChatBubbleOutlineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="SMS Checking"
              to="/geography"
              icon={<ChatBubbleOutlineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            {!isCollapsed && (
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Service Management
              </Typography>
            )}

            <Item
              title="Service Group"
              to="/service-group"
              icon={<HomeRepairServiceOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Services"
              to="/service"
              icon={<HomeRepairServiceOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {!isCollapsed && (
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Customer Management
              </Typography>
            )}

            <Item
              title="Customer Group"
              to="/customer-group"
              icon={<Diversity3OutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Customers"
              to="/customer"
              icon={<Diversity3OutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {!isCollapsed && (
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Employee Management
              </Typography>
            )}

            <Item
              title="Roles"
              to="/employee-management"
              icon={<SupervisedUserCircleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Employee Group"
              to="/employee-group"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Employees"
              to="/employee"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Employee Schedule"
              to="/employee-schedule"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Checking History"
              to="/checking-history"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Turn Adjustment"
              to="/turn-adj"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Day off"
              to="/day-off"
              icon={<PersonOffOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {!isCollapsed && (
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Store Management
              </Typography>
            )}

            <Item
              title="Close Date"
              to="/close-date"
              icon={<DoorFrontOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Stores"
              to="/store"
              icon={<StorefrontOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {!isCollapsed && (
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Store Management
              </Typography>
            )}

            <Item
              title="Settings"
              to="/setting"
              icon={<SettingsSuggestOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Business Time"
              to="/business-time"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="SquareUp Setting"
              to="/squareup-setting"
              icon={<SettingsSuggestOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="SMS Setting"
              to="/sms-setting"
              icon={<SettingsSuggestOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Email Editor"
              to="/email-editor"
              icon={<EmailOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Email Setting"
              to="/email-setting"
              icon={<SettingsSuggestOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarTab;
