import React from 'react';
import PropTypes from 'prop-types';
import SignInForm from '../components/signin/SignInForm'

const SignIn = props => {
    return (
        <div className="container schedule-reservation">
            <SignInForm></SignInForm>
        </div>
    );
};

SignIn.propTypes = {
    prop: PropTypes.string
};

export default SignIn;