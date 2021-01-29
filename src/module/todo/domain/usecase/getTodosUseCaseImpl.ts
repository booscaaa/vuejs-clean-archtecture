import GetTodosRepository from "../infra/getTodosRepository";
import Todo from "../model/todo";
import GetTodosUseCase from "./getTodoUseCase";


class GetTodosUseCaseImpl implements GetTodosUseCase {
    private repository: GetTodosRepository;
    constructor(repository: GetTodosRepository) {
        this.repository = repository
    }

    async call(): Promise<Array<Todo>> {
        try {
            return await this.repository.call()
        } catch (error) {
            throw error;
        }
    }
}

export default GetTodosUseCaseImpl