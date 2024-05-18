import logo from './logo.svg';
import './App.css';

function App() {
  return (

    
    <Router>
        <Routes>
          <Route path="/" element={<h1>a</h1>} />
          <Route path="/about" element={<h1>b</h1>} />
          <Route path="/contact" element={<h1>c</h1>} />
        </Routes>
    </Router>
  );
}

export default App;
