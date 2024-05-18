import { DarkThemeToggle } from "flowbite-react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/login";
import HomePage from "./pages/Home";

function App() {
  return (
    
    <Router>
        <Routes>
          <Route path="/login" element={<LoginPage></LoginPage>} />
          <Route path="/home" element={<HomePage></HomePage>} />
          <Route path="/contact" element={<h1>c</h1>} />
        </Routes>
    </Router>
  );
}

export default App;
