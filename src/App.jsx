//import { Routes, Route } from 'react-router-dom';
import {Routes, Route } from 'react-router-dom';
import { useState } from 'react';

//layout
import PublicLayout from './layout/PublicLayout';
import ProtectedLayout from './layout/ProtectedLayout';

//components
import Sidebar from './components/Sidebar';

//pages

import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Home from './pages/Home';
import EmpPersonalInfo from './pages/EmpPersonalInfo';
import EmpEduInfo from './pages/EmpEduInfo';
import EmpHistory from './pages/EmpHistory';
import EmpProfOrg from './pages/EmpProfOrg';
import EmpLicenseCert from './pages/EmpLicenseCert';
import EmpPosLcct from './pages/EmpPosLcct';
import Logout from './pages/Logout';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
      <Routes>
        {
          isLoggedIn ? (
            <Route element={<ProtectedLayout />}>
              <Route path='/' element={<Home />}  />
              <Route path='/sidebar' element={<Sidebar />} />
              <Route path='/EmpPersonalInfo' element={<EmpPersonalInfo />} />
              <Route path='/EmpEduInfo' element={<EmpEduInfo />} />
              <Route path='/EmpHistory' element={<EmpHistory />} />
              <Route path='/EmpProfOrg' element={<EmpProfOrg />} />
              <Route path='/EmpLicenseCert' element={<EmpLicenseCert />} />
              <Route path='/EmpPosLcct' element={<EmpPosLcct />} />
              <Route path='/Logout' element={<Logout setIsLoggedIn = {setIsLoggedIn} />} />
            </Route>
          ) : (
            <Route element={<PublicLayout />}>
              <Route path='/' element={<Login setIsLoggedIn = {setIsLoggedIn} />}/>
              <Route path='/login' element={<Login setIsLoggedIn = {setIsLoggedIn} />}/>
            </Route>
          )
        }
        
        <Route path='*' element={<NotFound />} />

      </Routes>
  )  
}

export default App;
