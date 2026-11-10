import Card from './Card'
import Contador from './Contador'
import ListaFiltrada from './ListaFiltrada'
import ListaSimples from './ListaSimples'
import ListaTarefas from './ListaTarefas'
import ListaApi from './ListaApi'
import TarefasPorUsuario from './TarefasPorUsuario'

import Tarefas from './Tarefas'
import Categorias from './Categoria'

// componente funcional do react, que retorna HTML
function App() {
  return (
    <div className="p-6 flex flex-col gap-3">
     {/*   <h1 className="text-3xl font-bold">
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
       */}
    
        <Tarefas />
        <Categorias/>
        {/* 
        
        <ListaFiltrada/>
        <ListaApi/>
        <TarefasPorUsuario/>
        */}
    </div>
  )
}

export default App