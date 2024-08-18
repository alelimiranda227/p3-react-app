import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const Logout = ({setIsLoggedIn}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions here, such as clearing session/local storage
    setIsLoggedIn(false);
    localStorage.removeItem('token'); 

    // Redirect to login page or any other page after logout
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 py-6 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4">Logout</h2>
        <p className="text-gray-700 mb-4">Are you sure you want to logout?</p>
        <div className="flex justify-end">
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-300 focus:outline-none focus:bg-sky-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;