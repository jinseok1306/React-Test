import { ADD_INPUT_ITEM } from "./types";

const cartInputState = {
    Count: 0,
}

const cartInputReducer = (state = cartInputState, action : any) => {
    switch (action.type) {
        case ADD_INPUT_ITEM:
            return {
                ...state,
                Count: state.Count + action.payload //action으로 받은 payload(number)를 사용한다.
            }
        default: return state;
    }
}

export default cartInputReducer;