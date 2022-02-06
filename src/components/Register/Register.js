import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" />
                    <br />
                    <input type="password" name="" id="" placeholder="your Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an Account? <Link to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;