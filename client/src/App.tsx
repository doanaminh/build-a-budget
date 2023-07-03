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
import Glossary from './pages/Glossary';
import Learn from './pages/Learn';
import LearnBudget from './pages/Learn-Budget';
import LearnSavingsEF from './pages/Learn-Savings-EF';
import LearnEmployerIntro from './pages/Learn-Employer-Intro';
import LearnDebt from './pages/Learn-Debt';
import About from './pages/About';
import LearnIra from './pages/Learn-Ira';
import LearnMaxRetirement from './pages/Learn-Max-Retirement';
import LearnLongTermGoals from './pages/Learn-Long-Term-Goals';

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
            <Route path='/glossary' element={<Glossary />} />
            <Route path='/learn' element={<Learn />} />
            <Route path='/learn-budget' element={<LearnBudget />} />
            <Route path='/learn-savings-ef' element={<LearnSavingsEF />} />
            <Route path='/learn-employer-intro' element={<LearnEmployerIntro />} />
            <Route path='/learn-debt' element={<LearnDebt />} />
            <Route path='/learn-ira' element={<LearnIra />} />
            <Route path='/learn-max-retirement' element={<LearnMaxRetirement />} />
            <Route path='/learn-long-term-goals' element={<LearnLongTermGoals />} />
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}
