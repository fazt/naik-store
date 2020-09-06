import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductsList";
import ProductForm from './components/ProductForm'
import ProductPreview from './components/ProductPreview'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <div className="container p-4">
          <Switch>
            <Route path="/products/:productId">
              <ProductPreview/>
            </Route>
            <Route path="/product-form">
              <ProductForm/>
            </Route>
            <Route path="/products">
              <ProductList />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
