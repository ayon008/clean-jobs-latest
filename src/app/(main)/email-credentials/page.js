'use client'
import { useForm } from "react-hook-form";
import Time from "@/ui/Time";
import PageTitle from "@/Shared/PageTitle";
import { FaArrowRight } from "react-icons/fa";

const Page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission logic here
    };

    return (
        <div className="flex gap-20 items-center pb-20 pt-40 px-10">
            <div className="w-1/2">
                <PageTitle
                    heading={"Email Credentials"}
                    subHeading={
                        "Please enter your email credentials to integrate your email with us."
                    }
                />
                <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-10">
                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base poppins">Email Provider</span>
                        </label>
                        <select
                            {...register('emailProvider', { required: 'Email provider is required' })}
                            className="select select-bordered rounded-[10px] bg-white border border-[#5C6272]"
                        >
                            <option className="text-[#666968] poppins text-lg" selected disabled>Pick your email provider</option>
                            <option className="text-[#666968] poppins text-lg" value="gmail">Gmail</option>
                            <option className="text-[#666968] poppins text-lg" value="yahoo">Yahoo</option>
                            <option className="text-[#666968] poppins text-lg" value="outlook">Outlook</option>
                            <option className="text-[#666968] poppins text-lg" value="icloud">iCloud</option>
                            <option className="text-[#666968] poppins text-lg" value="aol">AOL</option>
                            <option className="text-[#666968] poppins text-lg" value="zoho">Zoho</option>
                            <option className="text-[#666968] poppins text-lg" value="mail">Mail.com</option>
                            <option className="text-[#666968] poppins text-lg" value="protonmail">ProtonMail</option>
                            <option className="text-[#666968] poppins text-lg" value="yandex">Yandex</option>
                            <option className="text-[#666968] poppins text-lg" value="gmx">GMX</option>
                        </select>
                        {errors.emailProvider && (
                            <span className="text-red-500">{errors.emailProvider.message}</span>
                        )}
                    </div>
                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base poppins">Pick a Port</span>
                        </label>
                        <select
                            {...register('port', { required: 'Port is required' })}
                            className="select select-bordered rounded-[10px] bg-white border border-[#5C6272]"
                        >
                            <option selected disabled className="text-[#666968] poppins text-lg">Pick a Port</option>
                            <option value="465" className="text-[#666968] poppins text-lg">465</option>
                            <option value="587" className="text-[#666968] poppins text-lg">587</option>
                        </select>
                        {errors.port && (
                            <span className="text-red-500">{errors.port.message}</span>
                        )}
                    </div>
                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base poppins">SMTP Security</span>
                        </label>
                        <select
                            {...register('security', { required: 'SMTP Security is required' })}
                            className="select select-bordered rounded-[10px] bg-white border border-[#5C6272]"
                        >
                            <option selected disabled className="text-[#666968] poppins text-lg">Pick an SMTP Security</option>
                            <option value="SSL" className="text-[#666968] poppins text-lg">SSL</option>
                            <option value="TLS" className="text-[#666968] poppins text-lg">TLS</option>
                            <option value="STARTTLS" className="text-[#666968] poppins text-lg">STARTTLS</option>
                        </select>
                        {errors.security && (
                            <span className="text-red-500">{errors.security.message}</span>
                        )}
                    </div>
                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base poppins">Email Address</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your business email address"
                            {...register('email', { required: 'Email address is required' })}
                            className="input input-bordered rounded-[10px] bg-white border border-[#5C6272]"
                        />
                        {errors.email && (
                            <span className="text-red-500">{errors.email.message}</span>
                        )}
                    </div>
                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base poppins">App Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your app password"
                            {...register('password', { required: 'Password is required' })}
                            className="input input-bordered rounded-[10px] bg-white border border-[#5C6272]"
                        />
                        {errors.password && (
                            <span className="text-red-500">{errors.password.message}</span>
                        )}
                    </div>
                    <div className="form-control relative">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-primary flex items-center gap-2 justify-center w-full rounded-xl py-3 font-medium text-xl"
                        >
                            <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
                            <FaArrowRight />
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-1/2">
                <Time />
            </div>
        </div>
    );
};

export default Page;
