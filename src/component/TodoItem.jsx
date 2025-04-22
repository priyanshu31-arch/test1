function TodoItem({ todoName, todoDate, onDeleteClick }) {
    return (
      <div  className="">
        <div className=" flex justify-center px-5    ">
        <div className="flex px-5">
  <div className="font-mono border-2 border-blue-800 bg-gradient-to-b from-rose-400 to-orange-400 gap-10 px-10 py-1 rounded-md shadow-md">
    {todoName}
  </div>
  <div className="font-bold text-gray-800 text-lg border-2 border-blue-800 bg-gradient-to-b from-yellow-400 to-orange-500 px-5 py-1 rounded-md shadow-md">
    {todoDate}
  </div>
</div>
          <div >
          <button
  type="button"
  className="border-2 border-blue-800 bg-gradient-to-b from-red-500 to-amber-500 px-4 py-2 text-lime-300 font-bold rounded-lg shadow-md hover:shadow-lg hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105 focus:ring-4 focus:ring-red-300"
  onClick={() => onDeleteClick(todoName)}
>
  🗑 Delete
</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default TodoItem;