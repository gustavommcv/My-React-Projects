export default class Task {
    constructor(title) {
        this.id = crypto.randomUUID(); // Gerando um ID único para cada tarefa
        this.title = title;
    }
}
