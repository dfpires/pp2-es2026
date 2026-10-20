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