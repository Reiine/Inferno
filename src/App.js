import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel'
import Categories from './components/Categories';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import Detailpage from './components/Detailpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Header/><Carousel/><Categories/><Footer/></>}/>
        
        <Route path='/search/:link' element={<><Header/><Search/><Footer/></>}/>
        <Route path='details/:link' element={<><Header/><Detailpage/> <Footer/> </>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
