export default function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*"); // Разрешаем доступ с любого источника
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // Разрешаем методы
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Разрешаем определенные заголовки
  
    if (req.method === "OPTIONS") {
      res.status(200).end(); // Отвечаем на OPTIONS запросы
      return;
    }
  
    if (req.method === "GET") {
      res.status(200).json({ message: "Привет от бекенда!" });
    } else {
      res.status(405).json({ error: "Метод не разрешен" });
    }
  }
  