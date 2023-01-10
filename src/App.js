import {
    BrowserRouter,
    Routes,
    Route, Navigate,
} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from './store/store';

import Login from './views/Login';
import Homepage from './views/Homepage';
import NotFound from './views/NotFound';
import Products from './views/Products';
import Product from "./views/Product";
import ForgotPassword from "./views/ForgotPassword";
import CreateAccount from "./views/CreateAccount";
import GlobalWrapper from "./views/GlobalWrapper";
import Admin from "./views/Admin";
import {AnimatePresence } from "framer-motion";
import Checkout from "./views/Checkout";
import ContactUs from "./views/ContactUs";


function App() {
    return (
        <Provider store={store}>
            <AnimatePresence exitBeforeEnter>
                <BrowserRouter>
                        <Routes>
                            <Route exact path="/" element={<GlobalWrapper/>}>
                                <Route path="/" element={<Navigate replace to="/home" />} />
                                <Route path="contact-us" element={<ContactUs/>}/>
                                <Route path="home" element={<Homepage/>}/>
                                <Route path="forgot-password" element={<ForgotPassword/>}/>
                                <Route path="create-account" element={<CreateAccount/>}/>
                                <Route path="login" element={<Login/>}/>
                                <Route path="products" element={<Products/>}/>
                                <Route path="products/:id" element={<Product/>}/>
                                <Route path="*" element={<NotFound/>}/>
                                <Route path="/admin" element={<Admin/>}/>
                                <Route path="/checkout" element={<Checkout/>}/>
                            </Route>
                        </Routes>
                </BrowserRouter>
            </AnimatePresence>
        </Provider>
    );
}

export default App;
