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
import DataGridPro from "./pages/datagrid-pro";
import DataGrid from "./pages/datagrid-basic";

function App() {
  const [theme, colorMode] = useMode();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = () => {
      const myAccount = localStorage.getItem("account");
      setIsAuthenticated(myAccount !== null);
    };
    checkAuthentication();
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    return isAuthenticated;
  };

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? (
      <div className="app">
        <SidebarTab />
        <main className="content">
          <Topbar />
          {children}
        </main>
      </div>
    ) : (
      <Navigate to="/login" />
    );
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route
              path="/"
              element={
                <ProtectedRoute onLogin={handleLogin}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/datagrid-pro"
              element={
                <ProtectedRoute onLogin={handleLogin}>
                  <DataGridPro />
                </ProtectedRoute>
              }
            />
            <Route
              path="/datagrid"
              element={
                <ProtectedRoute onLogin={handleLogin}>
                  <DataGrid />
                </ProtectedRoute>
              }
            />
            <Route
              path="/customer"
              element={
                <ProtectedRoute onLogin={handleLogin}>
                  <Customer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/setting"
              element={
                <ProtectedRoute onLogin={handleLogin}>
                  <SettingSystem />
                </ProtectedRoute>
              }
            />
            <Route
              path="/employee-schedule"
              element={
                <ProtectedRoute onLogin={handleLogin}>
                  <CalendarSchedule />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
