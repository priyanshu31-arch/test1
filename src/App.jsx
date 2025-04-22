import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItems from "./component/TodoItems";
import Welco from "./component/Welco"
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
  <div className="bg-gradient-to-b from-yellow-400 to-orange-600 h-screen flex justify-center items-center">
  <div className="border-2 border-blue-800 bg-gradient-to-b from-blue-500 to-purple-500 text-center p-6 rounded-lg">
    <AppName />
  

      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <Welco></Welco>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems></div>
    </div>
  );
}

export default App;