import {createStore} from "redux"

const initialStore = {
    cart: []
}//initialStore

const rootReducer = (state = initialStore, action) =>{
    return state
}//rootReducer

export default createStore(rootReducer);