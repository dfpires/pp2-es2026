import { Request, Response } from "express";
import * as categoryService from
  "../services/categoryService";

export async function list(
  req: Request, res: Response
) {
  const categories = await
    categoryService.findAll();
  res.json(categories);
}
export async function getById(
  req: Request, res: Response
) {
  const id = Number(req.params.id);
  const category = await
    categoryService.findById(id);
  res.json(category);
}
export async function create(
  req: Request, res: Response
) {
  const category = await
    categoryService.create(req.body);
  res.status(201).json(category);
}

export async function update(
  req: Request, res: Response
) {
  const id = Number(req.params.id);
  const category = await
    categoryService.update(id, req.body);
  res.json(category);
}

export async function remove(
  req: Request, res: Response
) {
  const id = Number(req.params.id);
  await categoryService.remove(id);
  res.status(204).send();
}

