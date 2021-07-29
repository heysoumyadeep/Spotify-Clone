export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQAQWaVIkjEf9UcXgydny0boCw1Qc766S159n5m9-9j1tCsS11…5d0fqNpC5gIJ6xAlGN-AEpa1RSpq1cPdVfhI01d0uiBDzW4sU",
};

const reducer = (state, action) => {
    console.log(action);
    console.log(state);
    switch (action.type) {
        case 'SET_USER': 
        return {
            ...state,
            user: action.user
        }

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }

        case 'SET_PLAYLISTS': 
            return{
                ...state,
                playlists: action.playlists,
            }

        default: 
            return state;
    }
}

export default reducer;