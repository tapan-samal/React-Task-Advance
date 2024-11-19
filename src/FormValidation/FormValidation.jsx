import React, { useEffect, useState } from 'react'
import "./form-validation.css"

const FormValidation = () => {
    const initialValues = {username: "", mobile: "", email: "", password: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);


    const handleInputChange = (e) =>{
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateInputField(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const validateInputField = (values) => {
        const errors = {};
        const regexEmail = /^[a-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
        const regexMobile = /^\d{10}$/;
        if(!values.username){
            errors.username = "Username is required!";
        }
        if(!values.email){
            errors.email = "Email is required!";
        } else if (!regexEmail.test(values.email)){
            errors.email = "Not a valid email!";
        }
        if (!values.mobile) {
            errors.mobile = "Mobile number is required!";
        } else if (!regexMobile.test(values.mobile)) {
            errors.mobile = "Not a valid mobile number!";
        }
        if(!values.password){
            errors.password = "Password is required!";
        } else if(values.password.length < 7){
            errors.password = "Password must be more than 6 characters!";
        } else if (values.password.length > 12) {
            errors.password = "Password must be less than 12 characters!";
        }
        return errors;
    };

  return (
    <div className='form-container'>
        <h1>Form Validation</h1>
        <form className='form-element' onSubmit={handleSubmit}>
            <div className='element'>
                <label>Username</label>
                <input type="text" name='username' value={formValues.username} onChange={handleInputChange} placeholder='Username'/>
                <p>{formErrors.username}</p>
            </div>
            <div className='element'>
                <label>Mobile</label>
                <input type="text" name='mobile' value={formValues.mobile} onChange={handleInputChange} placeholder='Mobile'/>
                <p>{formErrors.mobile}</p>
            </div>
            <div className='element'>
                <label>Email</label>
                <input type="text" name='email' value={formValues.email} onChange={handleInputChange} placeholder='Email'/>
                <p>{formErrors.email}</p>
            </div>
            <div className='element'>
                <label>Password</label>
                <input type="password" name='password' value={formValues.password} onChange={handleInputChange} placeholder='Password'/>
                <p>{formErrors.password}</p>
            </div>
            <button className='submit-btn'>Submit</button>
        </form>
        {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='success'>Submitted Successfully!</div>) : (<pre>{JSON.stringify(formValues, undefined, 2)}</pre>)}
    </div>
  )
}

export default FormValidation