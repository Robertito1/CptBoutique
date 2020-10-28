import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
// import CategoriesPage from "./pages/categories/CategoriesPage";
import Header from "./components/header/Header";
import Bags from "./pages/bags/Bags";
import ShoesPage from "./pages/shoes/ShoesPage";
import WearsPage from "./pages/wears/WearsPage";
import AccessoriesPage from "./pages/accessories/AccessoriesPage";
import Footer from "./components/footer/footer";
import "./App.css";
import AdminHome from "./pages/admin/home/admin";

//chrisdon95.github.io/NazaKingEvents/

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Homepage />} />
        <Route path="/admin" component={() => <AdminHome />} /> 
        <Route path="/bags" component={() => <Bags />} />
        <Route path="/shoes" component={() => <ShoesPage />} />
        <Route path="/wears" component={() => <WearsPage />} />
        <Route path="/accessories" component={() => <AccessoriesPage />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
