import {useEffect, useState} from "react"

import type { updateTask, Category, NewTask, Task } from "./tipos"

import { atualizaTarefa, criaTarefa, listaCategorias, listaTarefas, removeTarefa } from "./api"

// importação de outros 2 componentes
import FormTarefa from "./FormTarefa"
import ItemTarefa from "./ItemTarefa"

function Tarefas () {
  const [tarefas, setTarefas] = useState<Task[]>([])
  const [categorias, setCategorias] = useState<Category[]>([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState<string | null> (null)

  // executando quando componente for carregado
  useEffect( () => {
    Promise.all([listaTarefas(), listaCategorias()])
      .then(([listaT, listaC]) => {
        setTarefas(listaT)
        setCategorias(listaC)
      })
      .catch((e:Error) => setErro(e.message))
      .finally(() => setCarregando(false))
  }, [])

  // padrão de execução de função que chama a API
  async function executar(acao: () => Promise<void>) {
    setErro(null)
    try {
      await acao()
      return true
    }
    catch(e) {
      setErro((e as Error).message)
      return false
    }
  }

    // POST e PUT não devolvem category: montamos pela lista
  function comCategoria(t: Task): Task {
    const category = categorias.find((c) => c.id === t.categoryId) ?? null;
    return { ...t, category };
  }

    async function criar(dados: NewTask) {
      // consome a API, cria tarefa no banco, e retorna tarefa criada
    const criada = await criaTarefa(dados); 
    // adiciona a nova tarefa no vetor, já com o id da categoria, caso exista
    setTarefas((atual) => [...atual, comCategoria(criada)]);
  }

  function atualizar(id: number, dados: updateTask){
    return executar(async () => {
      const nova = await atualizaTarefa(id, dados)
      setTarefas( (atual) => atual.map((t) => (t.id === id) ? comCategoria(nova): t))
    })
  }

  function remover(id: number){
    return executar(async () => {
      await removeTarefa(id);
      setTarefas( (atual) => atual.filter( (t) => t.id != id));
    })
  }

  if (carregando) return <p> Carregando ... </p>
  
  return (
    <div className="space-y-4 max-w-xl">
      <FormTarefa category={categorias} onCriar={criar}/>
      {
        erro && <p className="text-red-600"> Erro: {erro} </p>
      }
      <ul className="space-y-2">
        {
          tarefas.map( (t) => (
            <ItemTarefa 
              key={t.id} 
              tarefa={t} 
              onAtualizar={ (dados) => atualizar(t.id, dados)}
              onRemover={ () => remover(t.id)}
              />
          ))
        }
      </ul>
    </div>
  )
}

export default Tarefas;