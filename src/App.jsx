import { Route, Routes } from 'react-router-dom';
import './App.scss';
import SiteNav from './layout/SiteNav';
import About from './views/About';
import Contact from './views/Contact';
import Home from './views/Home';
import Reviews from './views/Reviews';

function App() {
  return (
    <div className='text-center'>
      <SiteNav />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' Component={About} />
        <Route path='/contact' Component={Contact} />
        <Route path='/reviews' Component={Reviews} />
      </Routes>
    </div>
  )
}

export default App
