import Todo from "../model/todo";

abstract class GetTodosUseCase {
    abstract call(): Promise<Array<Todo>>
}

export default GetTodosUseCase