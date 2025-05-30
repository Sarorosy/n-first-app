import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './header';
import Home from './Home';
import LoginForm from './pages/LoginForm';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

function App() {
    

    
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
