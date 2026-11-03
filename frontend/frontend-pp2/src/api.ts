import type {
    Category,
    NewTask,
    Task,
    updateTask
} from './tipos'

const BASE = "http://localhost:3000"
const JSON_HEADERS = {"Content-Type": "application/json"}

async function requisicao<T>(
    path: string, 
    opcoes?: RequestInit

): Promise<T> {
    const resposta = await fetch(`${BASE}${path}`, opcoes)
    if (!resposta.ok){
        const corpo = await resposta.json().catch( () => null)
        throw new Error(corpo?.message ?? `Erro HTTP ${resposta.status}`)
    }
    if (resposta.status == 204) return undefined as T // sem corpo
    return resposta.json()
}

// lista as tarefas
export function listaTarefas() {
    return requisicao<Task[]>("/tasks")
}
// cria uma tarefa
export function criaTarefa(dados: NewTask) {
    return requisicao<Task>("/tasks", {
        method: "POST",
        headers: JSON_HEADERS,
        body: JSON.stringify(dados)
    })
}
// atualiza tarefa
export function atualizaTarefa(id: number, dados: updateTask){
    return requisicao<Task>(`/tasks/${id}`, {
        method: "PUT",
        headers: JSON_HEADERS,
        body: JSON.stringify(dados)
    })
}
// remove tarefa
export function removeTarefa(id: number){
    return requisicao<void> (`/tasks/${id}`, {method: "DELETE"})
}
// lista as categorias
export function listaCategorias() {
    return requisicao<Category[]>("/categories")
}
// cria uma categoria
export function criaCategoria(name: string) {
    return requisicao<Category>("/categories", {
        method: "POST",
        headers: JSON_HEADERS,
        body: JSON.stringify({name})
    })
}
// atualiza tarefa
export function atualizaCategoria(id: number, name: string){
    return requisicao<Category>(`/categories/${id}`, {
        method: "PUT",
        headers: JSON_HEADERS,
        body: JSON.stringify({name})
    })
}
// remove categoria
export function removeCategoria(id: number){
    return requisicao<void> (`/categories/${id}`, {method: "DELETE"})
}