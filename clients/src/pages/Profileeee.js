 


 /*import React from 'react'
import Inputs from '../components/Inputs'

function Profile() {
  return (




    <div className="container p-4 mt-4">
      <div className="row justify-content-evenly mt-4">

        <div className="col-lg-6 col-md-12 mt-4">
          <div id="isso" className="d-flex">
            <i id="isso" className="fa-solid fa-user fs-1 mx-2"></i> <h2>Profile</h2>
          </div>
          <div className="p-6 shadow-lg p-3 mb-5 bg-body rounded" style={{ backgroundColor: "white" }}>
            <form>
              <Inputs name="tel" label="Telephone"  type="text"/>
              <Inputs name="city" label="City" type="text" />
              <Inputs name="country" label="Country" type="text"  />
              <Inputs name="bio" label="Bio" type="text"  />
              <Inputs name="postalcode" label="PostalCode"  type="text"/>
              <div className=" mb-3">
                <label className="form-label">Address</label>
                <div className="input-group">
                  <textarea type="text" className="form-control" name="address"></textarea>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-outline-primary">Update <i className="fa-solid fa-floppy-disk"></i></button>
              </div>
            </form>

          </div>

        </div>
      </div>
    </div>


  )
}

export default Profile  */


import { useState } from "react";

 

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
import { Route ,Routes} from "react-router-dom";
 
 import Topbar from "../scenes/global/Topbar";
import Dashboard from "../scenes/dashboard";
import Sidebar from "../scenes/global/Sidebar";
 import Team from "../scenes/team";
import Contacts from "../scenes/contacts";
import Invoices from "../scenes/invoices";
import Formm from "../scenes/form";
import FAQ from "../scenes/faq";
import Piee from "../scenes/pie";
import Linee from "../scenes/line";
import Barr from "../scenes/bar";




function Profile() {
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
               <Route path="/invoices" element={<Invoices />} />
               <Route path="/form" element={<Formm />} />
               <Route path="/faq" element={<FAQ />} />
               <Route path="/pie" element={<Piee />} />
               <Route path="/line" element={<Linee />} />
               <Route path="/bar" element={<Barr />} />





              </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Profile;


