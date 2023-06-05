 

/*import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Profiles from './pages/Profiles';

 import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';
import NoAccess from './pages/NoAccess';
import NotFound from './pages/NotFound';
import PrivateRouter from './components/PrivateRouter';
import AdminRouter from './components/AdminRouter';
import ForceRedirect from './components/ForceRedirect';
import { setUser } from './redux/actions/authActions';
import store from "./redux/store"
import jwt_decode from "jwt-decode"
import { useSelector } from 'react-redux';
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
 import FAQ from "./scenes/faq";
 import Linee from "./scenes/line";
import Barr from "./scenes/bar";
import User from "./pages/User";
import ReclamUser from "./pages/ReclamUser";
import Conges from "./pages/CongesUser";
import DemissUser from "./pages/DemissUser";
import Profiless from "./scenes/form";
import Profile from "./scenes/form/Profile";
   
 

if(localStorage.jwt){
  const decode=jwt_decode(localStorage.jwt)

   store.dispatch(setUser(decode))
}



function App() {
  
  const auth= useSelector(state=>state.auth)
  const user = {
    isConnected: auth.isConnected,
    role: auth.user.role
  }
  
  return (
    <BrowserRouter>
      <Navbar user={user} />
      <Routes>
        <Route path="/bar" element={<Barr />} />
        <Route path="/line" element={<Linee />} />
        <Route path="/conge" element={<Conges />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/form" element={
        <PrivateRouter user={user}>
            <Profiles />
            </PrivateRouter>
        } />
     
        <Route path="/demiss" element={<DemissUser />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/team" element={<Team />} />
        <Route path="/reclam" element={<ReclamUser />} />

        <Route path="/contacts" element={<Contacts />} />
        
        <Route path="/" element={
          <PrivateRouter user={user}>
            {user.role === 'USER' ? (
              <User />
            ) : (
              <Admin />
            )}
          </PrivateRouter>
        } />
        
        <Route path="/login" element={
          <ForceRedirect user={user}>
            <Login/> 
          </ForceRedirect>
        } />
        
        <Route path="/register" element={
          <ForceRedirect user={user}>
            <Register /> 
          </ForceRedirect>
        } />
        
        <Route path="/admin" element={
          <AdminRouter user={user}>
            <Admin />
          </AdminRouter>
        } />
        
        <Route path="*" element={<NotFound />} />
        <Route path="/noaccess" element={<NoAccess />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;*/


 import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
 
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import NoAccess from './pages/NoAccess';
import PrivateRouter from './components/PrivateRouter';
import AdminRouter from './components/AdminRouter';
import ForceRedirect from './components/ForceRedirect';
import store from './redux/store'
import jwt_decode from 'jwt-decode'
import { Logout, setUser } from './redux/actions/authActions';
import { useSelector } from 'react-redux';
import { setAuth } from './util/setAuth';
import User from "./pages/User";
import AdminDash from "./pages/AdminDash";
import Dashboard from "./scenes/dashboard";
import Conges from "./pages/CongesUser";
import FAQ from "./scenes/faq";
import Profiless from "./scenes/form";
import Team from "./scenes/team";
import ReclamUser from "./pages/ReclamUser";
import DemissUser from "./pages/DemissUser";
import Reclamationss from "./scenes/claim";
import TeamClaim from "./scenes/teamclaim";
import Resignationss from "./scenes/resignation";
import TeamResignation from "./scenes/teamresignation";
import Leavess from "./scenes/conge";
import TeamConge from "./scenes/teamconge";

 if(window.localStorage.jwt){
   const decode = jwt_decode(window.localStorage.jwt)
   store.dispatch(setUser(decode))
   setAuth(window.localStorage.jwt)
   const currentDate = Date.now / 1000

   if(decode.exp >  currentDate){
    store.dispatch(Logout()) 
   }
 }


function App() {
  const auth = useSelector(state => state.auth)
  const user = {
    isConnected: auth.isConnected,
    role: auth.user.role
  }
  return (
    <BrowserRouter>
     
     <Navbar user={user}/>
    <Routes>
    
    
     
     
        <Route path="/faq" element={<FAQ />} />
    <Route path="/dashboard" element={<Dashboard />} />
    
    <Route path="/" element={
          <PrivateRouter user={user}>
            {user.role === 'USER' ? (
              <User />
            ) : (
              <AdminDash />
            )}
          </PrivateRouter>
        } />

     <Route path="/team" element={
       <Team />
      } />     
     
   <Route path="/form" element={
            <PrivateRouter user={user}>
            <Profiless />
            </PrivateRouter>
           
        } />
        <Route path="/teamclaim" element={
       <TeamClaim />
    } />
        
        <Route path="/claim" element={
            <PrivateRouter user={user}>
            <Reclamationss />
            </PrivateRouter>
           
        } />
        <Route path="/teamresignation" element={
       <TeamResignation />
    } />
    
        
        <Route path="/resignation" element={
            <PrivateRouter user={user}>
            <Resignationss />
            </PrivateRouter>
           
        } />
        
          <Route path="/login" element={
          <ForceRedirect user={user}>
            <Login />
          </ForceRedirect>
        } />
          <Route path="/register" element={
          <ForceRedirect user={user}>
            <Register />
          </ForceRedirect>
        } />
          <Route path="/admin" element={
          <AdminRouter user={user}>
            <Admin />
          </AdminRouter>
        } />
          <Route path="*" element={<NotFound />} />
          <Route path="/noaccess" element={<NoAccess />} />
    </Routes>
    
  </BrowserRouter>
  );
}

export default App;


