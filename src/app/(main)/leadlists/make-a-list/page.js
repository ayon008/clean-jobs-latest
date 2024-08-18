'use client'
import { useForm } from "react-hook-form";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { usStates } from "@/js/states";
import useAxiosPublic from "@/Hooks/useAxiosPublic";
import GetTemplateList from "@/lib/getTemplateList";
import useAuth from "@/Hooks/useAuth";
import { useRouter } from "next/navigation";

const Page = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();

    // UID
    const { user } = useAuth();

    // Routing
    const router = useRouter();

    // Upload Lead List
    const onSubmit = (data) => {
        console.log(data);
        axiosPublic.post('/leadList', { ...data, uid: user?.uid })
            .then(res => {
                if (res.data.insertedId) {
                    console.log(res);
                    router.push('/leadlists');
                }
            })
            .catch(err => console.log(err.message));
    };

    // Email Template List
    const emailTemplate = GetTemplateList();
    console.log(emailTemplate);


    return (
        <div className="px-10 pb-20 pt-40">
            <h2 className="text-5xl poppins font-black text-center">Make a lead list</h2>
            <div className="mt-20">
                <form className="w-1/2 space-y-10 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base poppins">List Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Ex. Best Leads List"
                            className="input input-bordered rounded-[10px] bg-white border border-[#5C6272]"
                            {...register("listName", { required: "List Name is required" })}
                        />
                        {errors.listName && <p className="text-red-500">{errors.listName.message}</p>}
                    </div>
                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base poppins">Pick An Email Template</span>
                        </label>
                        <select
                            className="select select-bordered rounded-[10px] bg-white border border-[#5C6272]"
                            {...register("emailTemplate")}
                        >
                            <option className="text-[#666968] poppins text-lg" selected disabled value={''}>Pick a type</option>
                            {
                                emailTemplate?.map((e, i) => {
                                    return (
                                        <option key={i} className="text-[#666968] poppins text-lg" value={e._id}>
                                            {e?.templateName}
                                        </option>
                                    )
                                })
                            }
                        </select>
                        {errors.emailTemplate && <p className="text-red-500">{errors.emailTemplate.message}</p>}
                    </div>
                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base poppins">State</span>
                        </label>
                        <select
                            className="select select-bordered rounded-[10px] bg-white border border-[#5C6272]"
                            {...register("state", { required: "State is required" })}
                        >
                            <option className="text-[#666968] poppins text-lg" selected disabled>Select a state</option>
                            {usStates.map(state => (
                                <option key={state} className="text-[#666968] poppins text-lg" value={state}>{state}</option>
                            ))}
                        </select>
                        {errors.state && <p className="text-red-500">{errors.state.message}</p>}
                    </div>
                    <div className="form-control relative">
                        <button
                            type="submit"
                            className="bg-primary text-white w-1/2 mx-auto btn rounded-[16px] poppins text-lg font-semibold h-[60px]"
                        >
                            <span>Make It</span>
                            <FaArrowRight />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;
