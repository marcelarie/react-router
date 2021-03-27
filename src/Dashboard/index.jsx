import Product from './Product'
import { Redirect } from 'react-router-dom'
import { useContext } from 'react'
import { GeneralContext } from '../App.js'
import Control from './Control'
import Message from './Message'
import './style.scss'

function Dashboard({ result: { data } }) {

    const { states: { page, perPage } } = useContext(GeneralContext)

    if (!data) {
        return <Redirect to={`/dashboard/page=${page}&per=${perPage}`} />
    } else {
        return (
            <>
                <h1 style={{ textAlign: 'center' }}>Punk API</h1>
                <Control data={data} />
                <div className="dashboard">
                    <Redirect to={`/dashboard/page=${page}&per=${perPage}`} />
                    {
                        data &&
                        data.map(beer => <Product key={beer.id} beer={beer} />)
                    }
                    <Message data={data} />
                </div>
            </>
        )
    }
}

export default Dashboard
