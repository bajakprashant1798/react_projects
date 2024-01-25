// import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import React from 'react';

function App() {
  // const todos = useSelector(state => state.todos)
  // const dispatchTodoState = useDispatch();
  // React.useEffect(() => {
  //   console.log("useEffect :: initial");
  //   const LStodos = localStorage.getItem("todos");
  //   if (LStodos)
  //     dispatchTodoState({
  //       type: "initializeTodos",
  //       payload: JSON.parse(LStodos)
  //     });
  // }, []);

  // React.useEffect(() => {
  //   console.log("useEffect :: todos has updated");
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);


  return (
    <>
      <h1 className='text-4xl font-bold'>Let's learn Redux Toolkit</h1>
      <AddTodo />
      <Todo />
    </>
  )
}

export default App
