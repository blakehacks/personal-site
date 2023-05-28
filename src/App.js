import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AboutMe from './AboutMe';
import Bookshelf from './Bookshelf';
import Contact from './Contact';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/books" element={<Bookshelf />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        Blake Maczka
      </header>
      <div className="App-body">
        <Divider className="top-divider"/>
        <div className="link-container">
            <Link to="/about-me">About Me</Link>
            <Link to="/books">Bookshelf</Link>
            <Link to="/contact">Contact</Link>
        </div>
        <Divider className="bottom-divider"/>
      </div>
    </div>
  );
}

export default App;
