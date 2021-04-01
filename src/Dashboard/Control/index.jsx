import { nextPage, lastPage, changePage, changePerPage } from '../../redux/actions/pages.js'
import { useDispatch, useSelector } from 'react-redux'
import { paginationMode, dateMode } from '../../redux/actions/mode.js'
import { changeDate } from '../../redux/actions/date.js'

function Control() {

    const dispatch = useDispatch();
    const perPage = useSelector(({ pages }) => pages.perPage)
    const page = useSelector(({ pages }) => pages.page)
    const mode = useSelector(({ modes }) => modes.mode)
    const checkPage = useSelector(({ checkNextPage }) => checkNextPage.checkPage)


    const searchDate = (event) => {
        event.preventDefault();
        const target = event.target.date
        const split = target.value.split('-');

        if (split.length > 1) {
            const formatedDate = split[1] + '/' + split[0]
            dispatch(changeDate(formatedDate)) // setDate(formatedDate)
            dispatch(dateMode()) // setMode('date')
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
                    onClick={() => dispatch(paginationMode())/* setMode('pagination') */}
                >Return</button>

                <button
                    disabled={page === 1 || mode === 'date'}
                    onClick={() => {
                        dispatch(lastPage()) // setPage(page - 1)
                        // setCheckPage(false)
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
                            style={{ width: '30px', margin: '0 auto' }}
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
