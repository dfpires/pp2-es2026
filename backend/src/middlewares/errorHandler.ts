import { AppError } from "./AppError";

export function errorHandler(err, req, res, next) {
  if (err instanceof AppError) {
    return res.status(err.statusCode)
      .json({ message: err.message });
  }
  console.error(err);
  return res.status(500)
    .json({ message: "Erro interno" });
}
