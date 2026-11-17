import { useEffect, useState } from "react";
import type { Task } from "./tipos";
import { buscarTarefa, removeTarefa } from "./api";
import { Link, useNavigate, useParams } from "react-router";

function DetalheTarefa(){
    const {id} = useParams()
    const navigate = useNavigate()

    const [tarefa, setTarefa] = useState<Task | null>(null)
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState<string | null>(null)

    useEffect( () => {
        setCarregando(true)
        setErro(null)
        buscarTarefa(Number(id))
            .then(setTarefa)
            .catch( (e: Error) => setErro(e.message))
            .finally( () => setCarregando(false))
    }, [id])

    async function remover(){
        if (!tarefa) return 
        try {
            await removeTarefa(tarefa.id)
            navigate("/tarefas")
        }
        catch (e){
            setErro( (e as Error).message)
        }
    }

    if (carregando) return <p> Carregando ... </p>

    if (erro || !tarefa){
        return (
            <div className="space-y-2">
                <p className="text-red-600">Erro: {erro}</p>
                <Link to="/tarefas" className="text-teal-700 underline">
                    Voltar
                </Link>
            </div>
        )
    }

    return (
        <div className="space-y-2 max-w-xl"> 
            <h1 className="text-xl font-bold"> {tarefa.title} </h1>
            <p> Situação: {tarefa.completed ? "concluída" : "pendente"} </p>
            <p> Categoria: {tarefa.category?.name ?? "sem categoria"} </p>
            <div className="flex gap-3">
                <Link to="/tarefas" className="text-teal-700 underline">
                    Voltar
                </Link>
                <button onClick={remover} className="text-red-600">
                    Remover
                </button>
            </div>
        </div>
    )
}

export default DetalheTarefa