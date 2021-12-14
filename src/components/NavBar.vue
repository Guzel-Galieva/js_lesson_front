<template>
  <div id="nav-bar">
    <div class="link-wrapper">
      <ul class="links">
        <div class="nav-links">
          <router-link tag="li" class="link" to="/info">Инфо</router-link>
          <router-link tag="li" class="link" to="/" exact>Список дел</router-link>
        </div>
        <a @click="onLogoutClicked" class="link logout"><li>Выйти</li></a>
      </ul>
    </div>
  </div>
</template>

<script>
import { doLogout } from "@/netClient/authService";

export default {
  name: "NavBar",
  methods: {
    async onLogoutClicked() {
      try {
        await doLogout();
        this.$router.push("/login");
      } catch (error) {
        console.error({ error });
      }
    },
  },
};
</script>

<style scoped>
#nav-bar {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 18px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 48px;
  background: rgb(235, 175, 222, 0.9);
  box-shadow: 0px 0px 16px rgb(0, 0, 0, 0.6);
}
.link-wrapper {
  display: flex;
  width: 100%;
}
.links {
  margin: 16px 12px 4px 64px;
  width: 100%;
  padding: 100px, 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  left: 10px;
  top: 6px;
  list-style: none;
}
.nav-links {
  display: flex;
  flex-flow: row nowrap;
}
.link {
  padding: 0px 56px 0px 0px;
  text-decoration: none;
  color: rgba(51, 15, 48);
  font-weight: 600;
}
li:hover {
  text-shadow: rgb(255, 9, 214) 0px 0px 10px;
  transform: scale(1.1);
  cursor: pointer;
}
.links li.router-link-exact-active {
  cursor: pointer;
  text-decoration: underline;
  text-decoration-color: rgb(51, 15, 48);
}
</style>
