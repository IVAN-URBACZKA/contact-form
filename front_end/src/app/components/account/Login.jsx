import { LockClosedIcon } from '@heroicons/react/solid';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Input from '../../shared/components/form-and-error-components/Input';
import { signIn } from '../../shared/redux-store/authenticationSlice';
import { isAuthenticated } from '../../shared/services/accountServices';
import { authenticate } from './../../api/backend/account';
import ErrorMessSmall from './../../shared/components/form-and-error-components/ErrorMessSmall';
import { defaulValuesLogin } from './../../shared/constants/formik-yup/default-values-form/idefaultValuesUser';
import { schemaFormLogin } from './../../shared/constants/formik-yup/yup/yupUser';
import { URL_DASHBOARD, URL_HOME } from './../../shared/constants/urls/urlConstants';

/**
 * Component Form Login
 * Use Formik to create the Form
 *
 * @param {function} submit: submit Function
 * @param {object} initialValues: the initial values of the form
 * @param {boolean} errorLog: to display or not the message of login/mdp not valid
 * @param {object} validationSchema: validation's schema of the form
 * @author Peter Mollet
 */
const FormLogin = ({ submit, errorLog }) => (
    <Formik
        initialValues={defaulValuesLogin}
        onSubmit={submit}
        validationSchema={schemaFormLogin}
    >
        <Form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
                <Field
                    type="text"
                    name="username"
                    placeholder="Login"
                    component={Input}
                    className="rounded-none rounded-t-md"
                    noError
                />
                <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    component={Input}
                    className="rounded-none rounded-b-md"
                    noError
                />
            </div>

            <div>
                <button type="submit" className="group relative btn btn-primary w-full">
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <LockClosedIcon
                            className="h-5 w-5 text-primary-dark group-hover:text-primary-light"
                            aria-hidden="true"
                        />
                    </span>
                    Sign in
                </button>
            </div>
            {errorLog && <ErrorMessSmall middle message="Login/Password incorrect(s)" />}
        </Form>
    </Formik>
);

/**
 * Component Login
 *
 * will need in props:
 *  - Submit Function
 *  - errorLog boolean
 *  - validationSchema
 *
 * See above for information
 *
 * @author Peter Mollet
 */
const Login = () => {
    const [errorLog, setErrorLog] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogin = (values) => {
        authenticate(values)
            .then((res) => {
                console.log(res)
                if (res.status === 200 && res.data.id_token) {
                    dispatch(signIn(res.data.id_token));
                    if (isAuthenticated()) history.push(URL_DASHBOARD);
                }
            })
            .catch(() => setErrorLog(true));
    };
    return (
        <div className="bg-white p-4 rounded-md shadow max-w-md w-full space-y-8 py-12 px-4 sm:px-6 lg:px-8">
            <div>
                <div className="flex justify-center">
                <h1 className='text-2xl font-extrabold text-gray-800'>ACSEO ADMIN</h1>

                </div>
                <h2 className="mt-6 text-center text-xl font-extrabold text-gray-800">
                    Sign in to your account
                </h2>
            </div>

            <hr />
            <FormLogin errorLog={errorLog} submit={handleLogin} />
        </div>
    );
};

export default Login;
