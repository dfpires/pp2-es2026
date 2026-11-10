interface CardProps {
    title: string;
    description: string;
}

function Card(
    {title, description}: CardProps
) {
    return (
        <div className="rounded-lg border p-4">
            <h2 className="font-bold">
                {title}
            </h2>
            <p>
                {description}
            </p>
        </div>
    )
}

export default Card