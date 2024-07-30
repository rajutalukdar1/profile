import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../hooks/useToken';
import './Login.css'

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    // const [data, setData] = useState("");
    const { logIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('')
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);

            })
            .catch(error => {
                console.error(error.message);
                setLoginError(error.message);
            })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 border p-7'>
                <h2 className='text-xl text-center font-bold'>Login Now Place !!</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div>
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email"
                            {...register("email", {
                                required: 'Email Address is required'
                            })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div>
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: 'Password must required',
                                minLength: { value: 6, message: 'password must be 6 character' }
                            })} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <label className="label"><span className="label-text">Forget Password?</span></label>
                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <small className='text-center '><p>New to Doctors Portal?<Link className='text-primary' to='/signup'>Create new accoun</Link></p></small>
                <div className='divider'>OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;