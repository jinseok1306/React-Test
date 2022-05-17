import { ADD_INPUT_ITEM } from "./types";

//input value값을 받을 매개변수 number를 선언한다.
export const addInputItem = (number : any) => {
    return {
        type: ADD_INPUT_ITEM,
        payload: Number(number) //action으로 받은 값을 reducer로 넘길 때 payload를 사용한다.
    }
}