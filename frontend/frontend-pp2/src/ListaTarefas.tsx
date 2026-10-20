import type { Todo } from "./tipos";

const tarefas: Todo[] = [
        {userId: 1, id: 1, title: "beber agua", completed: true},
        {userId: 1, id: 2, title: "tomar cerveja", completed: false},
        {userId: 1, id: 3, title: "dormir", completed: false},
    ]

function ListaTarefas() {
    return (
        <ul>
            {
                tarefas.map( (todo) => (
                    <li key={todo.id}>
                        {todo.title} - {todo.completed ? "Completo": "Incompleto"}
                    </li>
                ))
            }
        </ul>
    )
}
export default ListaTarefas