import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NoStressLanding from './pages/Landing';
import PriceCalculator from './components/PriceCalculator/index';
import NotFound from './pages/NotFound';

function App() {
  return (
      <Router> {/* Router deve envolver Routes */}
        <Routes>
          <Route path="/" element={<NoStressLanding />} />
          <Route path="/recursos" element={<PriceCalculator />} />
        <Route path="*" element={<NotFound />} />
         
          
        </Routes>
      </Router>
  );
}

export default App;