import {combineReducers} from "redux";
import adminReducer from "../views/Admin/reducer";
import snackbarReducer from "../views/SnackbarCustom/reducer";
import productsReducer from "../views/Products/reducer";
import dialogReducer from "../views/Admin/components/Dialog/reducer";

export default combineReducers({
    admin: adminReducer,
    snackbar: snackbarReducer,
    products: productsReducer,
    dialog : dialogReducer,
})
