import {combineReducers} from "redux";
import adminReducer from "../views/Admin/reducer";
import snackbarReducer from "../views/SnackbarCustom/reducer";
import productsReducer from "../views/Products/reducer";

export default combineReducers({
    admin: adminReducer,
    snackbar: snackbarReducer,
    products: productsReducer,
})
