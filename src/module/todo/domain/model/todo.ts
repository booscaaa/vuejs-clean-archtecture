interface TodoOptions {
    descricao: string;
    id: number;
}

class Todo {
    private descricao: string
    private id: number
    constructor({ descricao, id }: TodoOptions) {
        this.id = id
        this.descricao = descricao
    }

    toJson(): Object {
        return {
            id: this.id,
            descricao: this.descricao
        }
    }
}

export default Todo