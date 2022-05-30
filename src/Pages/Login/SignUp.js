import React from 'react';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";

import { useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import {useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, userEmail, loading, errorEmail] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate =  useNavigate();

    let signInError = "";
    console.log(userGoogle, userEmail);


    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({displayName:data.name})
        navigate(from, { replace: true });
    }

    if (loadingGoogle || loading ||updating) {
        return <Loading />
    }
    if (errorEmail || errorGoogle || updateError) {
        signInError = <p className='text-neutral'>{errorGoogle?.message || errorEmail?.message || updateError?.message}</p>
    }



    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-gradient-to-r from-secondary to-primary text-primary-content">
                <div className="card-body">
                    <h2 className="text-2xl text-center font-bold text-white">Please Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>


                        {/* Name field */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'name is Required'
                                    },
                                    minLength: {
                                        value:5,
                                        message: 'Valid Name'
                                    }
                                })}
                                type="name"
                                placeholder="name"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                <span className="label-text">
                                    {errors.name?.type === 'required' && <span className='text-red-500'>{errors.name?.message}</span>}
                                    {errors.name?.type === 'pattern' && <span className='text-red-500'>{errors.name?.message}</span>}
                                </span>
                            </label>
                        </div>

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
                        <input type="submit" value="Sign Up" className='btn btn-accent w-full max-w-xs' />
                    </form>
                    <p>Have account? <Link to="/login" className='text-white'> Sign In</Link></p>

                    <div className='divider text-white font-bold'>OR</div>

                    <button className="btn btn-outline " onClick={() => signInWithGoogle()}>Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;