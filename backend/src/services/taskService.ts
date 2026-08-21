import * as taskRepository from
  "../repositories/taskRepository";
import { AppError } from "../middlewares/AppError";
import { CreateTaskDTO } from "../types/task";
import { UpdateTaskDTO } from "../types/task";

export function findAll() {
  return taskRepository.findAll();
}

export function create(data: CreateTaskDTO) {
  if (!data.title) {
    throw new AppError("Título é obrigatório", 400);
  }
  return taskRepository.create(data);
}

export async function findById(id: number) {
  const task = await
    taskRepository.findById(id);

  if (!task) {
    throw new AppError("Task não encontrada", 404);
  }

  return task;
}

export async function update(
  id: number,
  data: UpdateTaskDTO
) {
  await findById(id); // atualiza apenas se a task existir
  return taskRepository.update(id, data);
}

export async function remove(id: number) {
  await findById(id); // remove apenas se a task existir
  return taskRepository.remove(id);
}







