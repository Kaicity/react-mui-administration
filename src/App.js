import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from "./pages/global/Topbar";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import SidebarTab from './pages/global/SidebarTab';

// import Team from './pages/team'
// import Invoices from './pages/Invoices'
// import Contacts from './pages/Contacts'
// import Bar from './pages/Bar'
// import Form from './pages/Form'
// import Line from './pages/Line'
// import Pie from './pages/global/Pie';
// import FAQ from './pages/global/FAQ';
// import Geography from './pages/global/Geography';
// import Calendar from './pages/global/Calendar';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className="app">
            <SidebarTab />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />

                {/* <Route path="/team" element={<Team />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/form" element={<Form />} />
                <Route path="/line" element={<Line />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/calendar" element={<Calendar />} /> */}
              </Routes>
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
