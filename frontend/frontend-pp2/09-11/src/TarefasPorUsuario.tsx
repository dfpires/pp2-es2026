import { useEffect, useState } from "react";
import type {Todo} from './tipos'

function TarefasPorUsuario () {
    const [userId, setUserId] = useState(1);
    const [todos, setTodos] = useState<Todo[]>([]);
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState <string | null>(null)

    useEffect(() => {
        async function carregar(){
            setCarregando(true)
            try {
                const resposta = await fetch(
                    `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
                );
                if (!resposta.ok){
                    throw new Error(`Erro HTTP ${resposta.status}`)
                }
                setTodos(await resposta.json())
            }
            catch(e) {
              setErro(e instanceof Error ? e.message : "Erro desconhecido")   
            }
            finally{
                setCarregando(false) 
            }
        }
        carregar()
    }, [userId]) // useEffect será executado no carregamento inicial do componente, e toda vez que userId for alterada

    return (
        <div className="space-y-3">
            <label className="flex item-center gap-2">
                Usuário: 
                <select
                    value={userId}
                    onChange={(e) => setUserId(Number(e.target.value))}
                    className="border rounded px-2 py-1">
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map( (n) => (
                                <option key={n} value={n}> {n} </option>
                            ))
                        }
                </select>
            </label>
            {
                carregando ? (
                    <p> Carregando ... </p>
                ): (
                    <ul className="space-y-1">
                        {
                            todos.map( (t) => (
                                <li key={t.id}>
                                    {t.completed ? "[x]" : "[ ]"} {t.title}
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    )
}   

export default TarefasPorUsuario