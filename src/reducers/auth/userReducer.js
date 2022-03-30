const initialState = null;

export default function userReducer(state = initialState, action){
    switch(action.type) {
        case 'LOGIN': {
            return {
                username: action.payload.email
            }
        }
        case 'LOGOUT': {
            return initialState;
        }
        default: 
            return state;
    }
}