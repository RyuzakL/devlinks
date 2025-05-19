import express from "express";
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (_req, res) => {
  res.send("Hello World depuis mon dev container !");
});

app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
