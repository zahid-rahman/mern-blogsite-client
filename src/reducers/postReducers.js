const fetchUserPostsReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_USER_POSTS":
            return state = action.payload;

        default:
            return state
    }
}

const fetchUserPostReducer = (state = {}, action) => {
    switch (action.type) {
        case "FETCH_USER_POST":
            return state = action.payload;
    
        default:
            return state;
    }
}

export { fetchUserPostsReducer, fetchUserPostReducer }