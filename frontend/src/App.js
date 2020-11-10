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
import BagProductPage from './pages/product/bagProduct';
import SalesProductPage from './pages/product/saleProduct';
import WearProductPage from './pages/product/wearProduct'
import ShoeProductPage from './pages/product/shoeProduct'
import AccessoryProductPage from './pages/product/accessoryProduct'

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
        <Route exact path="/shoes" component={() => <ShoesPage />} />
        <Route exact path="/wears" component={() => <WearsPage />} />
        <Route exact path="/accessories" component={() => <AccessoriesPage />} />
        <Route path='/bags/:product' component={() =><BagProductPage />} />
        <Route path='/shoes/:product' component={() =><ShoeProductPage />} />
        <Route path='/wears/:product' component={() =><WearProductPage />} />
        <Route path='/accessories/:product' component={() =><AccessoryProductPage />} />
        <Route path='/:product' component={() =><SalesProductPage />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
