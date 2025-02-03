import './App.css'
import CodeWorkspace from './pages/CodeWorkspace'
import LandingPage from './pages/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import VerificationPage from './pages/VerificationPage'
// import { Navigate } from 'react-router-dom'
// import { isAuthenticated } from '@/utils/auth'



// function App() {

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignUpPage />} />
//         <Route
//           path="/workspace"
//           element={isAuthenticated() ? <CodeWorkspace /> : <Navigate to="/login" />}
//         />
//         <Route path="/verify" element={<VerificationPage />} />
//       </Routes>
//       {/* <CodeWorkspace /> */}
//     </Router>
//   )
// }

// export default App

// import { useState, useEffect } from 'react';
// import { Navigate } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
// import { isAuthenticated } from '@/utils/auth';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/workspace"
          element={
            <PrivateRoute>
              <CodeWorkspace />
            </PrivateRoute>
          }
        />
        <Route path="/verify" element={<VerificationPage />} />
      </Routes>
    </Router>
  );
}

export default App;