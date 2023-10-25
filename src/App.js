import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/home';
import Contact from './pages/Contact/contact';
import About from './pages/About/about';
import Cart from './pages/Cart/cart';
import Products from './pages/Products/products';
import ScrollToTop from './scrollToTop';
import { GlobalProvider } from './contexts/globalContext';
import Navbar from './components/navbar/navbar';
import NotFound from './pages/NotFound/notFound';
import ProductDetails from './pages/ProductDetails/productDetails';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/details/:id" element={< ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
