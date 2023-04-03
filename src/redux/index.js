import customersReducer from "./reducers/customers"
import purchasesReducer from "./reducers/purchases"
import productsReducer from "./reducers/products"
import { combineReducers } from "redux"

const storeReducers = combineReducers ({
    products: productsReducer,
    customers: customersReducer,
    purchases: purchasesReducer,
})

export default storeReducers;