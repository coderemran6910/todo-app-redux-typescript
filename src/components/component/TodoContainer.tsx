
import { useAppSelector } from "../../redux/hooks";
import { AddTodoModal } from "./AddTodoModal";
import EmptyTodo from "./EmptyTodo";
import FilteTodoModal from "./FilteTodoModal";
import TodoCard from "./TodoCard";
// import TodoCard from "./TodoCard";

const TodoContainer = () => {
    const {todos} = useAppSelector((state)=> state.todos)

    return (
        <div>
            <div className=" flex justify-between items-center">
            <AddTodoModal />
            <FilteTodoModal />
            </div>
            <div className=" bg-primary-gradient p-5 h-full rounded-xl space-y-3 ">
               {/* <EmptyTodo /> */}
            {
                todos ? todos.map(item=> <TodoCard {...item} />) : <EmptyTodo />
            }
            </div>
        </div>
    );
};

export default TodoContainer;