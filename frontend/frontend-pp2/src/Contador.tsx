import {useState} from 'react'

function Contador() {
    const [n, setN] = useState(0)
    return (
        <button
            onClick={() => setN(n + 1)}
            className="bg-teal-600 
            text-white 
            px-4 py-2 
            rounded">
                Cliques {n}
        </button>
    )

}
export default Contador