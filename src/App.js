import "./styles.css";
import AddTodo from "./components/add-todo";
import TodoList from "./components/todo-list";
import { useEffect, useState } from "react";

export default function App() {
  const [listitems, setListitems] = useState([]);

  const LOCAL_STORAGE_KEY = "listitems";

  const addListhandler = (listitem) => {
    setListitems([...listitems, listitem]);
  };

  useEffect(() => {
    const retriveItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setListitems(retriveItems);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(listitems));
  }, [listitems]);

  const removeListHandler = (id) => {
    const newList = listitems.filter((item) => {
      return item.id !== id;
    });
    setListitems(newList);
  };

  return (
    <div className="App">
      <AddTodo addListhandler={addListhandler} />
      <TodoList renderList={listitems} getListId={removeListHandler} />
    </div>
  );
}
