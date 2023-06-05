





/*import { useState } from "react";

 

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
import { Route ,Routes} from "react-router-dom";
 
 import Topbar from "../scenes/global/Topbar";
import Dashboard from "../scenes/dashboard";
import Sidebar from "../scenes/global/Sidebar";
 import Team from "../scenes/team";
import Contacts from "../scenes/contacts";
import Invoices from "../scenes/invoices";
import FAQ from "../scenes/faq";
import Piee from "../scenes/pie";
import Linee from "../scenes/line";
import Barr from "../scenes/bar";
import Profiles from "./Profiles";




function Admin() {
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
               <Route path="/form" element={<Profiles />} />
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

export default Admin;*/




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

export default Admin;

/*import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RowDetails from '../components/RowDetails'
import { GetProfiles } from '../redux/actions/profileActions'

function Admin() {
  
  const profiles = useSelector(state => state.profiles)
  const dispatch  = useDispatch()
  useEffect(async()=>{
    await dispatch(GetProfiles())
  },[])
  return (
    
     
      <div class="container p-4 mt-4">
        <div class="row justify-content-evenly mt-4">
           
           <div class="col-lg-12 col-md-12 mt-4">
               <div class="d-flex">
                <i class="fa-solid fa-user fs-1 mx-2"></i> <h2>Profiles list</h2>
               </div>
               <div class="shadow-lg p-3 mb-5 bg-body rounded" style={{backgroundColor: "white"}}>
                <table class="table table-hover">
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
                      {
                        profiles.profiles.map(({_id, user, tel, city, country, bio})=>(
                           <RowDetails _id={_id} user={user} tel={tel} city={city} country={country} bio={bio} />
                        ))
                      }
                      
                    </tbody>
                  </table>
            </div>
           </div>
       </div>
   </div>
   
  )
}

export default Admin*/

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RowDetails from '../components/RowDetails'
import { GetProfiles } from '../redux/actions/profileActions'

function Admin() {
  
  const profiles = useSelector(state => state.profiles)
  const dispatch  = useDispatch()
  
useEffect(() => {
  const fetchProfiles = async () => {
    await dispatch(GetProfiles());
  };

  fetchProfiles();
}, [dispatch, GetProfiles]);
  return (
    
     
      <div class="container p-4 mt-4">
        <div class="row justify-content-evenly mt-4">
           
           <div class="col-lg-12 col-md-12 mt-4">
               <div class="d-flex">
                <i class="fa-solid fa-user fs-1 mx-2"></i> <h2>Profiles list</h2>
               </div>
               <div class="shadow-lg p-3 mb-5 bg-body rounded" style={{backgroundColor: "white"}}>
                <table class="table table-hover">
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
                      {
                        profiles.profiles.map(({_id, user, tel, city, country, bio})=>(
                           <RowDetails _id={_id} user={user} tel={tel} city={city} country={country} bio={bio} />
                        ))
                      }
                      
                    </tbody>
                  </table>
            </div>
           </div>
       </div>
   </div>
   
  )
}

export default Admin

