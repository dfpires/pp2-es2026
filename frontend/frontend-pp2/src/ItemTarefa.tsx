import {useState} from "react"
import type { updateTask, Task } from "./tipos"
import { Link } from "react-router";

interface Props {
  tarefa: Task;
  onAtualizar: (dados: updateTask) => Promise<Boolean>;
  onRemover: () => void
}

function ItemTarefa({tarefa, onAtualizar, onRemover}: Props){
  // cria variáveis de estado e as inicializa
  const [editando, setEditando] = useState(false)
  const [title, setTitle] = useState(tarefa.title)

  // função para salvar
  async function salvar(){
    const ok = await onAtualizar({title}) // atualiza o título da tarefa
    if (ok) setEditando(false)
  }
  // função para cancelar
  function cancelar(){
    setTitle(tarefa.title)
    setEditando(false)
  }

  return (
    <li className="flex items-center gap-2">
      <input 
        type="checkbox" 
        checked={tarefa.completed} 
        onChange={ () => onAtualizar({completed: !tarefa.completed})}
        />

      {editando ? (
        <>
      <input 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        className="flex-1 border rounded px-2 py-1"/>
      <button onClick={salvar}>Salvar</button>
      <button onClick={cancelar}>Cancelar</button>
      </> ) : (
        <>
          <Link to={`/tarefas/${tarefa.id}`} className={`flex-1 ${tarefa.completed ? "line-through text-slate-400": ""}`}>
            {tarefa.title}
          </Link>
          {tarefa.category && (
            <span className="text-sm text-slate-500">
              {tarefa.category.name}
            </span>
          )}
          <button onClick={() => setEditando(true)}> Editar </button>
          <button onClick={onRemover} className="text-red-600"> Remover </button>
        </>
      )}

    </li>
  )
}

export default ItemTarefa