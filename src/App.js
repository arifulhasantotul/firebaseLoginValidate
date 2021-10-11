import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Order from "./components/Order/Order";
import Pricing from "./components/Pricing/Pricing";
import Register from "./components/Register/Register";
import Shop from "./components/Shop/Shop";

function App() {
   return (
      <div className="App">
         <AuthProvider>
            <Router>
               <Header></Header>
               <Switch>
                  <Route exact path="/">
                     <Home></Home>
                  </Route>
                  <Route path="/home">
                     <Home></Home>
                  </Route>
                  <Route path="/shop">
                     <Shop></Shop>
                  </Route>
                  <Route path="/order">
                     <Order></Order>
                  </Route>
                  <Route path="/pricing">
                     <Pricing></Pricing>
                  </Route>
                  <Route path="/login">
                     <Login></Login>
                  </Route>
                  <Route path="/register">
                     <Register></Register>
                  </Route>
                  <Route path="*">
                     <NotFound></NotFound>
                  </Route>
               </Switch>
            </Router>
         </AuthProvider>
      </div>
   );
}

export default App;
