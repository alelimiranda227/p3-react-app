import React, { useReducer, useEffect } from 'react';

const initialState = {
  name: '',
  dateOfBirth: '',
  gender: '',
  status: '',
  placeOfBirth: '',
  spouseName: '',
  permanentAddress: '',
  presentAddress: '',
  fathersName: '',
  mothersName: '',
  mothersMaidenName: '',
  religion: '',
  nationality: '',
  sssNumber: '',
  dateOfCoverage: '',
  pagibigId: '',
  tin: '',
  philhealthNo: '',
  telephoneNo: '',
  cellPhoneNumber: '',
  emergencyContactPerson: '',
  emergencyContactNumber: '',
  relationship: '',
  yearEmployed: '',
  dateHired: '',
  currentRole: '',
  department: '',
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action.field]: action.value
      };

    case 'CLEAR':
      return initialState;
      
    default:
      return state;
  }
};

const EmpPersonalInfo = () => {
  const [formData, dispatch] = useReducer(formReducer, initialState);

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem('formData'));
    if (storedFormData) {
      dispatch({ type: 'LOAD', formData: storedFormData });
    }
  }, []);

   const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'CHANGE', field: name, value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log(formData);
    dispatch({ type: 'CLEAR' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <form onSubmit={handleSubmit} className="p-4 space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <div>
            {/* Card section for personal information */}
            <div className="bg-white rounded-lg p-4 shadow-md mb-4">
              <h2 className="text-lg font-semibold mb-4">PERSONAL INFORMATION</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                  <input 
                    type="date" 
                    name="dateOfBirth" 
                    id="dateOfBirth" 
                    value={formData.dateOfBirth} 
                    onChange={handleChange} 
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                  />
                </div>
                <div>
                  <label htmlFor="placeOfBirth" className="block text-sm font-medium text-gray-700">Place of Birth</label>
                  <input 
                    type="text" 
                    name="placeOfBirth" 
                    id="placeOfBirth" 
                    value={formData.placeOfBirth} 
                    onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                  />
                </div>
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                  <select 
                    name="gender" 
                    id="gender" 
                    value={formData.gender} 
                    onChange={handleChange} 
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                  <select 
                    name="status" id="status" 
                    value={formData.status} 
                    onChange={handleChange} 
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                    <option value="">Select Status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="widowed">Widowed/Widower</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="religion" className="block text-sm font-medium text-gray-700">Religion</label>
                  <input 
                    type="text" 
                    name="religion" 
                    id="religion" 
                    value={formData.religion} 
                    onChange={handleChange} 
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                  />
                </div>
                <div>
                  <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">Nationality</label>
                  <input 
                    type="text" 
                    name="nationality" 
                    id="nationality" 
                    value={formData.nationality} 
                    onChange={handleChange} 
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                  />
                </div>
                <div className="grid grid-cols-1 md:col-span-2 gap-4">
                  <div>
                    <label htmlFor="permanendAddress" className="block text-sm font-medium text-gray-700">Permanent Address</label>
                    <input 
                      type="text" 
                      name="permanentAddress" 
                      id="permanentAddress" 
                      value={formData.permanentAddress} 
                      onChange={handleChange} 
                      className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:col-span-2 gap-4">
                  <div>
                    <label htmlFor="presentAddress" className="block text-sm font-medium text-gray-700">Present Address</label>
                    <input 
                      type="text" 
                      name="presentAddress" 
                      id="presentAddress" 
                      value={formData.presentAddress} 
                      onChange={handleChange} 
                      className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="spouseName" className="block text-sm font-medium text-gray-700">Spouse Name</label>
                  <input 
                    type="text" 
                    name="spouseName" 
                    id="spouseName" 
                    value={formData.spouseName} 
                    onChange={handleChange} 
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                  />
                </div>
                <div>
                  <label htmlFor="fathersName" className="block text-sm font-medium text-gray-700">Father's Name</label>
                  <input 
                    type="text" 
                    name="fathersName" 
                    id="fathersName" 
                    value={formData.fathersName} 
                    onChange={handleChange} 
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                  />
                </div>
                <div>
                  <label htmlFor="mothersName" className="block text-sm font-medium text-gray-700">Mother's Name</label>
                  <input 
                    type="text" 
                    name="mothersName" 
                    id="mothersName" 
                    value={formData.mothersName} 
                    onChange={handleChange} 
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                  />
                </div>
                <div>
                  <label htmlFor="mothersMaidenName" className="block text-sm font-medium text-gray-700">Mother's Maiden Name</label>
                  <input 
                    type="text" 
                    name="mothersMaidenName" 
                    id="mothersMaidenName" 
                    value={formData.mothersMaidenName} 
                    onChange={handleChange} 
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                  />
                </div>
              </div>
            </div>

            {/* Card section for contact information */}
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h2 className="text-lg font-semibold mb-4">CONTACT INFORMATION</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label htmlFor="telephoneNo" className="block text-sm font-medium text-gray-700">Telephone No</label>
                  <input 
                    type="text" 
                    name="telephoneNo" 
                    id="telephoneNo" 
                    value={formData.telephoneNo} 
                    onChange={handleChange} 
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                  />
                </div>
                <div>
                  <label htmlFor="cellPhoneNumber" className="block text-sm font-medium text-gray-700">Cell Phone Number</label>
                  <input 
                    type="text" 
                    name="cellPhoneNumber" 
                    id="cellPhoneNumber" 
                    value={formData.cellPhoneNumber} 
                    onChange={handleChange} 
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                  />
                </div>
                <div className="grid grid-cols-1 md:col-span-2 gap-4">
                  <div>
                    <label htmlFor="emergencyContactPerson" className="block text-sm font-medium text-gray-700">Emergency Contact Person</label>
                    <input 
                      type="text" 
                      name="emergencyContactPerson" 
                      id="emergencyContactPerson" 
                      value={formData.emergencyContactPerson} 
                      onChange={handleChange} 
                      className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="emergencyContactNumber" className="block text-sm font-medium text-gray-700">Emergency Contact Number</label>
                  <input 
                    type="text" 
                    name="emergencyContactNumber" 
                    id="emergencyContactNumber" 
                    value={formData.emergencyContactNumber} 
                    onChange={handleChange} 
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                  />
                </div>
                <div>
                  <label htmlFor="relationship" className="block text-sm font-medium text-gray-700">Relationship</label>
                  <input 
                    type="text" 
                    name="relationship" 
                    id="relationship" 
                    value={formData.relationship} 
                    onChange={handleChange} 
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* Card section for government IDs */}
            <div className="bg-white rounded-lg p-4 shadow-md mb-4">
              <h2 className="text-lg font-semibold mb-4">GOVERNMENT IDs</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="sssNumber" className="block text-sm font-medium text-gray-700">SSS Number</label>
                  <input 
                    type="text" 
                    name="sssNumber" 
                    id="sssNumber" 
                    value={formData.sssNumber} 
                    onChange={handleChange} 
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                  />
                </div>
                <div>
                  <label htmlFor="dateOfCoverage" className="block text-sm font-medium text-gray-700">Date of Coverage</label>
                  <input 
                    type="date" 
                    name="dateOfCoverage" 
                    id="dateOfCoverage" 
                    value={formData.dateOfCoverage} 
                    onChange={handleChange} 
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                  />
                </div>
                <div>
                  <label htmlFor="pagibigId" className="block text-sm font-medium text-gray-700">Pagibig ID</label>
                  <input 
                    type="text" 
                    name="pagibigId" 
                    id="pagibigId" 
                    value={formData.pagibigId} 
                    onChange={handleChange} 
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                  />
                </div>
                <div>
                  <label htmlFor="tin" className="block text-sm font-medium text-gray-700">Tax Identification Number</label>
                  <input 
                    type="text" 
                    name="tin" 
                    id="tin" 
                    value={formData.tin} 
                    onChange={handleChange} 
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                  />
                </div>
                <div>
                  <label htmlFor="philhealthNo" className="block text-sm font-medium text-gray-700">Philhealth Number</label>
                  <input 
                    type="text" 
                    name="philhealthNo" 
                    id="philhealthNo" 
                    value={formData.philhealthNo} 
                    onChange={handleChange} 
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                  />
                </div>
              </div>
            </div>

            {/* Card section for employment information */}
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h2 className="text-lg font-semibold mb-4">EMPLOYMENT INFORMATION</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="currentRole" className="block text-sm font-medium text-gray-700">Current Role</label>
                  <input 
                    type="text" 
                    name="currentRole" 
                    id="currentRole" 
                    value={formData.currentRole} 
                    onChange={handleChange} 
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                  />
                </div>
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
                  <input 
                    type="text" 
                    name="department" 
                    id="department" 
                    value={formData.department} 
                    onChange={handleChange} 
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                  <label htmlFor="dateHired" className="block text-sm font-medium text-gray-700">Date Hired</label>
                  <input 
                    type="date" 
                    name="dateHired" 
                    id="dateHired" 
                    value={formData.dateHired} 
                    onChange={handleChange} 
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                  />
                </div>
                <div>
                  <label htmlFor="yearEmployed" className="block text-sm font-medium text-gray-700">No. of Years Employed @ LCCT</label>
                  <input 
                    type="text" 
                    name="yearEmployed" 
                    id="yearEmployed" 
                    value={formData.yearEmployed} 
                    onChange={handleChange} 
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button type="submit" className="w-3/12 py-3 mt-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            SUBMIT
          </button>
        </div>
      </form>
    </div>

  );
};

export default EmpPersonalInfo;
