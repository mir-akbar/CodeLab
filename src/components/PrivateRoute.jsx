import { useEffect, useState } from 'react';
import { isAuthenticated } from '@/utils/auth';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    const [authStatus, setAuthStatus] = useState(null);
  
    useEffect(() => {
      isAuthenticated().then(setAuthStatus);
    }, []);
  
    if (authStatus === null) {
      return <div>Loading...</div>;
    }
  
    return authStatus ? children : <Navigate to="/login" replace />;
  }