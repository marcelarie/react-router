import Product from './Product'
import { Redirect, useParams, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { GeneralContext } from '../App.js'
import './style.scss'

function Dashboard({ result }) {
    const { data } = result
    const history = useParams();

    const { setters: { setPage, setPerPage, setMode, setDate }, states: { page, perPage, mode, date } } = useContext(GeneralContext)

    const searchDate = (event) => {
        event.preventDefault();
        const target = event.target.date
        const split = target.value.split('-');

        if (split.length > 1) {
            const date = split[1] + '/' + split[0]
            console.log(date)
            setDate(date)
            setMode('date')
        } else {
            target.focus()
        }
    }

    if (data) {
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>Punk API</h1>
                <div className='control'>
                    <button disabled={page === 1} onClick={() => setPage(page - 1)}>Last Page</button>
                    <button disabled={!data.length} onClick={() => setPage(page + 1)}>Next Page</button>
                    <form onSubmit={e => searchDate(e)}>
                        <input style={{ align: 'right' }} type="month" id="date" name="date" />
                        <input type='submit' value="Submit" />
                    </form>
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
