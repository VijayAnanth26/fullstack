import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    termsAccepted: false
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    termsAccepted: ''
  });

  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: '' });
  };

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setFormData({ ...formData, [id]: checked });
    setErrors({ ...errors, [id]: '' });
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
    }
    if (formData.email.trim() === '' || !formData.email.includes('@')) {
      newErrors.email = 'Valid email is required';
    }
    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required';
    }
    if (formData.repeatPassword !== formData.password) {
      newErrors.repeatPassword = 'Passwords do not match';
    }
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = 'You must accept the terms and conditions';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Registration successful:', formData);

    // Redirect to the login page after successful registration
    // Assuming the login page is '/login'
    navigate('/');
  };

  return (
    <MDBContainer fluid>
      <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' id='name' type='text' className='w-100' onChange={handleInputChange} />
                <div className="text-danger">{errors.name}</div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' id='email' type='email' onChange={handleInputChange} />
                <div className="text-danger">{errors.email}</div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='password' type='password' onChange={handleInputChange} />
                <div className="text-danger">{errors.password}</div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Repeat your password' id='repeatPassword' type='password' onChange={handleInputChange} />
                <div className="text-danger">{errors.repeatPassword}</div>
              </div>

              <div className='mb-4'>
                <MDBCheckbox name='termsAccepted' id='termsAccepted' label='Accept all the terms and conditions' onChange={handleCheckboxChange} />
                <div className="text-danger">{errors.termsAccepted}</div>
              </div>

              <MDBBtn className='mb-4' size='lg' onClick={handleSubmit}>
                Register
              </MDBBtn>
            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='' fluid/>
            </MDBCol>

            <div className="d-flex flex-row align-items-center justify-content-center">
              <p className="lead fw-normal mb-0 me-3">Sign in with</p>

              <MDBBtn floating size='md' tag='a' className='me-2'>
                <MDBIcon fab icon='facebook-f' />
              </MDBBtn>

              <MDBBtn floating size='md' tag='a' className='me-2'>
                <MDBIcon fab icon='twitter' />
              </MDBBtn>

              <MDBBtn floating size='md' tag='a' className='me-2'>
                <MDBIcon fab icon='linkedin-in' />
              </MDBBtn>
            </div>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Register;
