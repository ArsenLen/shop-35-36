import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/catalog" element={<CatalogPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
