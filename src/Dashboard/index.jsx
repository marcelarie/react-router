import Product from './Product'
import { Redirect, useParams, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { GeneralContext } from '../App.js'
import './style.scss'

function Dashboard({ result }) {
    const { data } = result
    const history = useParams();

    const { setters: { setPage, setPerPage }, states: { page, perPage } } = useContext(GeneralContext)


    if (data) {
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>Punk API</h1>
                <div>
                    <button disabled={page === 1} onClick={() => setPage(page - 1)}>Last Page</button>
                    <button disabled={!data.length} onClick={() => setPage(page + 1)}>Next Page</button>
                </div>
                <div className="dashboard">
                    <Redirect to={`/dashboard/page=${page}&per=${perPage}`} />
                    {
                        data && data.map(beer => <Product key={beer.id} beer={beer} />)
                    }
                    {
                        !data.length && <h1>No more beer mate!</h1>
                    }
                </div>
            </div>
        )
    } else {
        return <Redirect to={`/dashboard/page=${page}&per=${perPage}`} />
    }
}

export default Dashboard
