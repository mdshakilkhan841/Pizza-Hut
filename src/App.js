import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";

function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" exact element={<Home />}></Route>
                <Route path="/products" exact element={<Products/>}></Route>
                <Route path="/products/:_id" element={<SingleProduct/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
            </Routes>
        </>
    );
}

export default App;
