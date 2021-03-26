import './style.scss'

function Product({ beer }) {

    const image = beer.image_url || 'https://www.totalwine.com/dynamic/490x/media/sys_master/cmsmedia/hea/h5e/8962176876574.png'

    return (
        <div className="product" key={beer.name}>
            <h3>{beer.name}</h3>
            <img src={image}
                style={{
                    margin: '0 auto',
                    height: '25vw'
                }}
                alt={beer.name} />
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

