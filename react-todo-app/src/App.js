import React, {useState} from 'react';
import './App.css';
// importing components
import Form from "../src/components/form";
import TodoList from "../src/components/todolist"

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Joseph's To do List </h1>
      </header>
      <Form setInputText={setInputText} />
      <TodoList/>
    </div>
  );
}

export default App;
