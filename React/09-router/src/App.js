import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import './styles/Common.scss';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import NotFount from './pages/NotFount';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/comments'
      );
      setProducts(res.data.slice(0, 10));
    };
    getProducts();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/products"
            element={<ProductPage products={products} />}
          />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="*" element={<NotFount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
