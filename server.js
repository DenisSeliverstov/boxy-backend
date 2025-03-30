const express = require("express");
const cors = require("cors");

const app = express();

// Глобальная настройка CORS (оставляем на всякий случай)
app.use(cors({
  origin: "*",
  methods: "GET, POST, OPTIONS",
  allowedHeaders: "Content-Type, Authorization"
}));

// Ручная установка CORS заголовков - добавляем этот middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  
  // Обрабатываем предварительный OPTIONS запрос
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  
  next();
});

app.use(express.json());

// API эндпоинт
app.get("/api/data", (req, res) => {
  res.json({ message: "Привет от бекенда!" });
});

// Определяем порт для локального запуска
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
  });
}

// Экспортируем сервер для Vercel
module.exports = app;