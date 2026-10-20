import { prisma } from "../config/prisma";
import { CreateTaskDTO } from "../types/task";
import { UpdateTaskDTO } from "../types/task";

export function findAll() {
  return prisma.task.findMany({
    include: { category: true },
  });
}


export function findById(id: number) {
  return prisma.task.findUnique({
    where: { id },
    include: { category: true },
  });
}


export function create(data: CreateTaskDTO) {
  return prisma.task.create({ data });
}


export function update(
  id: number,
  data: UpdateTaskDTO
) {
  return prisma.task.update({
    where: { id },
    data,
  });
}

export function remove(id: number) {
  return prisma.task.delete({
    where: { id },
  });
}
