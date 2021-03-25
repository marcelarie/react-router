import './style.scss'

function Product({ beer }) {
    console.log(beer)
    return (
        <div className="product" key={beer.name}>
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <div className="product-info">
                <div>
                    <h4>IBU</h4>
                    <p>{beer.ibu}</p>
                </div>
                <div>
                    <h4>ABV</h4>
                    <p>{beer.abv}</p>
                </div>
                <div>
                    <h4>EBC</h4>
                    <p>{beer.ebc}</p>
                </div>
            </div>
        </div>
    )
}

export default Product

