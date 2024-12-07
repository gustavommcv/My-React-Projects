export default class Project {
    constructor(title, description, date) {
        this.id = crypto.randomUUID(),
        this.title = title,
        this.description = description,
        this.date = date,
        this.tasks = []
    }
}
