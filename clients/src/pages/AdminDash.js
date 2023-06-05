import { useState } from "react";

 

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
import { Route ,Routes} from "react-router-dom";
 
 import Topbar from "../scenes/global/Topbar";
import Dashboard from "../scenes/dashboard";
import Sidebar from "../scenes/global/Sidebar";
 import Team from "../scenes/team";
import Contacts from "../scenes/contacts";
import FAQ from "../scenes/faq";

import Profile from "../scenes/form/Profile";




function AdminDash() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        <Sidebar isSidebar={isSidebar} />

          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
               <Route path="/team" element={<Team />} /> 
               
               <Route path="/contacts" element={<Contacts />} />
              
               <Route path="/formm" element={<Profile />} />
               <Route path="/faq" element={<FAQ />} />
               





              </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default AdminDash