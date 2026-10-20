export interface CreateTaskDTO {
  title: string;
  description?: string;
  categoryId?: number;

}

export interface UpdateTaskDTO {
  title?: string;
  description?: string;
  completed?: boolean;
  categoryId?: number;

}
