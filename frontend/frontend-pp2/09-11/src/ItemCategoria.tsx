import { useState } from "react";
import type { Category } from "./tipos";

interface Props {
  categoria: Category;
  onRenomear: (name: string) => Promise<boolean>;
  onRemover: () => void;
}

function ItemCategoria({ categoria, onRenomear, onRemover }: Props) {
      const [editando, setEditando] = useState(false);
      const [name, setName] = useState(categoria.name);

    async function salvar() {
        const ok = await onRenomear(name);
        if (ok) setEditando(false);
    }

    function cancelar() {
        setName(categoria.name);
        setEditando(false);
    }

    return (
        <li className="flex items-center gap-2">
              {editando ? (
                <>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 border rounded px-2 py-1"
          />
          <button onClick={salvar}>Salvar</button>
          <button onClick={cancelar}>Cancelar</button>
        </>
      ) : (
        <>
          <span className="flex-1">{categoria.name}</span>
          <button onClick={() => setEditando(true)}>Editar</button>
          <button onClick={onRemover} className="text-red-600">
            Remover
          </button>
        </>
      )}


        </li>

    )

}

export default ItemCategoria

