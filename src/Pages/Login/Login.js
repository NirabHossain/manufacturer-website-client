import React from 'react';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";

import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, userEmail, loading, errorEmail] = useSignInWithEmailAndPassword(auth);

    let signInError = "";
    let from = location.state?.from?.pathname || "/";


    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    }

    if (loadingGoogle || loading) {
        return <Loading />
    }
    if (errorEmail || errorGoogle) {
        signInError = <p className='text-neutral'>{errorGoogle?.message || errorEmail.message}</p>
    }

    if(userGoogle || userEmail)navigate(from, { replace: true });



    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-gradient-to-r from-secondary to-primary text-primary-content">
                <div className="card-body">
                    <h2 className="text-2xl text-center font-bold text-white">Please Sign In</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>


                        {/* Email field */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'Provide a Valid Email'
                                    }
                                })}
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                <span className="label-text">
                                    {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email?.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email?.message}</span>}
                                </span>
                            </label>
                        </div>


                        {/* Password field */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Provide a password with 6 length'
                                    }
                                })}
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                <span className="label-text">
                                    {errors.password?.type === 'required' && <span className='text-red-500'>{errors.password?.message}</span>}
                                    {errors.password?.type === 'pattern' && <span className='text-red-500'>{errors.password?.message}</span>}
                                </span>
                            </label>
                        </div>
                        {signInError}
                        <input type="submit" value="Login" className='btn btn-accent w-full max-w-xs' />
                    </form>
                    <p>New here? <Link to="/signup" className='text-white'> Create a new Account</Link></p>

                    <div className='divider text-white font-bold'>OR</div>

                    <button className="btn btn-outline " onClick={() => signInWithGoogle()}>Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;