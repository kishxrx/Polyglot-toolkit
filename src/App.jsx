import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Translator from './components/Translator';
import RandomString from './components/RandomString';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <main className="container mx-auto p-8">
          <Routes>
            <Route path="/" element={<Translator />} />
            <Route path="/random" element={<RandomString />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;