import { ADD_ITEM, REMOVE_ITEM } from './types'

// state 초기값 정의
const cartState = {
    Count: 10
}

// reducer 정의
const cartReducer = (state = cartState, action : any) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                Count: state.Count + 1
            }
        case REMOVE_ITEM:
            return {
                ...state,
                Count: state.Count - 1
            }
        default: return state;
    }
}

export default cartReducer;