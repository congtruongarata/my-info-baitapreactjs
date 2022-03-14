
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <div id="main">
        <div id="header">
            <ul id="nav">
                <li class = "home"><Link to="/">ULTRA</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/skills">SKILLS</Link></li>
                <li><Link to="/education">EDUCATION</Link></li>
                <li><Link to="/experience">EXPERIENCE</Link></li>
                <li><Link to="/portfolio">PORTFOLIO</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>
        </div>
        <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/education" element={<Education/>} />
            <Route path="/experience" element={<Experience/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
    </div>
    
  );
}

export default App;
