import Product from './Product'

function Dashboard({ result }) {
    const { data } = result

    return (
        <div>
            <h1>Dashboard</h1>
            {
                data && data.map(beer => <Product beer={beer} />)
            }
        </div>
    )
}

export default Dashboard
