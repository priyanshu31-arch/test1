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
            className="bg-gradient-to-b from-emerald-400 to-lime-500 px-5 py-0.5"
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
