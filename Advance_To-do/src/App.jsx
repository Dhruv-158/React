/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import Navbar from "./Compponants/Navbar";
import Footer from "./Compponants/Footer";
import Todos from "./Compponants/Todos";
import AddTodo from "./Compponants/AddTodo";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Compponants/About";

function App() {
  let initTodo;

  if (localStorage.getItem("todos") === "null") {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("i am onDelete of todo", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    let Sno = todos.length + 1;
    const MyTodo = {
      Sno: Sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, MyTodo]);
    console.log(MyTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Navbar title="TODO" Searchbar={false} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
