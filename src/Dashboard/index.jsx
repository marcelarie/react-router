import Product from './Product'
import { Redirect } from 'react-router-dom'
import Control from './Control'
import Message from './Message'
import './style.scss'
import { useSelector } from 'react-redux'

function Dashboard() {

    const page = useSelector(({ pages }) => pages.page)
    const perPage = useSelector(({ pages }) => pages.perPage)
    const data = useSelector(({ data }) => data.result.data)

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
