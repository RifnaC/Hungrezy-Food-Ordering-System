import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import Cart from "./components/Cart";
import Categories from "./components/Categories";
import Checkout from "./components/Checkout";
import FoodRecipies from "./components/FoodRecipies";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./route/ProtectedRoute";

function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <Header user={user} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<AddProduct />} />
          <Route path="/food/:id" element={<FoodRecipies />} />
          <Route path="/foods/:id" element={<Categories />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
