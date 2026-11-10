import {useState} from 'react' // importa a dependência useState (hook) do React
// campo do Tailwind (com borda, cantos arredondados, padding horizontal e vertical)
const campo = 'border rounded px-3 py-2' 
function Imc() {
    // cria variáveis de estado para armazenar o peso, altura e resultado do IMC
    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [imc, setImc] = useState<number | null>(null)

    // função para calcular o IMC com base no peso e altura fornecidos
    function calcularIMC() {
        if (peso >= 0 && altura > 0) {
            const resultado = peso / (altura * altura)
            setImc(resultado) // altero a variável de estado imc com o resultado do cálculo
        }
    }
    return (
        <div>
            <input type="number" placeholder="Peso (kg)" className={campo} value={peso} 
                onChange={(e) => setPeso(parseFloat(e.target.value))} />
            <input type="number" placeholder="Altura (m)" className={campo} value={altura} 
                onChange={(e) => setAltura(parseFloat(e.target.value))} />
            <button onClick={calcularIMC}>Calcular IMC</button>
            {
 /* rendizo condicional: se imc não for nulo, exibe o resultado do cálculo com duas casas decimais */
            }

            {imc !== null && (
                <p>Seu IMC é: {imc.toFixed(2)}</p>
            )
            }
        </div>
    )
}
export default Imc
