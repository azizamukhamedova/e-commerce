import { Route, Switch } from "react-router-dom";

import "./App.css";

import ShopPage from "./pages/shop/shop.component";
import Header from "../src/components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
