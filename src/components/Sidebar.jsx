import { Link } from 'react-router-dom';

const Sidebar = ({ sidebarToggle }) => {
  return (
    <div className={`${sidebarToggle ? "hidden" : "block"} w-64 bg-blue-900 fixed h-full px-4 py-2`}>
      <div className='my-2 mb-4'>
        <h1 className='text-2x text-white font-bold'>Admin Dashboard</h1>
      </div>
      <hr />
      <ul className='mt-3 text-white font-bold'>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          EMPLOYEE INFORMATION
          <ul className="pl-4">
            <li className='mb-2 rounded hover:shadow hover:bg-cyan-600 py-2'>
              <Link to='/EmpPersonalInfo' className='px-3'>
                Personal Information
              </Link>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-cyan-600 py-2'>
              <Link to='/EmpEduInfo' className='px-3'>
                Educational Background
              </Link>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-cyan-600 py-2'>
              <Link to='/EmpHistory' className='px-3'>
                Employment History
              </Link>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-cyan-600 py-2'>
              <Link to='/EmpProfOrg' className='px-3'>
                Organizations/Affiliations
              </Link>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-cyan-600 py-2'>
              <Link to='/EmpLicenseCert' className='px-3'>
                Licenses/Certifications
              </Link>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-cyan-600 py-2'>
              <Link to='/EmpPosLcct' className='px-3'>
                Positions @ LCCT
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <hr />
      <ul>
        <li className='my-1 rounded hover:shadow hover:bg-cyan-600'>
                <Link to='/Logout' className='px-2'>
                  <h1 className='text-2x text-white font-bold ml-5'>Logout</h1>
                </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;