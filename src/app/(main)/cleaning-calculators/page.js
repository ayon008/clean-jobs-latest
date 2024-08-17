import PageTitle from "@/Shared/PageTitle";
import Image from "next/image";
import image from '@/../public/assets/Frame (1).svg'
import { FaArrowRight } from "react-icons/fa";
import { usStates } from "@/js/states";
const page = () => {
    return (
        <div className="pb-20 pt-40 px-10">
            <PageTitle heading={'How much should I pay my cleaners?'} subHeading={'Pick the employee type, add your average pay rate, your city, and your state to see how you measure up.'} />
            <div className="mt-20 flex justify-between items-center">
                <form className="w-1/2 space-y-10">
                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base poppins">Type</span>
                        </label>
                        <select
                            className="select select-bordered rounded-[10px] bg-white border border-[#5C6272]">
                            <option className="text-[#666968] poppins text-lg" selected disabled>Pick a type</option>
                            <option className="text-[#666968] poppins text-lg" value="Full Time">Full Time</option>
                            <option className="text-[#666968] poppins text-lg" value="Part Time">Part Time</option>
                        </select>
                    </div>
                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base poppins">Pay rate</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Enter company/Decision maker name"
                            className="input input-bordered rounded-[10px] bg-white border border-[#5C6272]"
                        />
                    </div>
                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base poppins">State</span>
                        </label>
                        <select
                            className="select select-bordered rounded-[10px] bg-white border border-[#5C6272]">
                            <option className="text-[#666968] poppins text-lg" selected disabled>Select a sate</option>
                            {
                                usStates.map(state => {
                                    return (
                                        <option key={state} className="text-[#666968] poppins text-lg" value="Company Name">{state}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base poppins">City</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter city name"
                            className="input input-bordered rounded-[10px] bg-white border border-[#5C6272]"
                        />
                    </div>
                    <div className="form-control relative">
                        <button className="bg-primary text-white w-3/4 btn rounded-[16px] poppins text-lg font-semibold h-[60px]">Check Pay Rate <FaArrowRight /></button>
                    </div>
                </form>
                <div className="w-1/2">
                    <Image src={image} alt='pay-rate-checker' className='w-1/2 h-auto mx-auto' />
                    <p className='text-center nunito font-semibold text-4xl mt-6'>Compare Confidently</p>
                </div>
            </div>
        </div>
    );
};

export default page;