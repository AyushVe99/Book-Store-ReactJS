import React, { Fragment } from "react";

import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Provider } from "./context/Context";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Books from "./components/Books";
import About from "./components/About";
import BookCart from "./components/BookCart";
import BookDetails from "./components/BookDetails";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";

function App() {
  return (
    <Provider>
      <div className="App">
        <Navbar />
        
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Fragment>
                <Header />
                <Books />
              </Fragment>
            )}
          />
          <Route path="/about" component={About} />
          <Route path="/book-cart" component={BookCart} />
          <Route path="/book/details/:id" component={BookDetails} />
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/payment" component={Payment}/>
          <Route path="/checkout" component={Checkout}/>
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
