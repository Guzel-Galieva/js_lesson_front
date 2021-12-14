<template>
  <div class="form-area base-card">
    <form>
      <div class="fields">
        <div class="name">
          <label for="name">Ваше имя </label>
          <input type="text" id="name" required />
        </div>
      </div>
      <br />
      <div class="fields">
        <div class="mail">
          <label for="mail">Ваша эл. почта </label>
          <input type="text" id="mail" required />
        </div>
      </div>
      <br />
      <div class="fields">
        <div class="info">
          <label for="info">Расскажите о себе </label>
          <input class="info" type="textarea" id="info" required />
        </div>
      </div>
      <br />
      <div class="submit-btn">
        <button type="submit"><span>Отправить</span></button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormCard",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.name {
  margin-top: 10%;
}

.name input{
  width: 76%;
} 

.mail input{
  width: 67.5%;
}

.info input{
  width: 62%;
}
.form-area label {
  color: rgba(51, 15, 48);
  float: left;
}

.form-area {
  float: left;
  border: 8px ridge rgb(105, 33, 98);
  background: rgb(235, 175, 222);
}

.submit-btn button {
  color: rgb(235, 175, 222);
  width: 20%;
  margin: 2px auto;
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
  /* width: 58%; */
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

.submit-btn button:hover {
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
.submit-btn button:focus {
  transform: scale(0.8);
}
</style>
