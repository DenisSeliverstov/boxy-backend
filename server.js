const express = require("express");
const cors = require("cors");

const app = express();

// Настройка CORS
app.use(cors({
  origin: "*",  // Разрешаем все источники
  methods: "GET, POST, OPTIONS",
  allowedHeaders: "Content-Type, Authorization"
}));

app.use(express.json());

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
