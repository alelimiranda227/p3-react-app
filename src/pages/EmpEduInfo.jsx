import React, { useReducer, useEffect } from 'react';

const initialState = {
  elem_schoolName: '',
  elem_schoolAdd: '',
  elem_schoolYrGrad: '',
  high_schoolName: '',
  high_schoolAdd: '',
  high_schoolYrGrad: '',
  shs_track: '',
  shs_schoolName: '',
  shs_schoolAdd: '',
  shs_schoolYrGrad: '',
  underGrad_degree: '',
  underGrad_majorMinor: '',
  underGrad_schoolName: '',
  underGrad_schoolAdd: '',
  underGrad_schoolYrGrad: '',
  grad_degree: '',
  grad_majorMinor: '',
  grad_schoolName: '',
  grad_schoolAdd: '',
  grad_schoolYrGrad: '',
  postGrad_degree: '',
  postGrad_majorMinor: '',
  postGrad_schoolAdd: '',
  postGrad_schoolName: '',
  postGrad_schoolYrGrad: '',
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action.field]: action.value
      };
    case 'LOAD':
      return action.formData || initialState;
    case 'CLEAR':
      return initialState;
    default:
      return state;
  }
};

const EmpEduInfo = () => {
  const [formData, dispatch] = useReducer(formReducer, initialState);

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem('eduFormData'));
    if (storedFormData) {
      dispatch({ type: 'LOAD', formData: storedFormData });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'CHANGE', field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('eduFormData', JSON.stringify(formData));
    console.log(formData);
    dispatch({ type: 'CLEAR' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 py-6"> 
      <div className="max-w-screen-md mx-auto bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <fieldset>
            <legend className="text-lg font-medium">ELEMENTARY</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="elem_schoolName" className="block">Name of School</label>
                <input
                  type="text"
                  name="elem_schoolName"
                  id="elem_schoolName"
                  value={formData.elem_schoolName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="elem_schoolAdd" className="block">Address</label>
                <input
                  type="text"
                  name="elem_schoolAdd"
                  id="elem_schoolAdd"
                  value={formData.elem_schoolAdd}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="elem_schoolYrGrad" className="block">Year Graduated</label>
                <input
                  type="text"
                  name="elem_schoolYrGrad"
                  id="elem_schoolYrGrad"
                  value={formData.elem_schoolYrGrad}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-lg font-medium">HIGH SCHOOL</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="high_schoolName" className="block">Name of School</label>
                <input
                  type="text"
                  name="high_schoolName"
                  id="high_schoolName"
                  value={formData.high_schoolName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="high_schoolAdd" className="block">Address</label>
                <input
                  type="text"
                  name="high_schoolAdd"
                  id="high_schoolAdd"
                  value={formData.high_schoolAdd}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="high_schoolYrGrad" className="block">Year Graduated</label>
                <input
                  type="text"
                  name="high_schoolYrGrad"
                  id="high_schoolYrGrad"
                  value={formData.high_schoolYrGrad}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-lg font-medium">SENIOR HIGH SCHOOL</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="shs_track" className="block">Track/Strand</label>
                <input
                  type="text"
                  name="shs_track"
                  id="shs_track"
                  value={formData.shs_track}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="shs_schoolName" className="block">Name of School</label>
                <input
                  type="text"
                  name="shs_schoolName"
                  id="shs_schoolName"
                  value={formData.shs_schoolName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="shs_schoolAdd" className="block">Address</label>
                <input
                  type="text"
                  name="shs_schoolAdd"
                  id="shs_schoolAdd"
                  value={formData.shs_schoolAdd}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="shs_schoolYrGrad" className="block">Year Graduated</label>
                <input
                  type="text"
                  name="shs_schoolYrGrad"
                  id="shs_schoolYrGrad"
                  value={formData.shs_schoolYrGrad}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-lg font-medium">UNDERGRADUATE STUDIES</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="underGrad_degree" className="block">Degree Earned</label>
                <input
                  type="text"
                  name="underGrad_degree"
                  id="underGrad_degree"
                  value={formData.underGrad_degree}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="underGrad_majorMinor" className="block">Major/Minor</label>
                <input
                  type="text"
                  name="underGrad_majorMinor"
                  id="underGrad_majorMinor"
                  value={formData.underGrad_majorMinor}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="underGrad_schoolName" className="block">Name of School</label>
                <input
                  type="text"
                  name="underGrad_schoolName"
                  id="underGrad_schoolName"
                  value={formData.underGrad_schoolName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="underGrad_schoolAdd" className="block">Address</label>
                <input
                  type="text"
                  name="underGrad_schoolAdd"
                  id="underGrad_schoolAdd"
                  value={formData.underGrad_schoolAdd}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="underGrad_schoolYrGrad" className="block">Year Graduated</label>
                <input
                  type="text"
                  name="underGrad_schoolYrGrad"
                  id="underGrad_schoolYrGrad"
                  value={formData.underGrad_schoolYrGrad}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-lg font-medium">GRADUATE STUDIES</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="grad_degree" className="block">Degree Earned</label>
                <input
                  type="text"
                  name="grad_degree"
                  id="grad_degree"
                  value={formData.grad_degree}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="grad_majorMinor" className="block">Major/Minor</label>
                <input
                  type="text"
                  name="grad_majorMinor"
                  id="grad_majorMinor"
                  value={formData.grad_majorMinor}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="grad_schoolName" className="block">Name of School</label>
                <input
                  type="text"
                  name="grad_schoolName"
                  id="grad_schoolName"
                  value={formData.grad_schoolName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="grad_schoolAdd" className="block">Address</label>
                <input
                  type="text"
                  name="grad_schoolAdd"
                  id="grad_schoolAdd"
                  value={formData.grad_schoolAdd}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="grad_schoolYrGrad" className="block">Year Graduated</label>
                <input
                  type="text"
                  name="grad_schoolYrGrad"
                  id="grad_schoolYrGrad"
                  value={formData.grad_schoolYrGrad}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-lg font-medium">POST GRADUATE STUDIES</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="postGrad_degree" className="block">Degree Earned</label>
                <input
                  type="text"
                  name="postGrad_degree"
                  id="postGrad_degree"
                  value={formData.postGrad_degree}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="postGrad_majorMinor" className="block">Major/Minor</label>
                <input
                  type="text"
                  name="postGrad_majorMinor"
                  id="postGrad_majorMinor"
                  value={formData.postGrad_majorMinor}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="postGrad_schoolName" className="block">Name of School</label>
                <input
                  type="text"
                  name="postGrad_schoolName"
                  id="postGrad_schoolName"
                  value={formData.postGrad_schoolName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="postGrad_schoolAdd" className="block">Address</label>
                <input
                  type="text"
                  name="postGrad_schoolAdd"
                  id="postGrad_schoolAdd"
                  value={formData.postGrad_schoolAdd}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="postGrad_schoolYrGrad" className="block">Year Graduated</label>
                <input
                  type="text"
                  name="postGrad_schoolYrGrad"
                  id="postGrad_schoolYrGrad"
                  value={formData.postGrad_schoolYrGrad}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
          </fieldset>

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="w-3/12 py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmpEduInfo;
