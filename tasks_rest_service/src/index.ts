import express from "express";
import cors from "cors";

import { readJsonFile, writeJsonFile } from "./helper";

interface ITask {
  id: string;
  title: string;
  completed: boolean;
}

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

app.get("/tarefas/:id", (req, res) => {
  const id = req.params.id;
  const tasks = readJsonFile<ITask[]>("dados/tasks.json");
  const task = tasks.find((task: ITask) => task.id === id);

  res.send(task);
});

app.get("/tarefas", (req, res) => {
  const tasks = readJsonFile<ITask[]>("dados/tasks.json");
  res.send(tasks);
});

app.post("/tarefas", (req, res) => {
  const task = req.body;
  console.log(task);
  const tasks = readJsonFile<ITask[]>("dados/tasks.json");
  tasks.push(task);
  writeJsonFile("dados/tasks.json", tasks);
  res.send(task);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
