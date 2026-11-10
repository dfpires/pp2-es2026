import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import type { Category } from "./tipos";

import {
  atualizaCategoria,
  criaCategoria,
  listaCategorias,
  removeCategoria,
} from "./api";

import ItemCategoria from "./ItemCategoria";

function Categorias() {
  const [categorias, setCategorias] = useState<Category[]>([]);
  const [name, setName] = useState("");
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    listaCategorias()
      .then(setCategorias)
      .catch((e: Error) => setErro(e.message))
      .finally(() => setCarregando(false));
  }, []);

    async function executar(acao: () => Promise<void>) {
    setErro(null);
    try {
      await acao();
      return true;
    } catch (e) {
      setErro((e as Error).message);
      return false;
    }
  }

    async function criar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const ok = await executar(async () => {
      const nova = await criaCategoria(name);
      setCategorias((atual) => [...atual, nova]);
    });
    if (ok) setName("");
  }

    function renomear(id: number, novoNome: string) {
    return executar(async () => {
      const nova = await atualizaCategoria(id, novoNome);
      setCategorias((atual) =>
        atual.map((c) => (c.id === id ? nova : c))
      );
    });
  }

    function remover(id: number) {
    return executar(async () => {
      await removeCategoria(id);
      setCategorias((atual) => atual.filter((c) => c.id !== id));
    });
  }

  if (carregando) return <p>Carregando...</p>;

  return (
    <div className="space-y-4 max-w-xl">
        <form onSubmit={criar} className="flex gap-2">
            <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nova categoria"
          className="flex-1 border rounded px-2 py-1"
        />
        <button
          type="submit"
          className="px-3 py-1 rounded bg-teal-600 text-white"
        >
          Adicionar
        </button>
      </form>
      {erro && <p className="text-red-600">Erro: {erro}</p>}

    <ul className="space-y-2">
        {categorias.map((c) => (
         <ItemCategoria
            key={c.id}
            categoria={c}
            onRenomear={(nome) => renomear(c.id, nome)}
            onRemover={() => remover(c.id)}
          />
        ))}
      </ul>
    </div>

    )
}

export default Categorias;
