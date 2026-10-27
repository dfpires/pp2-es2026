export interface Category {
    id: number;
    name: string;
}
export interface Task {
  id: number;
  title: string;
  description: string | null;
  completed: boolean;
  createdAt: string;
  categoryId: number | null;
  category?: Category | null;
}

export interface NewTask {
  title: string;
  description?: string;
  categoryId?: number;
}

export interface updateTask {
  title?: string;
  description?: string;
  completed?: boolean;
  categoryId?: number | null;
}


export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
export interface Post {
    id: number;
    title: string;
    body: string;
}
export interface Usuario {
    id: number;
    name: string;
    email: string;
    address: {
        city: string
    },
    company: {
        name: string;
    }
}