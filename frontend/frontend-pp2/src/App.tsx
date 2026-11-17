import Tarefas from "./Tarefas";
import Categorias from "./Category";
import { Navigate, Route, Routes } from "react-router";
import Layout from "./Layout";
import NaoEncontrada from "./NaoEncontraod";
import DetalheTarefa from "./DetalheTarefa";


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/tarefas" replace />} />
        <Route path="tarefas" element={<Tarefas />} />
        <Route path="tarefas/:id" element={<DetalheTarefa />} />
        <Route path="categorias" element={<Categorias />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Route>
    </Routes>
  );
}


export default App;

