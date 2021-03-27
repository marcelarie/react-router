import { useContext } from 'react'
import { GeneralContext } from '../../App.js'


function Control() {

    const { setters: { setPage, setMode, setDate, setCheckPage, setPerPage },
        states: { page, mode, checkPage, perPage } } = useContext(GeneralContext)

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
        const beersPerPage = event.target.perPage.value
        setPage(1)
        setPerPage(parseInt(beersPerPage))
    }

    const showReturn = mode === 'date' ? false : true

    return (
        <form className='control'>
            <form style={{
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
                        setPage(page - 1)
                        setCheckPage(false)
                    }}
                >Last Page</button>

                <form style={{
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
                            defaultValue={perPage} type='number' name='perPage'
                        />
                        <input type='submit' value='Per page' />
                    </form>
                </form>

                <button
                    disabled={checkPage === true || mode === 'date'}
                    onClick={() => setPage(page + 1)}
                >Next Page</button>
            </form>

            <form style={{ display: 'flex', justifyContent: 'center' }}>
                <form onSubmit={e => searchDate(e)}>
                    <input
                        style={{ align: 'right' }}
                        type="month" id="date" name="date"
                    />
                    <input type='submit' value="Submit" />
                </form>
            </form>
            <p>Sort by: {mode}</p>
        </form>
    )
}

export default Control
