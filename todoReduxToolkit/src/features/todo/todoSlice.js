import { createSlice, nanoid, original } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
            console.log("addtodo controller id : ", todo.id);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => (todo.id !== action.payload))
        },
        // changeRole: (state, action)=>{
        //     state.role = action.payload.role;
        //     state.editTodo = action.payload.editTodo;
        //     state.id = action.payload.id;
        // },
        updateTodo: (state, action)=>{
            // console.log('entered to updateTodo');
            
            // const {id, text} = action.payload;
            
            const { id, text } = action.payload;
            const todoToUpdate = state.todos.find((todo) => todo.id === id);
            if (todoToUpdate) {
                todoToUpdate.text = text;
            }

            
            // original
            // state.id = action.payload.id
            // state.editTodo = action.payload.editTodo;
            // state.text = action.payload.text
            // console.log(state.id, '//' , state.text);
            // state.todos.find((todo) => todo.id === state.id).text = state.text;



            // console.log(state.todos);
            // console.log('end of updateTodo');
            // state.role = "add"
            // state.todo = ""
        }
    }
})

export const {addTodo, removeTodo, updateTodo, changeRole} = todoSlice.actions
export default todoSlice.reducer