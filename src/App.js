import { Route, Switch } from "react-router-dom";
import React from "react";

import "./App.css";

import { auth } from "./firebase/firebase.utils";

import ShopPage from "./pages/shop/shop.component";
import Header from "../src/components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUpPAge from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromauth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign-in" component={SignInAndSignUpPAge} />
        </Switch>
      </div>
    );
  }
}

export default App;
