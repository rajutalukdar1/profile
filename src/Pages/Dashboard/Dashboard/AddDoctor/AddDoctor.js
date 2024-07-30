import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;
    // console.log(imageHostKey);
    const navigate = useNavigate();

    const { data: Specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://y-rajutalukdar1.vercel.app/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = data => {
        // console.log(data);
        const image = data.image[0];
        const fromData = new FormData();
        fromData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: fromData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }
                    fetch('https://y-rajutalukdar1.vercel.app/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`)
                            navigate('/dashboard/managedoctors')
                        })
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='w-96 p-7 border'>
            <h1>Add A Doctor</h1>

            <form onSubmit={handleSubmit(handleAddDoctor)}>
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
                    <label className="label"><span className="label-text">Specialty</span></label>
                    {/* <input type="password"
                        {...register("password", {
                            required: 'Password must required',
                            minLength: { value: 6, message: 'password must be 6 character' },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password Must Be strong && (Upper/lower/number/special Character)' }

                        })}
                        className="input input-bordered w-full max-w-xs" /> */}
                    <select
                        {...register('specialty')}
                        className="select select-accent w-full max-w-xs">
                        <option disabled selected>Dark mode or light mode?</option>
                        {
                            Specialties.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }
                        <option>Light mode</option>
                    </select>
                </div>
                {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                <div>
                    <label className="label"><span className="label-text">Image</span></label>
                    <input type="file"
                        {...register("image", {
                            required: 'Image is required'
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-5' value='Add a Doctor' type="submit" />


                {/* <div>
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </div> */}
            </form>
        </div>
    );
};

export default AddDoctor;