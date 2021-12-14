<template>
  <div class="home-page">
    <CreateTodo @todo-created="onTodoCreated" />
    <div class="separator">
    <hr />
    </div>
    <ul class="todo-list">
      <TodoItem
        v-for="todoItem in todoList"
        :key="todoItem.id"
        :todo="todoItem"
        @todo-updated="onTodoUpdated"
        @todo-deleted="onTodoDeleted"
      />
    </ul>
  </div>
</template>

<script>
import CreateTodo from "@/components/CreateTodo";
import TodoItem from "@/components/TodoItem";
import { fetchTodoList } from "@/netClient/todoService";
export default {
  name: "HomaPage",
  components: {
    CreateTodo,
    TodoItem,
  },
  data: () => ({
    todoList: [],
  }),
  created() {
    this.fetchTodoList();
  },
  methods: {
    onTodoCreated() {
      this.fetchTodoList();
    },
    onTodoUpdated(updateTodo) {
      const todo = this.todoList.find((el) => el.id === updateTodo.id);
      todo.isCompleted = updateTodo.isCompleted;
    },
    onTodoDeleted(id) {
      this.todoList = this.todoList.filter((el) => el.id !== id);
    },
    async fetchTodoList() {
      try {
        this.todoList = await fetchTodoList();
      } catch (error) {
        console.error({ error });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
hr {
  margin: 32px 0px;
  width: 100%;
  height: 3px;
  border: none;
  background: rgb(255, 255, 255);
  border-top: 3px solid rgb(122, 69, 117);
  border-bottom: 3px solid rgb(235, 175, 222);
  border-radius: 50px;
}
template {
  box-sizing: border-box;
} 
</style>
