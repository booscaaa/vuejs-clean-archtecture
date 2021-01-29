import GetTodosUseCase from "../domain/usecase/getTodoUseCase"

class TodoController {
    private context: any 
    private getTodosUseCase: GetTodosUseCase
    constructor(context: any, getTodosUseCase: GetTodosUseCase) {
        this.context = context
        this.getTodosUseCase = getTodosUseCase
    }

    clicouBtn(): void {
        this.getTodosUseCase.call()
    }
}

export default TodoController