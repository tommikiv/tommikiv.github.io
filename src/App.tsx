import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './routes/Home';
import { Github, SunMoon } from 'lucide-react';

function App() {
  const [theme, setTheme] = React.useState('dark');

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Router>
      <div className="app-header">
        <h2 className="title">Tommi Kivikangas</h2>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button className="github-button"><Github size={20} />GitHub</button>
          <button className="theme-button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}><SunMoon size={20} /></button>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
