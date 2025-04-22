import { useState } from "react";
import {  toast } from 'react-toastify';

function AddTodo({ onNewItem }) {
  

  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
    toast.success("Nice! Keep it up...")
    
  };

  return (
    
    <div className=" flex justify-center items-center mt-10  ">
      <div className="flex  ">
        <div className="px-2">
          <input
            type="text"
            className="border-2 border-black px-3 font-monos bg-blue-200"
            placeholder="Enter Your Task Here..."
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div >
          <input type="date" className="border-2 border-black px-3  bg-blue-200" value={dueDate} onChange={handleDateChange} />
        </div>
        <div  className="px-5">
        <button
  type="button"
  className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold  py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 hover:bg-green-500 focus:ring-4 focus:ring-green-300"
  onClick={handleAddButtonClicked}
>
  
          
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
