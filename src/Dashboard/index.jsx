import Product from './Product'
import './style.scss'

function Dashboard({ result }) {
    const { data } = result

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Punk API</h1>
            <div className="dashboard">
                {
                    data && data.map(beer => <Product key={beer.id} beer={beer} />)
                }
            </div>
        </>
    )
}

export default Dashboard
