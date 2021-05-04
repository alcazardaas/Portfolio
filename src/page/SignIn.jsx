import React from 'react';
import PropTypes from 'prop-types';
import SignInForm from '../components/signin/SignInForm'
import data from '../DB/burndata';

const SignIn = props => {
    return (
        <div className="container schedule-reservation">
            <SignInForm users={data.USERS}></SignInForm>
        </div>
    );
};

SignIn.propTypes = {
    prop: PropTypes.string
};

export default SignIn;