import { Injectable } from "@angular/core";

export interface ToDo {
    id: number
    title: string
    completed: boolean
    date?: any
}

@Injectable({providedIn: 'root'})

export class TodosService {
    public todos: ToDo[] = []
    onToggle(id: number) {
        const idx = this.todos.findIndex(t => t.id === id)
        this.todos[idx].completed = !this.todos[idx].completed
    }

    removeTodo (id: number) {
        this.todos = this.todos.filter(t => t.id != id)
    }

    addTodo (todo: ToDo) {
        this.todos.push(todo)
    }
}