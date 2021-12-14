<template>
  <div class="card base-card">
    <img alt="my photo" src="@/assets/111.jpg" />
    <p><b>Я Гузель</b></p>
    <p>из группы БСБО-05-19.</p>
    <p><b>Что я умею?</b></p>
    <p>
      Кататься на коньках, а ещё ... остальное узнаете познакомившись ближе.
    </p>
  </div>
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
form {
  margin-top: 10%;
}

.card {
  border: 8px ridge rgb(235, 175, 222);
  background: rgba(51, 15, 48, 0.932);
  color: rgb(235, 175, 222);
}
img {
  box-shadow: rgb(255, 9, 214) 0px 0px 30px;
  width: 150px;
  height: 150px;
}
</style>
