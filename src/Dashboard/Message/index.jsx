import { useContext } from 'react'
import { GeneralContext } from '../../App.js'

const messageStyle = {
    margin: '0 auto',
    textAlign: 'center'
}

function Message({ data }) {
    const { states: { page }, setters: { setPage } } = useContext(GeneralContext)

    return (
        !data.length &&
        <div style={messageStyle}>
            <img src="https://menopauselsupermodel.files.wordpress.com/2013/02/new_years_vintage_drunk.jpg"
                alt="too-drunk-to-think" />
            <h1>Sorry we are too drunk!! Try later...</h1>
            <button onClick={() => setPage(page - 1)} >Go back</button>
        </div >
    )
}


export default Message
