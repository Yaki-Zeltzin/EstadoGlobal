import {createStore} from "redux"
import { ADD_TO_CART, DELETE_FROM_CART } from "./actions";

const initialStore = {
    cart: []
}//initialStore

const rootReducer = (state = initialStore, action) =>{
    if(action.type === ADD_TO_CART){

        if(state.cart.find(a => a === action.id)) return state

        return {
            ...state,
            cart: state.cart.concat(action.id)
        }
    }

    if (action.type === DELETE_FROM_CART) {
        return {
            ...state,
            cart: state.cart.filter(c => c !== action.id)
        }
    }

    return state
}//rootReducer

export default createStore(rootReducer);