// Importing important files 
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importing components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Importing pages
import Home from './pages/Home';
import Credits from './pages/Credits';
import BudgetCalculator from './pages/BudgetCalculator';

export default function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/credits" element={<Credits />} />
            <Route path='/budget-calculator' element={<BudgetCalculator />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}
