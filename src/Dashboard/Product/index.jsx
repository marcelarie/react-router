
function Product({ beer }) {
    console.log(beer)
    return (
        <div key={beer.name}>
            <p>{beer.name}</p>
        </div>
    )
}

export default Product

