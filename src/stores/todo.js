import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
    state: (() => ({
        listTodo: [{ bookname: 'Life sucks', author: 'Charin', status: 'open' },
            { bookname: 'This is life', author: 'Charin', status: 'close' }
        ]
    })),
    actions: {
        getTodos() {
            return this.listTodo
        },
        getTodo(index) {

            return this.listTodo[index]
        },
        addTodo(todoData) {
            this.listTodo.push(todoData)
        },
        editTodo(index, editTodo) {
            this.listTodo.splice(index, 1, editTodo)
        },
        delete(index) {
            this.listTodo.splice(index, 1)
        }
    }
})