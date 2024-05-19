import { DarkThemeToggle } from "flowbite-react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/login";
import HomePage from "./pages/Home";
import TestingPage from "./pages/Test";
import AddUserPage from "./pages/AddUser";
import UserSchedulePage from './pages/UserSchedule';
import CalendarPage from "./pages/CalendarPage";

function App() {
  return (
    
    <Router>
        <Routes>
        <Route path="/" element={<LoginPage></LoginPage>} />

          <Route path="/login" element={<LoginPage></LoginPage>} />
          <Route path="/home" element={<HomePage></HomePage>} />
          <Route path="/test" element={<TestingPage></TestingPage>} />
          <Route path="/addUser" element={<AddUserPage></AddUserPage>} />
          <Route path="/userSchedule" element={<UserSchedulePage></UserSchedulePage>} />
          <Route path="/calendar" element={<CalendarPage></CalendarPage>} />


        </Routes>
    </Router>
  );
}

export default App;
