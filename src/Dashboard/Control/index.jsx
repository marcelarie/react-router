import { useContext } from 'react'
import { GeneralContext } from '../../App.js'
import { nextPage, lastPage, changePage, changePerPage } from '../../redux/actions/pages.js'
import { useDispatch, useSelector } from 'react-redux'

function Control() {

    const dispatch = useDispatch();
    const perPage = useSelector(state => state.perPage)
    const page = useSelector(state => state.pages)

    const { setters: { setMode, setDate, setCheckPage },
        states: { mode, checkPage } } = useContext(GeneralContext)

    const searchDate = (event) => {
        event.preventDefault();
        const target = event.target.date
        const split = target.value.split('-');

        if (split.length > 1) {
            const date = split[1] + '/' + split[0]
            setDate(date)
            setMode('date')
        } else target.focus();
    }

    const submitPerPage = (event) => {
        event.preventDefault()
        const beersPerPage = parseInt(event.target.perPage.value)
        dispatch(changePage(1)) // setPage(1)
        dispatch(changePerPage(beersPerPage)) // setPerPage(parseInt(beersPerPage))
    }

    const showReturn = mode === 'date' ? false : true

    return (
        <div className='control'>
            <div style={{
                display: 'flex', justifyContent: 'center',
                margin: '1em 0'
            }}>
                <button
                    hidden={showReturn}
                    onClick={() => setMode('pagination')}
                >Return</button>

                <button
                    disabled={page === 1 || mode === 'date'}
                    onClick={() => {
                        dispatch(lastPage()) // setPage(page - 1)
                        setCheckPage(false)
                    }}
                >Last Page</button>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    textAlign: 'center'
                }}>
                    {
                        mode === 'pagination' &&
                        <p style={{ margin: '1em' }}>Page: {page}</p>
                    }

                    <form onSubmit={e => submitPerPage(e)} >
                        <input
                            style={{ width: '2vw', margin: '0 auto' }}
                            defaultValue={perPage} min='0' type='number' name='perPage'
                        />
                        <input type='submit' value='Per page' />
                    </form>
                </div>

                <button
                    disabled={checkPage === true || mode === 'date'}
                    onClick={() => dispatch(nextPage())} // onClick={() => setPage(page + 1)}
                >Next Page</button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <form onSubmit={e => searchDate(e)}>
                    <input
                        style={{ align: 'right' }}
                        type="month" id="date" name="date"
                    />
                    <input type='submit' value="Submit" />
                </form>
            </div>
            <p>Sort by: {mode}</p>
        </div >
    )
}

export default Control
