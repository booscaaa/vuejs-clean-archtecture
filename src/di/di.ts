
import TodoController from "@/module/todo/controller/todoController";
import GetTodosRepositoryImpl from "@/module/todo/data/repository/getTodosRepositoryImpl";
import GetTodosUseCaseImpl from "@/module/todo/domain/usecase/getTodosUseCaseImpl";
import axios, { AxiosInstance } from "axios";

const axiosIntance: AxiosInstance = axios.create({
    baseURL: "https://todo-list-hateoas.herokuapp.com/"
})

const getTodosRepositoryImpl: GetTodosRepositoryImpl = new GetTodosRepositoryImpl(axiosIntance);
const getTodoUseCaseImpl: GetTodosUseCaseImpl = new GetTodosUseCaseImpl(getTodosRepositoryImpl)
const todoController = (context: any) => new TodoController(context, getTodoUseCaseImpl)

export { todoController }
