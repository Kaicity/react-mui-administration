import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./pages/global/Topbar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import SidebarTab from "./pages/global/SidebarTab";
import Customer from "./pages/customer";
import CalendarSchedule from "./pages/calendar-schedule";
import SettingSystem from "./pages/setting-system";
import Login from "./pages/login";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [theme, colorMode] = useMode();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    getAccount()
  }, []);

  const getAccount = () => {
    let myAccount = localStorage.getItem('account');
    if (myAccount) {
      setIsAuthenticated(true);
    }
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            {/* Routes Cho các trang phía ngoài - public */}
            <Route path="/login" element={<Login />} />

            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <div className="app">
                    <SidebarTab />
                    <main className="content">
                      <Topbar />
                      <Dashboard />
                    </main>
                  </div>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />

            <Route
              path="/customer"
              element={
                isAuthenticated ? (
                  <div className="app">
                    <SidebarTab />
                    <main className="content">
                      <Topbar />
                      <Customer />
                    </main>
                  </div>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />

            <Route
              path="/setting"
              element={
                isAuthenticated ? (
                  <div className="app">
                    <SidebarTab />
                    <main className="content">
                      <Topbar />
                      <SettingSystem />
                    </main>
                  </div>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />

            <Route path="/employee-schedule" element={<CalendarSchedule />} />
            <Route path="/setting" element={<SettingSystem />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
