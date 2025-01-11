import React, { useState } from 'react';

function Assign() {
  const [fields, setFields] = useState([{ input: '', select: '' }]);
  const [errors, setErrors] = useState([]);

  const handleInputChange = (index, event) => {
    const values = [...fields];
    values[index][event.target.name] = event.target.value;
    setFields(values);
  };

  const handleAddField = () => {
    setFields([...fields, { input: '', select: '' }]);
  };

  const handleDeleteField = (index) => {
    const values = [...fields];
    values.splice(index, 1);
    setFields(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let validationErrors = [];
    fields.forEach((field, index) => {
      if (!field.input || !field.select) {
        validationErrors[index] = 'Both fields are required.';
      }
    });
    setErrors(validationErrors);
    if (!validationErrors.length) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="flex-none justify-items-center bg-white border rounded-md border-gray-300 drop-shadow-2xl px-6 py-4">
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index} className="bg-white flex-initial items-center py-4 px-4">
            <input
              type="text"
              name="input"
              value={field.input}
              onChange={(event) => handleInputChange(index, event)}
              placeholder="Enter text"
              className="bg-white text-black border rounded-md border-black p-2 mr-2 flex-1"
            />
            <select
              name="select"
              value={field.select}
              onChange={(event) => handleInputChange(index, event)}
              className="bg-white text-black border rounded-md border-black p-2 mr-2 flex-1">
              <option value="">Select an option</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
            <button type="button" onClick={() => handleDeleteField(index)} className="bg-red-500 text-white rounded-md hover:bg-red-700 font-semibold px-4 py-2">
              Delete
            </button>
            {errors[index] && (
              <p className="text-red-500 mt-2">{errors[index]}</p>
            )}
          </div>
        ))}
        <div className='flex items-center justify-center'>
          <button
            type="button"
            onClick={handleAddField}
            className="flex-none rounded-md font-semibold justify-items-center hover:bg-blue-700 bg-blue-500 text-white px-3 py-2 mr-1"
          >
            +
          </button>
          <button type="submit" className="flex-none items-center font-semibold rounded-md hover:bg-green-700 bg-green-500 text-white px-4 py-2 ml-1">
            Submit
          </button>
        </div>
      </form>

      <h3 className="items-center mt-6 text-black">Form State</h3>
      <table className="table-auto w-full mt-4 border-collapse border border-black-800">
        <thead>
          <tr>
            <th className="border border-black px-4 py-2">Input</th>
            <th className="border border-black px-4 py-2">Select</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field, index) => (
            <tr key={index}>
              <td className="border border-black px-4 py-2">{field.input}</td>
              <td className="border border-black px-4 py-2">{field.select}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Assign;
