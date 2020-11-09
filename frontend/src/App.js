import React, {useState} from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/header/Header";
import Bags from "./pages/bags/Bags";
import ShoesPage from "./pages/shoes/ShoesPage";
import WearsPage from "./pages/wears/WearsPage";
import AccessoriesPage from "./pages/accessories/AccessoriesPage";
import Footer from "./components/footer/footer";
import "./App.css";
import AdminHome from "./pages/admin/admin";
import ProductPage from './pages/product/product';
// import SalesAdmin from "./pages/admin/sales/sales_admin";

//chrisdon95.github.io/NazaKingEvents/

function App() {

     const [cartItems, setCartItems] = useState(0)

     const updateCart = () =>{
     setCartItems(cartItems + 1)
     }
  return (
    <div className="App">
      <Header />
      <div>
        cart
        <span className='badge badge-pill badge-secondary'>{cartItems}</span>
      </div>
      <Switch>
        <Route exact path="/" render={() => <Homepage updateCart={updateCart}/>} />
        <Route path="/admin" component={() => <AdminHome />} />  
        <Route exact path="/bags" component={() => <Bags />} />
        <Route path="/shoes" component={() => <ShoesPage />} />
        <Route path="/wears" component={() => <WearsPage />} />
        <Route path="/accessories" component={() => <AccessoriesPage />} />
        <Route path='/bags/:product' component={() =><ProductPage />} />
        <Route path='/shoes/:product' component={() =><ProductPage />} />
        <Route path='/wears/:product' component={() =><ProductPage />} />
        <Route path='/accessories/:product' component={() =><ProductPage />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
