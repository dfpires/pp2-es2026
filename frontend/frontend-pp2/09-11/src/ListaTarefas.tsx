import { useEffect, useState } from "react";
import type { Task } from "./tipos";

const API_URL = "http://localhost:3000/tasks";

function ListaTarefas() {
    const [tarefas, setTarefas] = useState<Task[]>([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState<string | null> (null)

    useEffect(() => {
        async function carregar(){
            try {
                const resposta = await fetch(API_URL)
                if (!resposta.ok){
                    throw new Error(`Erro HTTP ${resposta.status}`)
                }
                const dados = await resposta.json()
                setTarefas(dados)
            }
            catch(e){
                setErro(e instanceof Error ? e.message : "Erro desconhecido")
            }
            finally {
                setCarregando(false)
            }
        }
        carregar()
    }, [])

    if (carregando) return <p> Carregando ... </p>
    if (erro) return <p className="text-red-600"> Erro: {erro} </p>
    if (tarefas.length === 0) return <p> Nenhuma tarefa</p>
    
    return (
      <ul>
        {
            tarefas.map( (t) => (
                <li key={t.id}>
                    {t.completed ? "[x]" : "[ ]"} {t.title}
                    {t.category && (
                        <span className="ml-2 text-sm text-slate-500">
                            ({t.category.name})
                        </span>
                    )}
                </li>
            ))
        }
      </ul>
    )
}
export default ListaTarefas