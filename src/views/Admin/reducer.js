import {SET_PRODUCTS, IS_LOADING , SET_CONTACTS,SET_ORDERS} from "./constants";


const initialState={
    contacts:[],
    orders:[],
    products:[],
    loading:false,
};

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.products,
            }
        case SET_CONTACTS:
            return {
                ...state,
                contacts: action.contacts,
            }
        case SET_ORDERS:
            return {
                ...state,
                orders: action.orders,
            }
        case IS_LOADING:
            return {
                ...state,
                loading: action.loading
            }

        default:
            return state
    }
}

export default adminReducer
