import { AppError } from
  "../middlewares/AppError";
import * as categoryRepository from
  "../repositories/categoryRepository";
import { CreateCategoryDTO, UpdateCategoryDTO } from
  "../types/category";

export function findAll() {
  return categoryRepository.findAll();
}

export function create(
  data: CreateCategoryDTO
) {
  if (!data.name) {
    throw new AppError(
      "Nome é obrigatório", 400
    );
  }
  return categoryRepository.create(data);
}

export async function findById(id: number) {
  const category = await
    categoryRepository.findById(id);

  if (!category) {
    throw new AppError(
      "Categoria não encontrada", 404
    );
  }

  return category;
}

export async function update(
  id: number,
  data: UpdateCategoryDTO
) {
  await findById(id);
  return categoryRepository.update(id, data);
}

export async function remove(id: number) {
  await findById(id);
  return categoryRepository.remove(id);
}
