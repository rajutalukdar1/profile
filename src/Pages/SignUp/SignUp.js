import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }

    const handleSignUp = data => {
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('user created Successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data?.name, data?.email)
                        // navigate('/')
                    })
                    .catch(error => console.error(error))
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            })
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('https://y-rajutalukdar1.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('SAveUSer', data);
                setCreatedUserEmail(email);
            })
    }

    // const getUserToken = email => {
    //     fetch(`https://y-rajutalukdar1.vercel.app/jwt?email=${email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.accessToken) {
    //                 localStorage.setItem('accessToken', data.accessToken)
    //                 navigate('/');
    //             }
    //         })
    // }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 border p-7'>
                <h2 className='text-xl text-center font-bold'>Place SignUp Now !!</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div>
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text"
                            {...register("name", {
                                required: 'Name is required'
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div>
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email"
                            {...register("email", {
                                required: 'Email Address is required'
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div>
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: 'Password must required',
                                minLength: { value: 6, message: 'password must be 6 character' },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password Must Be strong && (Upper/lower/number/special Character)' }

                            })}
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    <input className='btn btn-accent w-full mt-5' value='Login' type="submit" />
                    <div>
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </div>
                </form>
                <small className='text-center '><p>Already Have An Account?<Link className='text-primary' to='/login'>Login Now</Link></p></small>
                <div className='divider'>OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;