const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); // Разрешаем запросы с фронтенда

// API для фронтенда
app.get("/api/data", (req, res) => {
  res.json({ message: "Привет от бекенда!" });
});

// Вебхук для Telegram бота
app.post("/webhook", (req, res) => {
  console.log("Получен вебхук:", req.body);
  res.sendStatus(200);
});

module.exports = app;
