import { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { GeneralContext } from '../../App.js'
import { lastPage } from '../../redux/actions/pages.js';

const messageStyle = {
    margin: '0 auto',
    textAlign: 'center'
}

function Message({ data }) {
    // const { states: { page }, setters: { setPage } } = useContext(GeneralContext)
    const dispatch = useDispatch();
    const page = useSelector(state => state.pages)

    return (
        !data.length &&
        <form style={messageStyle}>
            <img src="https://menopauselsupermodel.files.wordpress.com/2013/02/new_years_vintage_drunk.jpg"
                alt="too-drunk-to-think" />
            <h1>Sorry we are too drunk!! Try later...</h1>
            <button onClick={() => dispatch(lastPage())} >Go back</button>
        </form >
    )
}


export default Message
