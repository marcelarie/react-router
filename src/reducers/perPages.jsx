export default perPagesReducer = (state = 25, action) => {
    switch (action.type) {
        case 'CHANGE_PER_PAGE':
            console.log(action)
            return state;
    }
}
