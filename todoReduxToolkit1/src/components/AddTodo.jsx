import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addTodo, updateTodo} from '../features/todo/todoSlice'

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const role = useSelector(state => state.role)

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    
    const todo = useSelector(state => state.editTodo)
    const id = useSelector(state => state.id)
    useEffect(() => {
      if(role === "edit"){
        setInput(todo)
      }
    }, [role])

    

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {role === "edit" ?
        <button onClick={(e) => { 
            e.preventDefault();
            dispatch(updateTodo({ text: input, id: id }))
            setInput("");
        }}>
            edit todo
        </button>  :

        <button type="submit"> {role} todo </button>
      }
    </form>
  )
}

export default AddTodo