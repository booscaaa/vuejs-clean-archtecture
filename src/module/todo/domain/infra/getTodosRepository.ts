import Todo from '../model/todo';
abstract class GetTodosRepository {
    abstract call(): Promise<Array<Todo>>;
}

export default GetTodosRepository