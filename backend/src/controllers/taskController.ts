import { Request, Response } from "express";
import * as taskService from
  "../services/taskService";

export async function list( req: Request, res: Response) {
  const tasks = await taskService.findAll();
  res.json(tasks);
}
export async function getById( req: Request, res: Response) {
  const id = Number(req.params.id);
  const task = await taskService.findById(id);
  res.json(task);
}

export async function create( req: Request, res: Response) {
  const task = await taskService.create(req.body);
  res.status(201).json(task);
}

export async function update(req: Request, res: Response) {
  const id = Number(req.params.id);
  const task = await taskService.update(id, req.body);
  res.json(task);
}

export async function remove(req: Request, res: Response) {
  const id = Number(req.params.id);
  await taskService.remove(id);
  res.status(204).send();
}



