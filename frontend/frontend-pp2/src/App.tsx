import { useState } from "react";
import Tarefas from "./Tarefas";
import Categorias from "./Category";

const abas = [
  { id: "tarefas", rotulo: "Tarefas" },
  { id: "categorias", rotulo: "Categorias" },
];

function App() {
  const [aba, setAba] = useState("tarefas");
  return (
    <div className="p-6 space-y-4">
      <nav className="flex gap-2">
        {abas.map((a) => (
          <button
            key={a.id}
            onClick={() => setAba(a.id)}
            className={`px-3 py-1 rounded ${
              aba === a.id ? "bg-teal-600 text-white" : "bg-slate-200"
            }`}
          >
            {a.rotulo}
          </button>
        ))}
      </nav>

      {aba === "tarefas" ? <Tarefas /> : <Categorias />}
    </div>
  );
}

export default App;
