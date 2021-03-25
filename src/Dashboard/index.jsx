import Product from './Product'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { GeneralContext } from '../App.js'
import './style.scss'

function Dashboard({ result }) {
    const { data } = result
    // console.log(result)

    const { setters: { setPage, setPerPage }, states: { page, perPage } } = useContext(GeneralContext)

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Punk API</h1>
            <div>
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>Last Page</button>
                <button onClick={() => setPage(page + 1)}>Next Page</button>
            </div>
            <div className="dashboard">
                {
                    data && data.map(beer => <Product key={beer.id} beer={beer} />)
                }
            </div>
        </div>
    )
}

export default Dashboard
