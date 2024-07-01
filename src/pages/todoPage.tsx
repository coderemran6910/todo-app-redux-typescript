import TodoContainer from "../components/component/TodoContainer";
import Container from "../components/ui/Container";

const TodoPage = () => {
    return (
        <div>
        <Container>
            <h1 className="text-5xl text-center p-5  font-bold">My Todo</h1>
            <TodoContainer />
        </Container>
       
        </div>
    );
};

export default TodoPage;