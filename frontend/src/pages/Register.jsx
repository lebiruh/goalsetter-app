import React, {useState, useEffect} from 'react';
import { FaUser } from 'react-icons/fa';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email:'',
    password: '',
    confirmPassword: ''
  })

  const {name, email, password, confirmPassword} = formData;

  const onChange = (e) => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Create an account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="text" className='form-control' id='name' name='name' value={name} placeholder='Enter your name' onChange={onChange} />
          </div>
          <div className="form-group">
            <input type="email" className='form-control' id='email' name='email' value={email} placeholder='Enter your email' onChange={onChange} />
          </div>
          <div className="form-group">
            <input type="password" className='form-control' id='password' name='password' value={password} placeholder='Enter your password' onChange={onChange} />
          </div>
          <div className="form-group">
            <input type="password" className='form-control' id='password' name='confirmPassword' value={confirmPassword} placeholder='Confirm Password' onChange={onChange} />
          </div>
          <div className="form-group">
           <button type='submit' className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register