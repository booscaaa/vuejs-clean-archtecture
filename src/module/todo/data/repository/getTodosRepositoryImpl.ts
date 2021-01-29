import { AxiosInstance, AxiosResponse } from 'axios';
import GetTodosRepository from '../../domain/infra/getTodosRepository';
import Todo from '../../domain/model/todo';
class GetTodosRepositoryImpl implements GetTodosRepository {
    private axios: AxiosInstance;
    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }
    async call(): Promise<Array<Todo>> {
        try {
            const response: AxiosResponse = await this.axios.get("/item");
            const todos: Array<Todo> = response.data.map((todo: any) => new Todo(todo))
            return todos;
        } catch (error) {
            throw error;
        }
    }
}

export default GetTodosRepositoryImpl