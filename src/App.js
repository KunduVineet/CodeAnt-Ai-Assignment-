import './App.css';
import Login from './components/Login';
import Repos from './components/Repos';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import CodeReview from './Pages/CodeReview';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/repos" element={<Repos />} />
          <Route path="/code-review" element={<CodeReview />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
