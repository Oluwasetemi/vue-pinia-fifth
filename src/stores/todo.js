import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    todoList: [
      { text: 'Learn Vue 3', completed: false, id: 0 },
    ],
    id: 2
  }),
  actions: {
    addTodo(item) {
      this.todoList.push({ text: item, id: this.id++, completed: false })
    },
    deleteTodo(itemId) {
      this.todoList = this.todoList.filter((object) => {
        return object.id !== itemId
      })
    },
    toggleCompleted(idToFind) {
      const todo = this.todoList.find((obj) => obj.id === idToFind)
      console.log(todo)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  },
  getters: {
    listOfCompletedTodos() {
      return this.todoList.filter((todo) => todo.completed)
    }
  }

})