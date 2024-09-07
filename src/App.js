import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from 'chart.js/auto';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Category from './component/Staff/Category/Category';
import { Container } from 'react-bootstrap';
import Cart from './component/Staff/Cart/Cart';
import Product from './component/Staff/Product/Product';
import Header from './component/Layout/Header';
import ProductDetail from './component/ProductDetail/ProductDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Container fluid className="p-0">        
        <Routes>
          <Route path='/' element={<ProductDetail />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
