import axios from 'axios';

const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (validatePasswords()) {
    try {
      const response = await axios.post('/api/signup', formData);
      console.log('Signup successful:', response.data);
      // Optionally store the JWT token and redirect
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error during sign up:', error);
    }
  }
};
