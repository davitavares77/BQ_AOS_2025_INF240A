export interface ITasks {
  id: string;
  title: string;
  completed: boolean;
}

export const tasks: ITasks[] = [
  {
    id: "1",
    title: "Tarefa 1",
    completed: false,
  },
  {
    id: "2",
    title: "Tarefa 2",
    completed: true,
  },
];
