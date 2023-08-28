import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Collections from "./pages/Collections";
import Account from "./pages/Account";
import AuthLayout from "./Layout/AuthLayout";
import Master from "./Layout/Master";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import Verify from "./pages/Verify";
import NewPassword from "./pages/NewPassword";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import { ProductProvider } from "./context/ProductContext";
import { CollectionProvider } from "./context/CollectionContext";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import CollectionsCard from "./components/CollectionsCard";
import { LanguageProvider } from "./context/LanguageContext";
import BackToTopButton from "./components/BackToTopButton";
import SearchResults from "./components/SearchResults";



function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
      <ProductProvider>
        <CollectionProvider>
          <Routes>
            <Route path="/" element={<Master />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<ProductDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/collections/:slug" element={<CollectionsCard/>} />
              <Route path="/account" element={<Account />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/cart/checkout" element={<Checkout />} />
              <Route path="/searchresults" element={<SearchResults />} />
              <Route path="/*" element={<NotFound />} />
            </Route>
            <Route path="/auth" element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="reset" element={<Reset />} />
              <Route path="verify" element={<Verify />} />
              <Route path="newpassword" element={<NewPassword />} />
            </Route>
          </Routes>
          <BackToTopButton/>
        </CollectionProvider>
      </ProductProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
