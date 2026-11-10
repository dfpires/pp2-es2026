import {useState} from 'react'
import type {FormEvent} from 'react'
import type { Category, NewTask } from './tipos'

interface Props {
    category: Category[];
    onCriar: (dados: NewTask) => Promise<void>;
}

function FormTarefa({category, onCriar}: Props){
    const [title, setTitle] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [enviando, setEnviando] = useState(false);
    const [erro, setErro] = useState<string | null>(null);

    async function enviar(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        setEnviando(true)
        setErro(null)

        try {
            await onCriar({
                title,
                categoryId: categoryId ? Number(categoryId): undefined
            });
            setTitle('')
        }
        catch(err){
            setErro((err as Error).message)
        }
        finally {
            setEnviando(false)
        }
    }
    return (
        <form onSubmit={enviar} className='space-y-2'>
            <div className='flex gap-2'>
                <input
                    value={title}
                    onChange={ (e) => setTitle(e.target.value)}
                    placeholder="Nova tarefa"
                    disabled={enviando}
                    className='flex-1 border rounded px-2 py-1'/>
                <select
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    disabled={enviando}
                    className='border rounded px-2 py-1'>
                    <option value=""> Sem categoria </option>
                    {
                        category.map( (c) => (
                            <option key={c.id} value={c.id}>
                                {c.name}
                            </option> 
                        ))
                    }
                </select>
                <button
                    type="submit"
                    disabled={enviando}
                    className='px-3 py-1 rounded bg-teal-600 text-white'>
                    
                     {enviando ? "Salvando ..." : "Adicionar"}
                    
                </button>
            </div>
            {
                erro && 
                <p className='text-red-600'> Erro: {erro} </p> 
            }
        </form>
    )
}

export default FormTarefa