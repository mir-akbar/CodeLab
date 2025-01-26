import './App.css'
import Dashboard from './pages/Dashboard'
import LandingPage from './pages/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

function App() {

  return (
    <Router>
      {/* <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes> */}
      <Dashboard />
    </Router>
  )
}

export default App
