import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import NotFound from './pages/NotFound';
import { useState, useEffect } from 'react';
import './styles/Common.scss';
import ProbStudent from './pages/ProbStudent';
// import ProbPhoto from './pages/ProbPhoto';
import PhotoPage from './pages/PhotoPage';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/comments'
      );
      setProducts(res.data.slice(0, 10));
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getPhotos = async () => {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/photos'
      );
      setPhotos(res.data.slice(0, 10));
      console.log(res.data.slice(0, 10));
    };
    getPhotos();
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
          <Route
            path="/products/:productId"
            element={<ProductDetailPage products={products} />}
          />
          {/* 실습 */}
          <Route path="/student/:name" element={<ProbStudent />}></Route>
          <Route
            path="/photos"
            element={<PhotoPage photos={photos} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
