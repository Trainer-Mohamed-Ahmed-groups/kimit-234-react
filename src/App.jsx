import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { ThemeContext } from './contexts/ThemeContext';
import SiteNav from './layout/SiteNav';
import Home from './views/Home';
import Products from './views/Products';

function App() {
  const theme = useContext(ThemeContext)

  return (
    <div className={theme.theme}>
      <SiteNav />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/products" Component={Products} />
      </Routes>
    </div>
  )
}

export default App
