import React, { useReducer, useEffect, useState } from 'react';

const initialState = {
  positions: [],
  editingIndex: null
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POSITION':
      return {
        ...state,
        positions: [...state.positions, action.payload]
      };
    case 'DELETE_POSITION':
      return {
        ...state,
        positions: state.positions.filter((_, index) => index !== action.payload)
      };
    case 'LOAD':
      return action.payload;
    default:
      return state;
  }
};

const EmpPosLcct = () => {
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const [positionToAdd, setPositionToAdd] = useState({ position: '', inclusiveYears: '' });

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem('posLcctFormData'));
    if (storedFormData) {
      dispatch({ type: 'LOAD', payload: storedFormData });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('posLcctFormData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPositionToAdd({ ...positionToAdd, [name]: value });
  };

  const handleAddPosition = () => {
    dispatch({ type: 'ADD_POSITION', payload: positionToAdd });
    setPositionToAdd({ position: '', inclusiveYears: '' });
  };

  const handleDeletePosition = (index) => {
    dispatch({ type: 'DELETE_POSITION', payload: index });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 py-6">
      <div className="max-w-lg mx-auto mt-6 py-6 px-6 bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <fieldset>
              <legend className="text-lg font-medium">ADD POSITION</legend>
              <div>
                <label htmlFor="position" className="block">Position held in LCCT</label>
                <input
                  type="text"
                  name="position"
                  id="position"
                  value={positionToAdd.position}
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
                  value={positionToAdd.inclusiveYears}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={handleAddPosition}
                  className="px-4 py-2 border border-indigo-500 rounded-md text-indigo-500 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Add Position
                </button>
              </div>
            </fieldset>
          </div>
        </form>

        {/* Table to display entered positions */}
        <div className="mt-8">
          <h2 className="text-lg font-medium mb-4">LIST OF POSITIONS HELD IN LCCT</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
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
              {formData.positions.map((position, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{position.position}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{position.inclusiveYears}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      type="button"
                      onClick={() => handleDeletePosition(index)}
                      className="text-sky-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Submit Button */}
        <div className="mt-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmpPosLcct;
