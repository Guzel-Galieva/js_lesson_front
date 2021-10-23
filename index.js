const express = require("express");
const http = require("http");
const cors = require("cors");
const { LocalStorage } = require("node-localstorage");

const Sequelize = require("sequelize");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  console.log("URL = ", req.url);
  console.log("Original URL = ", req.orogiaUrl);
  console.log("METHOD = ", req.method);
  console.log("HOST = ", req.headers.host);
  console.log("InSecure = ", req.secure);
  console.log("BODY", req.body);
  console.log("QUERY", req.query);

  next();
});

const sequelize = new Sequelize("JS_lessons", "postgres", "4567", {
  dialect: "postgres",
  host: "localhost",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

sequelize
  .sync()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err));

const ToDo = sequelize.define("ToDo", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
  },
});

console.log(ToDo === sequelize.models.ToDo);

if (typeof localStorage === "undefined" || localStorage === null) {
  var localStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./scratch");
}

app.post("/todo", (req, res) => {
  ToDo.create({
    title: req.body.title,
    description: req.body.description,
  })
    .then((todo) => {
      res.status(200).json({ message: "добавлено задание " + todo.title });
    })
    .catch(function (err) {
      console.log("create failed with error: " + err);
      return 0;
    });
});

app.get("/todo/:id", (req, res) => {
  ToDo.findByPk(req.params.id)
    .then((todo) => {
      res.status(200).json({
        message: "Название: " + todo.title + ". Описание: " + todo.description,
      });
      return todo;
    })
    .catch(function (err) {
      console.log("findById failed with error: " + err);
      return null;
    });
});

app.get("/todo", (req, res) => {
  ToDo.findAll()
    .then((todo) => {
      res.status(200).json({ message: "Информация о всех записях получена" });
      return todo;
    })
    .catch(function (err) {
      console.log("findAll failed with error: " + err);
      return null;
    });
});

app.patch("/todo/:id", (req, res) => {
  const id = req.params.id;
  ToDo.update(req.body, { where: { id: req.params.id } })
    .then(() => {
      res.status(200).json({ message: "Информация изменена" });
      return id;
    })
    .catch(function (err) {
      console.log("update failed with error: " + err);
      return 0;
    });
});

app.delete("/todo/:id", (req, res) => {
  ToDo.destroy({
    where: { id: req.params.id },
  })
    .then(() => {
      res
        .status(200)
        .json({ message: "удалена запись с id: " + req.params.id });
    })
    .catch(function (err) {
      console.log("delete failed with error: " + err);
      return 0;
    });
});

http.createServer(app).listen(3000, () => {
  console.log("Server is working on port 3000");
});
