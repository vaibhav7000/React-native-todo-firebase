import { createContext, useContext, useReducer } from "react";
import { todoInitialState, TodoReducer } from "../Reducers/TodoReducer";

const TodoContext = createContext();

const TodoProvider = ({children}) => {
    const [todos, dispatch] = useReducer(TodoReducer, todoInitialState);

    return (
        <TodoContext value={{
            todos, dispatch
        }}> 
            {children}
        </TodoContext>
    )
}

// When creating custom hooks (internally they will be using the react hooks)
const useTodo = () => useContext(TodoContext);

export {
    TodoContext,
    TodoProvider,
    useTodo
}