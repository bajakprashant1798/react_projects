import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, changeRole, updateTodo } from '../features/todo/todoSlice'
import Todo from './Todo';


export default function TodoList() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    
    return( 
        <>
        <div>Todos</div>
        <ul className="list-none">
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </ul>
        </>
        )
}