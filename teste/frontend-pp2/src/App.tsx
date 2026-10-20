import Card from "./Card";
import Contador from "./Contador";

function App() {
  return (
    <div className="p-6
      flex flex-col gap-3">
      <Card
        title="Estudar"
        description="Ler cap. 4"
      />
      <Contador />
    </div>
  );
}

export default App;
