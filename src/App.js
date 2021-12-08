import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Login from './views/Login';
import Homepage from './views/Homepage';
import NotFound from './views/NotFound';
import Products from './views/Products';
import Product from "./views/Product";
import ForgotPassword from "./views/ForgotPassword";
import CreateAccount from "./views/CreateAccount";
import About from "./views/About";
import Sidebar from "./components/Sidebar";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                    <Route exact path="/" element={<Sidebar/>} />
                    <Route path="about" element={<About/>} />
                    <Route path="home" element={<Homepage/>} />
                    <Route path="forgot-password" element={<ForgotPassword />} />
                    <Route path="create-account" element={<CreateAccount />} />
                    <Route path="login" element={<Login />} />
                    <Route path="products" element={<Products />} />
                    <Route path="products/:id" element={<Product />} />
                    <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
