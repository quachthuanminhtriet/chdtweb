import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Category from './component/Staff/Category/Category';
import { Container } from 'react-bootstrap';
import Cart from './component/Staff/Cart/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <Container fluid className="p-0">
        <Routes>
          <Route path='/' element={<Category />} />
          <Route path='/Product' element={<Category />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Stats' element={<Category />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
