
export default function handler(req, res) {
    if (req.method === "GET") {
      res.status(200).json({ message: "Привет от бекенда!" });
    } else {
      res.status(405).json({ error: "Метод не разрешен" });
    }
  }
  