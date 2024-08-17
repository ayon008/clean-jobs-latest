'use client'
import { usStates } from "@/js/states";
import PageTitle from "@/Shared/PageTitle";
import CustomFileInput from "@/ui/InputButton";
import { useState } from "react";

const Page = () => {

    const [count, setCount] = useState(0);
    const [arr, setArr] = useState([]);

    const handleArr = () => {
        setCount(count + 1);
        if (count < 3) {
            setArr([...arr, <>
                <div className="form-control relative">
                    <label className="label absolute bg-white left-[2%] -top-[50%]">
                        <span className="label-text text-primary font-normal text-base poppins">Social Media</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your social media link"
                        className="input input-bordered rounded-[10px] bg-white border border-[#5C6272]"
                    />
                </div>
            </>]);
        }
    };

    const [serviceCount, setServiceCount] = useState(0)
    const [serviceState, setServiceState] = useState([]);
    const [serviceCityArr, setServiceCityArr] = useState([]);

    const handleState = () => {
        setServiceCount(serviceCount + 1);
        if (serviceCount < 3) {
            setServiceState([...serviceState, <>
                <div className="form-control relative">
                    <label className="label absolute bg-white left-[2%] -top-[50%]">
                        <span className="label-text text-primary font-normal text-base poppins">Service State</span>
                    </label>
                    <select
                        className="select select-bordered rounded-[10px] bg-white border border-[#5C6272]"
                    >
                        <option className="text-[#666968] poppins text-lg" selected disabled>Pick your service state</option>
                        {
                            usStates.map(state => {
                                return (
                                    <option key={state} className="text-[#666968] poppins text-lg" value={state}>{state}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </>]);
            setServiceCityArr([...serviceCityArr, <>
                <div className="form-control relative">
                    <label className="label absolute bg-white left-[2%] -top-[50%]">
                        <span className="label-text text-primary font-normal text-base poppins">Service City</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your service city"
                        className="input input-bordered rounded-[10px] bg-white border border-[#5C6272]"
                    />
                </div>
            </>]);
        }
    }


    return (
        <div className="py-40 2xl:pt-60 px-10">
            <PageTitle heading={'Profile'} subHeading={'Lorem ipsum dolor sit amet cons ectetur. Id aenean in a est.'} />
            <form className="mt-20">
                <div className="flex items-start gap-20">
                    <div className="w-1/2 flex flex-col gap-y-10">
                        <div className="form-control relative w-full">
                            <label className="label absolute bg-white left-[2%] -top-[50%]">
                                <span className="label-text text-primary font-normal text-base poppins">Company Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your company name"
                                className="input input-bordered rounded-[10px] bg-white border border-[#5C6272]"
                            />
                        </div>
                        <div className="form-control relative w-full">
                            <label className="label absolute bg-white left-[2%] -top-[50%]">
                                <span className="label-text text-primary font-normal text-base poppins">Company Mail</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your business email address"
                                className="input input-bordered rounded-[10px] bg-white border border-[#5C6272]"
                            />
                        </div>
                        <div className="form-control relative">
                            <label className="label absolute bg-white left-[2%] -top-[50%]">
                                <span className="label-text text-primary font-normal text-base poppins">Company Website</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your company website"
                                className="input input-bordered rounded-[10px] bg-white border border-[#5C6272]"
                            />
                        </div>
                        <div className="form-control relative">
                            <label className="label absolute bg-white left-[2%] -top-[50%]">
                                <span className="label-text text-primary font-normal text-base poppins">Company Logo</span>
                            </label>
                            <CustomFileInput label={'Select a logo to upload'} bg={'bg-white'} width={'w-full'} />
                        </div>
                        <div className="form-control relative">
                            <label className="label absolute bg-white left-[2%] -top-[50%]">
                                <span className="label-text text-primary font-normal text-base poppins">Service State</span>
                            </label>
                            <select
                                className="select select-bordered rounded-[10px] bg-white border border-[#5C6272]"
                            >
                                <option className="text-[#666968] poppins text-lg" selected disabled>Pick your service state</option>
                                {
                                    usStates.map(state => {
                                        return (
                                            <option key={state} className="text-[#666968] poppins text-lg" value={state}>{state}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        {
                            serviceState.map(s => {
                                return (
                                    <>
                                        {s}
                                    </>
                                )
                            })
                        }
                        <div className="flex items-center gap-5">
                            <p className="text-primary poppins font-normal text-lg">Add more Service State</p>
                            <svg onClick={() => handleState()} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                <path d="M21.1587 15.5743V25.8634M26.3032 20.7188H16.0141M36.5923 20.7188C36.5923 22.7456 36.1931 24.7525 35.4175 26.625C34.6419 28.4975 33.5051 30.1989 32.0719 31.6321C30.6388 33.0652 28.9374 34.2021 27.0649 34.9777C25.1924 35.7533 23.1854 36.1525 21.1587 36.1525C19.1319 36.1525 17.125 35.7533 15.2525 34.9777C13.38 34.2021 11.6786 33.0652 10.2454 31.6321C8.81227 30.1989 7.67544 28.4975 6.89982 26.625C6.12421 24.7525 5.72501 22.7456 5.72501 20.7188C5.72501 16.6256 7.35105 12.6999 10.2454 9.80557C13.1398 6.9112 17.0654 5.28516 21.1587 5.28516C25.2519 5.28516 29.1775 6.9112 32.0719 9.80557C34.9663 12.6999 36.5923 16.6256 36.5923 20.7188Z" stroke="#878787" strokeWidth="2.57228" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="form-control relative">
                            <label className="label absolute bg-white left-[2%] -top-[50%]">
                                <span className="label-text text-primary font-normal text-base poppins">Enter Your Service City</span>
                            </label>
                            <input
                                type="text"
                                placeholder="New York City"
                                className="input input-bordered rounded-[10px] bg-white border border-[#5C6272]"
                            />
                        </div>
                        {
                            serviceCityArr.map(s => {
                                return (
                                    <>
                                        {s}
                                    </>
                                )
                            })
                        }
                        <div className="form-control relative">
                            <label className="label absolute bg-white left-[2%] -top-[50%]">
                                <span className="label-text text-primary font-normal text-base poppins">Years in Business</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Enter your experience in years"
                                className="input input-bordered rounded-[10px] bg-white border border-[#5C6272]"
                            />
                        </div>
                        <div className="form-control relative">
                            <label className="label absolute bg-white left-[2%] -top-[50%]">
                                <span className="label-text text-primary font-normal text-base poppins">Number of Employee amount</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Enter employee amount"
                                className="input input-bordered rounded-[10px] bg-white border border-[#5C6272]"
                            />
                        </div>
                    </div>
                    {/*  */}
                    <div className="w-1/2 flex flex-col gap-y-10">
                        <div className="form-control relative w-full">
                            <label className="label absolute bg-white left-[2%] -top-[50%]">
                                <span className="label-text text-primary font-normal text-base poppins">Main Contact</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered rounded-[10px] bg-white border border-[#5C6272]"
                            />
                        </div>
                        <div className="form-control relative">
                            <label className="label absolute bg-white left-[2%] -top-[50%]">
                                <span className="label-text text-primary font-normal text-base poppins">Phone Number</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your phone number"
                                className="input input-bordered rounded-[10px] bg-white border border-[#5C6272]"
                            />
                        </div>
                        <div className="form-control relative">
                            <label className="label absolute bg-white left-[2%] -top-[50%]">
                                <span className="label-text text-primary font-normal text-base poppins">Social Media</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your social media link"
                                className="input input-bordered rounded-[10px] bg-white border border-[#5C6272]"
                            />
                        </div>
                        {
                            arr.map(r => {
                                return (
                                    <>
                                        {r}
                                    </>
                                )
                            })
                        }
                        <div className="flex items-center gap-5">
                            <p className="text-primary poppins font-normal text-lg">Add more Social Media</p>
                            <svg onClick={() => handleArr()} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                <path d="M21.1587 15.5743V25.8634M26.3032 20.7188H16.0141M36.5923 20.7188C36.5923 22.7456 36.1931 24.7525 35.4175 26.625C34.6419 28.4975 33.5051 30.1989 32.0719 31.6321C30.6388 33.0652 28.9374 34.2021 27.0649 34.9777C25.1924 35.7533 23.1854 36.1525 21.1587 36.1525C19.1319 36.1525 17.125 35.7533 15.2525 34.9777C13.38 34.2021 11.6786 33.0652 10.2454 31.6321C8.81227 30.1989 7.67544 28.4975 6.89982 26.625C6.12421 24.7525 5.72501 22.7456 5.72501 20.7188C5.72501 16.6256 7.35105 12.6999 10.2454 9.80557C13.1398 6.9112 17.0654 5.28516 21.1587 5.28516C25.2519 5.28516 29.1775 6.9112 32.0719 9.80557C34.9663 12.6999 36.5923 16.6256 36.5923 20.7188Z" stroke="#878787" strokeWidth="2.57228" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="form-control relative">
                            <label className="label absolute bg-white left-[2%] -top-[8%]">
                                <span className="label-text text-primary font-normal text-base poppins">Company Details</span>
                            </label>
                            <textarea
                                placeholder="Bio"
                                rows={8}
                                className="textarea textarea-bordered textarea-md w-full rounded-[10px] bg-white border border-[#5C6272] resize-none"></textarea>
                        </div>

                    </div>
                </div>
                <div className="w-fit mx-auto mt-10">
                    <button className="btn bg-primary font-semibold text-white text-lg poppins px-10 rounded-[22px]">Update my profile</button>
                </div>
            </form>
        </div>
    );
};

export default Page;