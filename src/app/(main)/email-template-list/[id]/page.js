'use client';
import { useForm } from 'react-hook-form';
import PageTitle from "@/Shared/PageTitle";
import CustomFileInput from "@/ui/InputButton";
import { FaArrowRight } from "react-icons/fa";
import useAuth from '@/Hooks/useAuth';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Page = ({ params }) => {
    const id = params.id;

    const { user } = useAuth()
    const uid = user?.uid;

    const axiosPublic = useAxiosPublic();
    const router = useRouter();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        axiosPublic.put(`/email-template/${id}`, { ...data })
            .then(res => {
                console.log(res);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Added",
                    showConfirmButton: false,
                    timer: 1500,
                });
                router.push('/email-template-list');
                reset();
            })

    };

    const [data, setData] = useState('')
    const { templateName, subject, body, emailSignature, websiteLink, file } = data;
    useEffect(() => {
        axiosPublic.get(`/email-template/${uid}/${id}`)
            .then(res => {
                setData(res.data);
            })
            .catch(err => console.log(err))
    }, [axiosPublic, uid, id])


    return (
        <div className="pt-40 pb-20 px-10">
            <PageTitle heading={"Email Template"} subHeading={"Email templates streamline communication with consistent, professional messaging"} />
            <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
                <div className="space-y-6">
                    <div className="form-control">
                        <label className="label pl-0">
                            <span className="label-text text-primary poppins font-normal text-xl nunito">Template Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter template name"
                            defaultValue={templateName}
                            className="input input-bordered rounded-[10px] bg-[#FAFAFB] border border-[#5C6272] w-[500px]"
                            {...register('templateName', { required: 'Template Name is required' })}
                        />
                        {errors.templateName && <span className="text-red-500">{errors.templateName.message}</span>}
                    </div>
                    <div className="form-control">
                        <label className="label pl-0">
                            <span className="label-text text-primary poppins font-normal text-xl nunito">Subject</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={subject}
                            placeholder="Enter subject"
                            className="input input-bordered rounded-[10px] bg-[#FAFAFB] border border-[#5C6272] w-[750px]"
                            {...register('subject', { required: 'Subject is required' })}
                        />
                        {errors.subject && <span className="text-red-500">{errors.subject.message}</span>}
                    </div>
                    <div className="form-control">
                        <label className="label pl-0">
                            <span className="label-text text-primary poppins font-normal text-xl nunito">Body</span>
                        </label>
                        <textarea
                            defaultValue={body}
                            rows="10"
                            type="text"
                            placeholder="Enter body text"
                            className="textarea textarea-bordered rounded-[10px] bg-[#FAFAFB] border border-[#5C6272] w-[850px]"
                            {...register('body', { required: 'Body text is required' })}
                        />
                        {errors.body && <span className="text-red-500">{errors.body.message}</span>}
                    </div>
                    <div className="form-control">
                        <label className="label pl-0">
                            <span className="label-text text-primary poppins font-normal text-xl nunito">Email Signature</span>
                        </label>
                        <input
                            defaultValue={emailSignature}
                            type="text"
                            placeholder="Add your name, position, and company name"
                            className="input input-bordered rounded-[10px] bg-[#FAFAFB] border border-[#5C6272] w-[600px]"
                            {...register('emailSignature', { required: 'Email Signature is required' })}
                        />
                        {errors.emailSignature && <span className="text-red-500">{errors.emailSignature.message}</span>}
                    </div>
                    <div className="form-control">
                        <label className="label pl-0">
                            <span className="label-text text-primary poppins font-normal text-xl nunito">Website Link</span>
                        </label>
                        <input
                            type="url" // Changed to type="url" for URL-specific input behavior
                            defaultValue={websiteLink}
                            placeholder="Enter your website URL"
                            className="input input-bordered rounded-[10px] bg-[#FAFAFB] border border-[#5C6272] w-[600px]"
                            {...register('websiteLink', {
                                required: 'Website link is required',
                                pattern: {
                                    value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                                    message: 'Please enter a valid URL',
                                },
                            })}
                        />
                        {errors.websiteLink && <span className="text-red-500">{errors.websiteLink.message}</span>}
                    </div>
                    <div className="form-control">
                        <label className="label pl-0">
                            <span className="label-text text-primary poppins font-normal text-xl nunito">Attachment</span>
                        </label>
                        <CustomFileInput {...register('file')} label={'Chose File'} bg={'bg-[#FAFAFB]'} width={'w-[500px]'} />
                    </div>
                </div>
                <div className="form-control mt-16">
                    <button
                        type="submit"
                        className="btn bg-primary text-white rounded-[22px] w-fit"
                    >
                        <span>Update email templates</span>
                        <FaArrowRight />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Page;
