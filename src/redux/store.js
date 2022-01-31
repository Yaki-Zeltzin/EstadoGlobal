import {applyMiddleware, combineReducers, createStore} from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { ADD_TO_CART, DELETE_FROM_CART, GET_COURSE_LIST } from "./actions";

const initialStore = {
    cart: []
}//initialStore

const initialCourses = {
    courses:[]
}

const cartReducer = (state = initialStore, action) =>{
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

const coursesReducer = (state = initialCourses, action) => {
    if(action.type === GET_COURSE_LIST){
        return{
            ...state,
            courses: action.courses
        }
    }
    return state
}

export default createStore(combineReducers({cartReducer,coursesReducer}) , composeWithDevTools( applyMiddleware(thunk)));