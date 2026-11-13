import { Link } from "react-router";

function NaoEncontrada() {
  return (
    <div className="space-y-2">
      <h1 className="text-xl font-bold">Página não encontrada</h1>
      <p>O endereço digitado não existe.</p>
      <Link to="/tarefas" className="text-teal-700 underline">
        Voltar para as tarefas
      </Link>
    </div>
  );
}

export default NaoEncontrada;
