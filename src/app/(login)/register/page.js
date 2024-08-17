'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import TickCircle from "@/ui/TickCircle";
import useAuth from '@/Hooks/useAuth';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { redirect } from 'next/navigation';
import { usStates } from '@/js/states';

const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { signUp, updateUserProfile } = useAuth();

    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        const confirmPassword = data.confirmPassword;
        if (password === confirmPassword) {
            signUp(email, password)
                .then(res => {
                    const user = res.user;
                    updateUserProfile(data.companyName)
                        .then(() => {
                            fetch('http://localhost:5000/user', {
                                method: 'POST',
                                headers: { 'content-Type': 'application/json' },
                                body: JSON.stringify({
                                    userId: user.uid,
                                    ...data
                                })
                            })
                                .then(res => {
                                    console.log(res);
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "Signed Up",
                                        showConfirmButton: false,
                                        timer: 1500,
                                    });
                                    redirect('/')
                                    // reset();
                                })
                        })
                })
                .catch(error => {
                    console.error(error);
                });
        }
    };

    return (
        <div className="md:h-screen login lg:px-16 max-w-screen-2xl mx-auto md:py-0 py-10">
            <div className="flex md:flex-row flex-col h-full items-start justify-center">
                <div className="md:w-[40%] w-full h-full flex flex-col">
                    <div className="my-auto">
                        <p className="text-primary mb-6 -mt-5 text-xl pl-8">Join now! No credit card needed.</p>
                        <div className="h-full flex flex-col px-8 py-6">
                            <div className='text-left'>
                                <div className='mt-2'>
                                    <span className='text-4xl font-bold'>$0</span>
                                    <span className='text-primary font-semibold text-xs'>/year</span>
                                </div>
                                <p className='text-green-500 text-xl mt-6'>Free</p>
                            </div>
                            <ul className='mt-6 space-y-3 text-left text-xs'>
                                <li className='flex gap-2 items-center'>
                                    <TickCircle className="" />
                                    <span className='text-left w-fit text-sm font-medium'>View 1 cleaning opportunity per 30 days.</span>
                                </li>
                                <li className='flex gap-2 items-center'>
                                    <TickCircle className="" />
                                    <span className='text-left w-fit text-sm font-medium'>Search/view 5 decision makers per search.</span>
                                </li>
                                <li className='flex gap-2 items-center'>
                                    <TickCircle className="" />
                                    <span className='text-left w-fit text-sm font-medium'>Cleaning opportunities sent to your inbox.</span>
                                </li>
                                <li className='flex gap-2 items-center'>
                                    <TickCircle className="" />
                                    <span className='text-left w-fit text-sm font-medium'>Cleaning contract calculators</span>
                                </li>
                                <li className='flex gap-2 items-center'>
                                    <TickCircle className="" />
                                    <span className='text-left w-fit text-sm font-medium'>Create 1 Lead List with up to 45 total leads.</span>
                                </li>
                                <li className='flex gap-2 items-center'>
                                    <TickCircle className="" />
                                    <span className='text-left w-fit text-sm font-medium'>Store & manage up to 3 cleaning opportunities/solicitations.</span>
                                </li>
                                <li className='flex gap-2 items-center'>
                                    <TickCircle className="" />
                                    <span className='text-left w-fit text-sm font-medium'>Post up to 3 solicitations.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="md:w-[60%] w-full h-full flex flex-col">
                    <form className="w-full md:p-8 p-4 md:my-auto" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="" className="text-2xl text-blue-400 font-semibold">Create an account</label>
                        <div className="grid md:grid-cols-2 md:grid-rows-3 grid-cols-1 gap-6">
                            <div className="form-control">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-base text-primary">Company Name</span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="SparkleClean Solutions"
                                        className="input input-bordered w-full"
                                        {...register('companyName', { required: 'Company Name is required' })}
                                    />
                                    {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName.message}</p>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-base text-primary">E-Mail Address</span>
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="contact@sparklecleansolutions.com"
                                        className="input input-bordered w-full"
                                        {...register('email', { required: 'E-Mail Address is required' })}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-base text-primary">Service State</span>
                                    </div>
                                    <select
                                        className="select text-primary text-base select-bordered w-full"
                                        {...register('serviceState', { required: 'Service State is required' })}
                                    >
                                        <option disabled selected>Pick Your State</option>
                                        {
                                            usStates.map((state, index) => <option key={index} value={state}>{state}</option>)
                                        }
                                    </select>
                                    {errors.serviceState && <p className="text-red-500 text-sm">{errors.serviceState.message}</p>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-base text-primary">What cities do you service?</span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="New York City"
                                        className="input input-bordered w-full"
                                        {...register('serviceCities', { required: 'Service Cities are required' })}
                                    />
                                    {errors.serviceCities && <p className="text-red-500 text-sm">{errors.serviceCities.message}</p>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-base text-primary">Password</span>
                                    </div>
                                    <input
                                        type="password"
                                        placeholder="password"
                                        className="input input-bordered w-full"
                                        {...register('password', { required: 'Password is required' })}
                                    />
                                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-base">Confirm Password</span>
                                    </div>
                                    <input
                                        type="password"
                                        placeholder="confirm password"
                                        className="input input-bordered w-full"
                                        {...register('confirmPassword', { required: 'Confirm Password is required' })}
                                    />
                                    {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
                                </label>
                            </div>
                        </div>
                        <input type="submit" className="btn btn-outline text-green-600 w-full text-xl mt-6" value="Sign Up!" />
                        <a href={'/login'}><p className="text-center mt-6 cursor-pointer">Already have an account?</p></a>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
