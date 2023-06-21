import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import HomePage from './pages/HomePage/HomePage';
import AccountPage from './pages/AccountPage/AccountPage';
import { useSelector } from 'react-redux';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage';
import CartPage from './pages/CartPage/CartPage';

function App() {
  const currentUser = useSelector(state => state.user.currentUser)
  return (
    <div className="App">
      <Header />
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/catalog" element={<CatalogPage />} />
         <Route path="/catalog/:id" element={<SingleProductPage />} />
         <Route path="/cart" element={<CartPage />} />
        { !currentUser &&  <Route path="/account" element={<AccountPage />} /> }
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
