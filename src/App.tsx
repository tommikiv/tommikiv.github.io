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
          <a href="#home" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: document.getElementById('projects')?.offsetTop, behavior: 'smooth' }); }}>Projects</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: document.getElementById('contact')?.offsetTop, behavior: 'smooth' }); }}>Contact</a>
          <button className="github-button" onClick={() => window.open('https://github.com/tommikiv', '_blank')}><Github size={20} />GitHub</button>
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
