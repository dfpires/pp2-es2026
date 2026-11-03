import { useState } from "react";
import type { updateTask, Task } from "./tipos";

interface Props {
  tarefa: Task;
  onAtualizar: (dados: updateTask) => Promise<boolean>;
  onRemover: () => void;
}

function ItemTarefa({ tarefa, onAtualizar, onRemover }: Props) {
  const [editando, setEditando] = useState(false);
  const [title, setTitle] = useState(tarefa.title);

  async function salvar() {
    const ok = await onAtualizar({ title });
    if (ok) setEditando(false);
  }

  function cancelar() {
    setTitle(tarefa.title);
    setEditando(false);
  }
  return (
    <li className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={tarefa.completed}
        onChange={() => onAtualizar({ completed: !tarefa.completed })}
      />

      {editando ? (
        <>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 border rounded px-2 py-1"
          />
          <button onClick={salvar}>Salvar</button>
          <button onClick={cancelar}>Cancelar</button>
        </>
              ) : (
        <>
          <span
            className={`flex-1 ${
              tarefa.completed ? "line-through text-slate-400" : ""
            }`}
          >
            {tarefa.title}
          </span>
          {tarefa.category && (
            <span className="text-sm text-slate-500">
              {tarefa.category.name}
            </span>
          )}
          <button onClick={() => setEditando(true)}>Editar</button>
          <button onClick={onRemover} className="text-red-600">
            Remover
          </button>
        </>
      )}
    </li>
  );
}

export default ItemTarefa;

