import React, { useReducer, useEffect, useState } from 'react';

const initialState = {
  organizations: [],
  editingIndex: null
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ORGANIZATION':
      return {
        ...state,
        organizations: [...state.organizations, action.payload],
        editingIndex: null
      };
    case 'DELETE_ORGANIZATION':
      return {
        ...state,
        organizations: state.organizations.filter((_, index) => index !== action.payload.index),
        editingIndex: null
      };
    case 'CHANGE':
      const { organizationIndex, field, value } = action.payload;
      const updatedOrganizations = [...state.organizations];
      updatedOrganizations[organizationIndex] = {
        ...updatedOrganizations[organizationIndex],
        [field]: value
      };
      return {
        ...state,
        organizations: updatedOrganizations
      };
    case 'LOAD':
      return {
        ...action.formData
      };
    default:
      return state;
  }
};

const EmpOrgAffiliation = () => {
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const [organizationToAdd, setOrganizationToAdd] = useState({ name: '', position: '', inclusiveYears: '' });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem('orgAffiliationFormData'));
    if (storedFormData) {
      dispatch({ type: 'LOAD', formData: storedFormData });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('orgAffiliationFormData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrganizationToAdd({ ...organizationToAdd, [name]: value });
  };

  const handleAddOrganization = () => {
    if (organizationToAdd.name && organizationToAdd.position && organizationToAdd.inclusiveYears) {
      dispatch({ type: 'ADD_ORGANIZATION', payload: organizationToAdd });
      setOrganizationToAdd({ name: '', position: '', inclusiveYears: '' });
    }
  };

  const handleDeleteOrganization = (index) => {
    dispatch({ type: 'DELETE_ORGANIZATION', payload: { index } });
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
            <legend className="text-lg font-medium">ADD ORGANIZATION/ AFFILIATION</legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block">Organization Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={organizationToAdd.name}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="position" className="block">Position</label>
                <input
                  type="text"
                  name="position"
                  id="position"
                  value={organizationToAdd.position}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="inclusiveYears" className="block">Inclusive Years</label>
                <input
                  type="text"
                  name="inclusiveYears"
                  id="inclusiveYears"
                  value={organizationToAdd.inclusiveYears}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
          </fieldset>
          <div className="col-span-full sm:col-span-2 flex justify-end">
            <button type="button" onClick={handleAddOrganization} className="mr-2 w-auto py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              ADD ORGANIZATION/AFFILIATION
            </button>
            <button type="submit" className={`w-auto py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${saving ? 'opacity-50 cursor-not-allowed' : ''}`}>
              {saving ? 'Saving...' : 'SUBMIT'}
            </button>
          </div>
        </form>

        {/* Table to display entered organizations */}
        <div className="mt-8">
          <h2 className="text-lg font-medium mb-4">LIST OF ORGANIZATIONS/AFFILIATIONS</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Organization Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Position
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Inclusive Years
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {formData.organizations.map((organization, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{organization.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{organization.position}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{organization.inclusiveYears}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button onClick={() => handleDeleteOrganization(index)} className="text-indigo-600 hover:text-red-900">Delete</button>
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

export default EmpOrgAffiliation;
