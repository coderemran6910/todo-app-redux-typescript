import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
type TTodo ={
    id: string,
    task : string;
    description: string;
    isCompleted? : boolean
}

type TInitialState = {
    todos: TTodo[]
}

const initialState : TInitialState = {
    todos: [],
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state:TInitialState, action: PayloadAction<TTodo>)=>{
            state.todos.push({...action.payload, isCompleted: false})
        },
        removeTodo: (state, action )=>{
            state.todos = state.todos.filter(item=> item.id !== action.payload)
        },
        toggoleComplete: (state, action)=>{
            const task = state.todos.find((item)=> item.id === action.payload)
            task!.isCompleted = !task?.isCompleted

        }
    }
    
})
 
export const  {addTodo, removeTodo, toggoleComplete} = todoSlice.actions
export  const todoReducer =  todoSlice.reducer