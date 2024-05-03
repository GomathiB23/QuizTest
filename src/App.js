import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import MainPage from './MainPage';

function App() {
  
  return (
    <div>
       <HomePage />
    
        <Routes>
        <Route path="/MainPage" element={<MainPage />} />
        </Routes>
    
    </div>
  );
}

export default App;
