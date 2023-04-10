// Importing important files 
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importing components
import Navbar from './components/Navbar';

// Importing pages
import Home from './pages/Home';
import Credits from './pages/Credits';

export default function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/credits" element={<Credits />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}
