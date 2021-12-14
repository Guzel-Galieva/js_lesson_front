<template>
  <section>
    <li class="todo-item" :class="{ done: todo.isCompleted }">
      <div class="title">{{ todo.title }}</div>
      <div class="actions">
        <input
          type="checkbox"
          class="checkbox"
          :checked="todo.isCompleted"
          @input="onCheckBoxInput(todo.id, todo.isCompleted)"
        />
        <button @click="onDeleteTodoCklicked(todo.id)">x</button>
      </div>
    </li>
  </section>
</template>

<script>
import { patchTodo, deleteTodo } from "@/netClient/todoService";

export default {
  name: "TodoItem",
  data: () => ({}),
  props: ["todo"],
  methods: {
    async onDeleteTodoCklicked(id) {
      try {
        await deleteTodo({ id });
        this.$emit("todo-deleted", id);
      } catch (error) {
        console.error({ error });
      }
    },
    async onCheckBoxInput(id, isCompleted) {
      try {
        const updateTodo = await patchTodo({ id, isCompleted: !isCompleted });
        if (updateTodo) {
          this.$emit("todo-updated", updateTodo);
        }
      } catch (error) {
        console.error({ error });
      }
    },
  },
};
</script>
<style scoped>
li {
  font-size: 20px;
  list-style-type: none;
  padding: 16px;
  width: 80%;
  max-width: 800px;
  height: 10%;
  max-height: 50px;
  margin: 10px 0px;
  border-radius: 35px;
  background: rgba(51, 15, 48, 0.932);
  color: rgb(235, 175, 222);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.title {
  width: 80%;
  max-width: 800px;
  height: 10%;
  max-height: 50px;
  display: flex;
}
.actions {
  display: flex;
  flex-flow: row nowrap;
}
.checkbox {
  width: 20px;
  height: 20px;
  font: 10px/10px "Sans Serif";
  border: none;
  vertical-align: middle;
  margin: 0 8px;
}
button:hover {
  background-image: linear-gradient(
    to bottom,
    rgb(146, 78, 139),
    rgb(226, 153, 215)
  );
  color: white;
  transform: scale(1.2);
  text-shadow: azure 0px 0px 5px;
}
button {
  color: rgb(105, 33, 98);
  width: 20px;
  height: 20px;
  background: rgb(235, 175, 222);
  border-radius: 4px;
  border: none;
}
</style>