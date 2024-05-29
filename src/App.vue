<script setup>
import { useCounterStore } from '@/stores/counter'
import { useTodoListStore } from '@/stores/todo'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const counterStore = useCounterStore()
const todoStore = useTodoListStore()

const { increment } = useCounterStore()

const storeRef = storeToRefs(todoStore)

const newTodo = ref('')

const { todoList } = storeRef
// console.log(todoList.value, id.value)

const { deleteTodo, toggleCompleted } = todoStore

function addNewTodo() {
  todoStore.addTodo(newTodo.value)
  newTodo.value = ''
}
</script>

<template>
  <!-- Counter -->
  <h2>Counter</h2>
  <h1>
    {{ counterStore.count }}
  </h1>
  <h1>
    {{ counterStore.doubleCount }}
  </h1>

  <button @click="increment">Increment</button>

  <section id="todo-app">
    <!-- Todo -->
    <h2>Todo</h2>
    <input type="text" v-model="newTodo" />
    <button @click="addNewTodo">Add</button>
    <ul>
      <li v-for="todo in todoList" :key="todo.id">
        <span
          @click="toggleCompleted(todo.id)"
          :style="{ textDecorationLine: todo.completed ? 'line-through' : 'none' }"
        >
          {{ todo.text }}
        </span>
        <button @click="deleteTodo(todo.id)">Remove</button>
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
