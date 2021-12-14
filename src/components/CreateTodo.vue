<template>
  <section class="create-todo">
    <input v-model="name" type="text" placeholder="Название дела" />
    <button @click="onCreateTodoClicked">Создать</button>
  </section>
</template>
<script>
import { createTodo } from "@/netClient/dataService";
export default {
  name: "CreateTodo",
  data: () => ({
    name: "",
  }),
  methods: {
    async onCreateTodoClicked() {
      try {
        const newTodo = await createTodo({ title: this.name });
        if (newTodo) {
          this.name = "";
        }
        this.$emit("todo-created");
      } catch (error) {
        console.error({ error });
      }
    },
  },
};
</script>
<style scoped>
.create-todo {
  padding: 16px;
  width: 80%;
  max-width: 850px;
  height: 10%;
  max-height: 50px;
  margin: auto;
  border-radius: 35px;
  background: rgb(235, 175, 222);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.create-todo input {
  width: 90%;
  max-width: 720px;
  display: flex;
  outline: none;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 16px;
  padding: 8px;
  font-size: 16px;
}
button {
  color: rgb(235, 175, 222);
  width: 13%;
  max-width: 100px;
  height: 35px;
  background: rgb(105, 33, 98);
  border-radius: 22px;
  border: none;
}
input:hover {
  box-shadow: rgb(105, 33, 98, 0.5) 0px 0px 10px;
}

input:focus {
  border: none;
  background-color: rgb(105, 33, 98, 0.7);
  color: rgb(235, 175, 222);
}

button:hover {
  background-image: linear-gradient(
    to bottom,
    rgb(182, 93, 170),
    rgb(105, 33, 98)
  );
  color: white;
  transform: scale(1.1);
  box-shadow: rgb(105, 33, 98, 0.5) 0px 0px 10px;
  text-shadow: azure 0px 0px 5px;
}

::-webkit-input-placeholder { 
   color: rgb(207, 133, 191);
}
</style>
