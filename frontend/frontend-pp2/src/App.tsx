import Card from './Card'
import Contador from './Contador'
import Imc from './imc'
import ListaSimples from './ListaSimples'
import ListaTarefas from './ListaTarefas'
// componente funcional do react, que retorna HTML
function App() {
  return (
    <div className="p-6 flex flex-col gap-3">
        <h1 className="text-3xl font-bold">
          Hello, Paradigmas de Programação 2
        </h1>
        <Card 
          title="Estudar" 
          description="ReactJS e TailwindCSS" />
        <Card 
          title="Exercícios" 
          description="Fazer a lista" />  
        
        <Contador/>
        <Imc/>
        <ListaSimples/>
        <ListaTarefas/>
    </div>
  )
}

export default App