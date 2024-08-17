'use client'
import useAuth from '@/Hooks/useAuth';
import Logo from '@/Shared/Logo';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const Page = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const { signIn } = useAuth();

    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Signed In",
                    showConfirmButton: false,
                    timer: 1500,
                });
                reset();
                router.push('/');
            })
            .catch(err => {
                // Handle error
                console.error(err);
            });
    };

    return (
        <div className='h-screen flex items-center justify-center bg-white md:px-0 px-6'>
            <div className='w-full max-w-md bg-white rounded-[20px] border border-[#E0E0E0]'>
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <div className='w-3/4'>
                        <Logo />
                    </div>
                    <h2 className='text-base font-normal mt-6 mb-10 nunito'>Welcome back. Please enter your details</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#5C6272] font-normal text-base nunito">Email/User name</span>
                        </label>
                        <input
                            type="email"
                            placeholder="emailaddress@gmail.com"
                            className="input input-bordered rounded-[10px] bg-[#FAFAFB] border border-[#5C6272]"
                            {...register('email', { required: 'Email is required' })}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#5C6272] font-normal text-base nunito">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            className="input input-bordered rounded-[10px] bg-[#FAFAFB] border border-[#5C6272]"
                            {...register('password', { required: 'Password is required' })}
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control w-full mx-auto">
                        <button type="submit" className="btn rounded-[10px] btn-primary bg-primary text-white">Login</button>
                        <label className="label mt-2">
                            <span className='text-[#AEAEAE] text-base nunito font-normal'>
                                Don’t have an account?
                                <Link href="/register" className="label-text-alt link link-hover underline text-base"> SignUp</Link>
                            </span>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;
