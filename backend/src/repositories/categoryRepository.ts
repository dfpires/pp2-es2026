import { prisma } from "../config/prisma";
import { CreateCategoryDTO } from
  "../types/category";
import { UpdateCategoryDTO } from
  "../types/category";

export function findAll() {
  return prisma.category.findMany();
}

export function findById(id: number) {
  return prisma.category.findUnique({
    where: { id },
  });
}

export function create(
  data: CreateCategoryDTO
) {
  return prisma.category.create({ data });
}

export function update(
  id: number,
  data: UpdateCategoryDTO
) {
  return prisma.category.update({
    where: { id },
    data,
  });
}

export function remove(id: number) {
  return prisma.category.delete({
    where: { id },
  });
}
