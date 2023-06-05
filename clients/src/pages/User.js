import { useState } from "react";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
import { Route, Routes } from "react-router-dom";

import TopbarUser from "../scenes/global/TopbarUser";
import SidebarUser from "../scenes/global/SidebarUser";

import FAQ from "../scenes/faq";

import DashboardUser from "../scenes/dashboard/user";
import ReclamUser from "./ReclamUser";
import Conges from "./CongesUser";
import DemissUser from "./DemissUser";
import Profiles from "./Profiles";
import Profile from "../scenes/form/Profile";

function User() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SidebarUser isSidebar={isSidebar} />

          <main className="content">
            <TopbarUser setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<DashboardUser />} />
              <Route path="/reclam" element={<ReclamUser />} />
              <Route path="/conge" element={<Conges />} />
              <Route path="/formm" element={<Profile />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/demiss" element={<DemissUser />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default User;

/*import React from 'react'
  
 function Admin() {
   
  return (
    
     
    
     
       
      <div className="container p-4 mt-4">
        <div className="row justify-content-evenly mt-4">
           
           <div className="col-lg-12 col-md-12 mt-4">
               <div className="d-flex">
                <i className="fa-solid fa-user fs-1 mx-2"></i> <h2>Profiles list</h2>
               </div>
               <div className="shadow-lg p-3 mb-5 bg-body rounded" style={{backgroundColor: "white"}}>
                <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col">role</th>
                        <th scope="col">telephone</th>
                        <th scope="col">city</th>
                        <th scope="col">country</th>
                        <th scope="col">bio</th>
                        <th scope="col">actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>youssef</th>
                        <td>test@live.fr</td>
                        <td>ADMIN</td>
                        <td>56666666</td>
                        <td>tunisia</td>
                        <td>tunisia</td>
                        <td>im full stack developer</td>
                        <td><button className="btn btn-outline-danger">Delete</button></td>
                      </tr>
                    </tbody>
                  </table>
            </div>
           </div>
       </div>
   </div>
    
  )
}

export default Admin;*/
