import {useEffect, useState} from 'react'
import type {Todo} from './tipos'

const API_URL = "https://jsonplaceholder.typicode.com/todos?userId=1";

function ListaApi() {
    const [todos, setTodos] = useState<Todo[]>([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState <string | null>(null)

    useEffect( () => {
        async function carregar(){
            try {
                const resposta = await fetch(API_URL)
                if (!resposta.ok){
                    throw new Error(`Erro HTTP ${resposta.status}`)
                }
                const dados: Todo[] = await resposta.json()
                setTodos(dados)
            }
            catch (e) {
                setErro(e instanceof Error ? e.message : "Erro desconhecido")
            }
            finally {
               setCarregando(false) 
            }
        }
        carregar()
    }, [])

    if (carregando) return <p> Carregando ... </p>
    if (erro) return <p> Erro: {erro} </p>
    if (todos.length === 0) return <p> Nenhuma tarefa</p>

    return (
        <ul className='space-y-1'>
            {todos.map( (t) => (
                <li key={t.id}> {t.completed ? "[X]" : "[]"} {t.title} </li>
            ))}
        </ul>
    )
}

export default ListaApi