import {useState} from "react"

interface Tarefa {
    id: number,
    titulo: string,
    concluida: boolean
}

const tarefas: Tarefa[] = [
  { id: 1, titulo: "Ler o capítulo 4", concluida: true },
  { id: 2, titulo: "Fazer a lista de exercícios", concluida: false },
  { id: 3, titulo: "Estudar para a prova", concluida: false },
  { id: 4, titulo: "Entregar o relatório", concluida: false },
];

function ListaFiltrada() {
    const [apenasPendentes, setApenasPendentes] = useState(false)
    const visiveis = apenasPendentes ? 
        tarefas.filter( (t) => !t.concluida) : tarefas

    return (
        <div>
            <label> 
                <input type="checkbox" checked={apenasPendentes}
                onChange={ (e) => setApenasPendentes(e.target.checked)}/>
                Mostrar apenas pendentes
            </label>
            <p>
                {visiveis.length} de {tarefas.length} tarefas
            </p>
            <ul>
                {visiveis.map( (t) => (
                    <li key={t.id}> {t.titulo} </li>
                ))}
            </ul>
        </div>
    )
}

export default ListaFiltrada