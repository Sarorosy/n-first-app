import React, { useState } from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';





const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const defaultEmail = 'user@example.com';
  const defaultPassword = 'password123';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === defaultEmail && password === defaultPassword) {
      toast.success('Login successful!');
      localStorage.setItem("email",email);
      localStorage.setItem("password", password)
      navigate('/')
      // You can redirect or set auth state here
    } else {
      toast.error('Invalid email or password');
    }
  };


  
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className="col-md-5">
          <form>
            
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example1">Email address</label>
              <input type="email" id="form2Example1" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example2">Password</label>
              <input type="password" id="form2Example2" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div className='d-flex justify-content-between'>
              <button className="btn btn-danger btn-block me-auto" onClick={()=>{navigate("/")}}>back</button>

              <button type="button" className="btn btn-primary btn-block ms-auto" onClick={handleSubmit}>
                Sign in
              </button>
            </div>


            
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
