import { combineReducers } from "redux";
import cartReducer from './cart/reducer';
import cartInputReducer from "./inputCart/reducer";

//여러 reducer를 store에서 한번에 사용하기 위해 combineReducers 사용
const rootReducer = combineReducers({
    cart: cartReducer,
    cartInput: cartInputReducer,
})

export default rootReducer;