import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';

const  ProtectedLayout = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false)
  return (
    <>
      <div className='flex'>
        <Sidebar sidebarToggle={sidebarToggle}/>
        <div className={`${sidebarToggle ? " " : " ml-64 "} w-full`}>
            <Outlet />
        </div>
      </div>
    </>
  )
}

export default ProtectedLayout;
