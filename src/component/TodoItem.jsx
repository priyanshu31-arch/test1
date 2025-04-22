function TodoItem({ todoName, todoDate, onDeleteClick }) {
    return (
      <div  className="">
        <div className=" flex justify-center     ">
          <div className="font-mono border-2 border-blue-800 bg-gradient-to-b from-indigo-400 to-lime-400 bg- px-5 py-1 " >{todoName}</div>
          <div className="font-bold " >{todoDate}</div>
          <div >
            <button
              type="button"
              className="border-2  bg-gradient-to-b from-red-500 to-amber-500 px-1 text-lime-300  py-0.5 "
              onClick={() => onDeleteClick(todoName)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default TodoItem;