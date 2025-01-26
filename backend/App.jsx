// src/App.jsx
import React from 'react';
import LoginPage from './pages/LoginPage';
import CollaborationPanel from './components/CollaborationPanel';

const App = () => {
  return (
    <div>
      <LoginPage />
      <CollaborationPanel />
    </div>
  );
};

export default App;
