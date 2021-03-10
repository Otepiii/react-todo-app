import React, {useState, useEffect} from 'react';
import './App.css';
// importing components
import Form from "../src/components/form";
import TodoList from "../src/components/todolist"

function App() {
  // states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([]);

  // run once when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);
  //use effect
  useEffect(()=> {
    filterHandler();      
    saveLocalTodos();
  }, [todos, status])
  

  // functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  // save to local storage 
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
    }

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    } else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Joseph's To do List </h1>
      </header>
      <Form inputText={inputText} 
            todos={todos} 
            setTodos={setTodos} 
            setInputText={setInputText} 
            setStatus={setStatus} 
      />
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
