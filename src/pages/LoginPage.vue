<template>
  <div class="form-area base-card">
    <form @submit.prevent="onFormSubmit">
      <div class="fields">
        <div class="login">
          <label for="login">Логин</label>
          <input v-model="login" id="login" type="text" required />
        </div>
      </div>
      <div class="fields">
        <div class="password">
          <label for="password">Пароль</label>
          <input v-model="password" id="password" type="text" required />
        </div>
      </div>
      <button class="submit-btn">Войти</button>
      <div class="action-link">
        <span>Нет аккаунта? </span>
        <a @click="redirect" class="link-btn">Регистрация</a>
      </div>
    </form>
  </div>
</template>

<script>
import { doLogin } from "@/netClient/authService";
export default {
  name: "LoginPage",
  data: () => ({
    login: "",
    password: "",
  }),
  methods: {
    async onFormSubmit() {
      try {
        const token = await doLogin(this.login.trim(), this.password.trim());
        console.warn({ token });
        if (token) {
          this.$router.push("/");
        }
      } catch (error) {
        console.error({ error });
      }
    },
    redirect() {
      this.$router.push("/registration");
    },
  },
};
</script>

<style scoped>
.login {
  margin-top: 20%;
}

.login input {
  width: 83.5%;
}

.password {
  margin-top: 10%;
}

.password input {
  width: 80.5%;
}

.form-area label {
  color: rgba(51, 15, 48);
  float: left;
}

.form-area{
  margin: auto;
  float: left;
  border: 8px ridge rgb(105, 33, 98);
  background: rgb(235, 175, 222);
}

.submit-btn {
  color: rgb(235, 175, 222);
  width: 20%;
  margin: 70px 0 8px 0;
  background: rgb(105, 33, 98);
  border-radius: 12px;
  border: none;
}

.fields input {
  display: flex;
  outline: none;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 16px;
  padding: 8px;
  margin: 8px;
}

.fields {
  line-height: 40px;
}

.fields label {
  padding-right: 10px;
}

input:hover {
  box-shadow: rgb(105, 33, 98, 0.5) 0px 0px 10px;
}

input:focus {
  border: none;
  background-color: rgb(105, 33, 98, 0.5);
}

.submit-btn:hover {
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
.submit-btn:focus {
  transform: scale(0.8);
}

.link-btn {
  text-decoration: underline;
}
</style>
