const handleLoginSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/api/login', {
        email: formData.email,
        password: formData.password,
      });
      console.log('Login successful:', response.data);
      // Store JWT token and redirect
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  