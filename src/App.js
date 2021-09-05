import "./styles/app.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactNotifications from "react-notifications-component";
import {
  ApiContextProvider,
  AuthContextProvider,
  CartContextProvider,
  SavedContextProvider,
  SearchContextProvider,
} from "./context/index";
import {
  Navbar,
  Footer,
  ProtectedRoute,
  ScrollToTop,
  Modal,
} from "./components/index";
import {
  Home,
  Shop,
  Category,
  About,
  Cart,
  Saved,
  Search,
  SignIn,
  SignUp,
  Orders,
  Contact,
  Checkout,
} from "./pages/index";

import ProductModalContextProvider from "./context/ProductModalContext";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <ApiContextProvider>
          <ProductModalContextProvider>
            <SearchContextProvider>
              <SavedContextProvider>
                <CartContextProvider>
                  <div className="App">
                    <Modal />
                    <ReactNotifications />
                    <Navbar />
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path="/products" component={Shop} />
                      <Route path="/category/:id" component={Category} />
                      <Route path="/about" component={About} />
                      <Route path="/cart" component={Cart} />
                      <Route path="/saved" component={Saved} />
                      <Route path="/search" component={Search} />
                      <Route path="/signin" component={SignIn} />
                      <Route path="/signup" component={SignUp} />
                      <ProtectedRoute path="/orders" component={Orders} />
                      <ProtectedRoute path="/checkout" component={Checkout} />
                      <Route path="/contact" component={Contact} />
                    </Switch>
                    <ScrollToTop />

                    <Footer />
                  </div>
                </CartContextProvider>
              </SavedContextProvider>
            </SearchContextProvider>
          </ProductModalContextProvider>
        </ApiContextProvider>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
