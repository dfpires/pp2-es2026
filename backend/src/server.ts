import "dotenv/config";
import express from "express";
import cors from "cors";
import { errorHandler } from
  "./middlewares/errorHandler";

import taskRoutes from "./routes/taskRoutes";


const app = express(); // app representar servidor HTTP
app.use(cors()); // servidor vai usar CORS
app.use(express.json()); // servidor vai receber JSON no body das requisições

// cria primeira rota da API, que vai responder a requisições GET no caminho "/"
app.get("/", (req, res) => {
  res.json({ status: "API no ar" });
});

app.use("/tasks", taskRoutes);

app.use(errorHandler); // middleware de tratamento de erros
app.listen(3000); // servidor vai escutar requisições na porta 3000
