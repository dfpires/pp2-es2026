import { AppError } from "./AppError";

// converte o :id da URL em número e recusa valores inválidos (ex.: /tasks/abc)
export function parseId(value: string | string[]) {
  const id = Number(value);

  if (!Number.isInteger(id) || id <= 0) {
    throw new AppError("Id inválido", 400);
  }

  return id;
}
