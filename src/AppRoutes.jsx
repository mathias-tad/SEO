import './App.css'
import { Routes, Route } from "react-router-dom";
import Another from './pages/Another';
import Home from './pages/Home';

function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/another" element={<Another />} />
    </Routes>
  )
}

export default AppRoutes
