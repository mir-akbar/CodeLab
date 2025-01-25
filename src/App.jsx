import './App.css'
import Dashboard from './pages/Dashboard'
import LandingPage from './pages/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {/* <Dashboard /> */}
    </Router>
  )
}

export default App
