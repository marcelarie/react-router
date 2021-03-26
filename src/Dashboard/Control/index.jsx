import { useContext } from 'react'
import { GeneralContext } from '../../App.js'


function Control({ data }) {

    const { setters: { setPage, setMode, setDate, setCheckPage },
        states: { page, mode, checkPage } } = useContext(GeneralContext)

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

    const showReturn = mode === 'date' ? false : true

    return (
        <div className='control'>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
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
                {
                    mode === 'pagination' &&
                    <p style={{ margin: '1em' }}>Page: {page}</p>
                }
                <button
                    disabled={checkPage === true || mode === 'date'}
                    onClick={() => setPage(page + 1)}
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
        </div>
    )
}

export default Control
