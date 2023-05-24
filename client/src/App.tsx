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
import Learn from './pages/Learn';
import LearnBudget from './pages/Learn-Budget';
import LearnSavingsEF from './pages/Learn-Savings-EF';

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
            <Route path='/learn' element={<Learn />} />
            <Route path='/learn-budget' element={<LearnBudget />} />
            <Route path='/learn-savings-ef' element={<LearnSavingsEF />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}
