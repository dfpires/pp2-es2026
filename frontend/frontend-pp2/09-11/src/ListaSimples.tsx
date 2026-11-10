function ListaSimples (){
    const linguagens = [ "TypeScript", "React", "Node", "Prisma"]
    return (
        <ul className="list-disc pl-6">
            {
                linguagens.map( (nome) => (
                    <li key={nome}>
                        {nome}
                    </li>
                ))
            }
        </ul>
    )
}

export default ListaSimples;