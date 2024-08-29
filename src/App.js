import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from 'chart.js/auto';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Category from './component/Staff/Category/Category';
import { Container } from 'react-bootstrap';
import Cart from './component/Staff/Cart/Cart';
import Product from './component/Staff/Product/Product';
import Stats from './component/Staff/Stats/Stats';

const App = () => {
  return (
    <BrowserRouter>
      <Container fluid className="p-0">
        <Routes>
          <Route path='/' element={<Category />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Stats' element={<Stats />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
