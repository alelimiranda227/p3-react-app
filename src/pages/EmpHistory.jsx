import React, { useReducer, useEffect, useState } from 'react';

const initialState = {
  workExperience: {
    institution: '',
    address: '',
    position: '',
    startMonth: '',
    startYear: '',
    endMonth: '',
    endYear: ''
  },
  workExperiences: []
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      const { field, value } = action.payload;
      return {
        ...state,
        workExperience: {
          ...state.workExperience,
          [field]: value
        }
      };
    case 'ADD_WORK_EXPERIENCE':
      return {
        ...state,
        workExperiences: [...state.workExperiences, state.workExperience],
        workExperience: initialState.workExperience
      };
    case 'LOAD':
      return {
        ...state,
        workExperiences: action.formData.workExperiences || []
      };
    default:
      return state;
  }
};

const EmpHistory = () => {
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem('historyFormData'));
    if (storedFormData) {
      dispatch({ type: 'LOAD', formData: storedFormData });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'CHANGE', payload: { field: name, value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaving(true);
    dispatch({ type: 'ADD_WORK_EXPERIENCE' });
    setTimeout(() => {
      setIsSaving(false);
      localStorage.setItem('historyFormData', JSON.stringify({ workExperiences: formData.workExperiences }));
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 py-6"> 
      <div className="max-w-2xl mx-auto px-6 py-6 bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-4">
          <fieldset>
            <legend className="text-lg font-medium">WORK EXPERIENCE</legend>
            <div>
              <label htmlFor="institution" className="block">Name of Institution/Company</label>
              <input 
                type="text" 
                name="institution" 
                id="institution" 
                value={formData.workExperience.institution} 
                onChange={handleChange} 
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
              />
            </div>
            <div>
              <label htmlFor="address" className="block">Address</label>
              <input 
                type="text" 
                name="address" 
                id="address" 
                value={formData.workExperience.address} 
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
                value={formData.workExperience.position} 
                onChange={handleChange} 
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
              />
            </div>
            <div>
              <label className="block">INCLUSIVE YEARS</label>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label htmlFor="startMonth" className="block">Start Month</label>
                  <input 
                    type="text" 
                    name="startMonth" 
                    id="startMonth" 
                    value={formData.workExperience.startMonth} 
                    onChange={handleChange} 
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                  />
                </div>
                <div>
                  <label htmlFor="startYear" className="block">Start Year</label>
                  <input 
                    type="text" 
                    name="startYear" 
                    id="startYear" 
                    value={formData.workExperience.startYear} 
                    onChange={handleChange} 
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                  />
                </div>
                <div>
                  <label htmlFor="endMonth" className="block">End Month</label>
                  <input 
                    type="text" 
                    name="endMonth" 
                    id="endMonth" 
                    value={formData.workExperience.endMonth} 
                    onChange={handleChange} 
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                  />
                </div>
                <div>
                  <label htmlFor="endYear" className="block">End Year</label>
                  <input 
                    type="text" 
                    name="endYear" 
                    id="endYear" 
                    value={formData.workExperience.endYear} 
                    onChange={handleChange} 
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                  />
                </div>
              </div>
            </div>
          </fieldset>
      
          <div className="flex justify-center">
            <button 
              type="submit" 
              className="flex-1 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isSaving ? 'SAVING...' : 'SUBMIT'}
            </button>
          </div>
        </form>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">WORK EXPERIENCE SUMMARY</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Institution</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Address</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Position</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Start Date</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">End Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {formData.workExperiences.map((workExperience, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 text-sm text-gray-900">{workExperience.institution}</td>
                  <td className="px-4 py-2 text-sm text-gray-900">{workExperience.address}</td>
                  <td className="px-4 py-2 text-sm text-gray-900">{workExperience.position}</td>
                  <td className="px-4 py-2 text-sm text-gray-900">{`${workExperience.startMonth}/${workExperience.startYear}`}</td>
                  <td className="px-4 py-2 text-sm text-gray-900">{`${workExperience.endMonth}/${workExperience.endYear}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmpHistory;
