import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import  { store } from './store/store';

import Login from './views/Login';
import Homepage from './views/Homepage';
import NotFound from './views/NotFound';
import Products from './views/Products';
import Product from "./views/Product";
import ForgotPassword from "./views/ForgotPassword";
import CreateAccount from "./views/CreateAccount";
import About from "./views/About";
import GlobalWrapper from "./views/GlobalWrapper";
import Admin from "./views/Admin";


function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <GlobalWrapper>
                    <Routes>
                            <Route  path="/" element={<Homepage/>} />
                            <Route path="about" element={<About/>} />
                            <Route path="home" element={<Homepage/>} />
                            <Route path="forgot-password" element={<ForgotPassword />} />
                            <Route path="create-account" element={<CreateAccount />} />
                            <Route path="login" element={<Login />} />
                            <Route path="products" element={<Products />} />
                            <Route path="products/:id" element={<Product />} />
                            <Route path="*" element={<NotFound />} />
                            <Route path="/admin" element={<Admin />} />
                    </Routes>
                </GlobalWrapper>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
