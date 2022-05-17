import { ADD_ITEM, REMOVE_ITEM } from './types'

// actino 정의
export const addItem = () => {
    return {
        type: ADD_ITEM
    }
}

export const removeItem = () => {
    return {
        type: REMOVE_ITEM
    }
}