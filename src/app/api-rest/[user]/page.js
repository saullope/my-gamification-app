
export default async function user( { params } ){

    const { id } = params;
    return (
        <h1>
            {`El id del usuario es: ${id}`}
        </h1>
    )
}