import React, { useReducer, useEffect, useState } from 'react';

const initialState = {
  licenses: [],
  editingIndex: null
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_LICENSE':
      return {
        ...state,
        licenses: [...state.licenses, action.payload],
        editingIndex: null
      };
    case 'DELETE_LICENSE':
      return {
        ...state,
        licenses: state.licenses.filter((_, index) => index !== action.payload.index),
        editingIndex: null
      };
    case 'CHANGE':
      const { licenseIndex, field, value } = action.payload;
      const updatedLicenses = [...state.licenses];
      updatedLicenses[licenseIndex] = {
        ...updatedLicenses[licenseIndex],
        [field]: value
      };
      return {
        ...state,
        licenses: updatedLicenses
      };
    case 'LOAD':
      return {
        ...action.formData
      };
    default:
      return state;
  }
};

const EmpLicenseCert = () => {
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const [licenseToAdd, setLicenseToAdd] = useState({ name: '', yearTaken: '', rating: '', expiryDate: '' });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem('licenseCertFormData'));
    if (storedFormData) {
      dispatch({ type: 'LOAD', formData: storedFormData });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('licenseCertFormData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLicenseToAdd({ ...licenseToAdd, [name]: value });
  };

  const handleAddLicense = () => {
    if (licenseToAdd.name && licenseToAdd.yearTaken && licenseToAdd.rating && licenseToAdd.expiryDate) {
      dispatch({ type: 'ADD_LICENSE', payload: licenseToAdd });
      setLicenseToAdd({ name: '', yearTaken: '', rating: '', expiryDate: '' });
    }
  };

  const handleDeleteLicense = (index) => {
    dispatch({ type: 'DELETE_LICENSE', payload: { index } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      console.log(formData);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 py-6">
      <div className="max-w-4xl mx-auto mt-6 px-6 bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-4">
          <fieldset>
            <legend className="text-lg font-medium">ADD LICENSES/ CERTIFICATIONS </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block">Licensure/Certification</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={licenseToAdd.name}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="yearTaken" className="block">Year Taken</label>
                <input
                  type="text"
                  name="yearTaken"
                  id="yearTaken"
                  value={licenseToAdd.yearTaken}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="rating" className="block">Rating</label>
                <input
                  type="text"
                  name="rating"
                  id="rating"
                  value={licenseToAdd.rating}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="expiryDate" className="block">Expiry Date</label>
                <input
                  type="date"
                  name="expiryDate"
                  id="expiryDate"
                  value={licenseToAdd.expiryDate}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
          </fieldset>
          <div className="col-span-full sm:col-span-2 flex justify-end">
            <button type="button" onClick={handleAddLicense} className="mr-2 w-auto py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              ADD LICENSE/CERTIFICATION
            </button>
            <button type="submit" className={`w-auto py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${saving ? 'opacity-50 cursor-not-allowed' : ''}`}>
              {saving ? 'Saving...' : 'SUBMIT'}
            </button>
          </div>
        </form>

        {/* Table to display entered licenses */}
        <div className="mt-8">
          <h2 className="text-lg font-medium mb-4">LIST OF LICENSES/CERTIFICATIONS</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    License/Certification
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Year Taken
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Expiry Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {formData.licenses.map((license, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{license.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{license.yearTaken}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{license.rating}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{license.expiryDate}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button onClick={() => handleDeleteLicense(index)} className="text-sky-600 hover:text-red-900">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpLicenseCert;
