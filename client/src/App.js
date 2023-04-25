import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import Cart from "./components/Cart";
import Categories from "./components/Categories";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import FoodRecipies from "./components/FoodRecipies";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Service from "./components/Service";
import Signup from "./components/Signup";
import ProtectedRoute from "./route/ProtectedRoute";

function App() {
  const { user } = useSelector((state) => state.auth);
  console.log(user)

  return (
    <div>
      {
        user ? 
      <Header user={user} />

        :
        null
      }
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />

        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
