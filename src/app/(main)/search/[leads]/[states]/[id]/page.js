import Dot from "@/ui/Dot";
import FireIcon from "@/ui/FireIcon";
import RedDot from "@/ui/RedDot";
import { FaArrowRight, FaFacebookMessenger, FaPhone, FaPhoneAlt } from "react-icons/fa";
import image from '@/../public/assets/Ellipse 148.png'
import Image from "next/image";
import { MdEmail } from 'react-icons/md';
import { FaGlobe } from 'react-icons/fa';
import pImage from '@/../public/assets/primary img.jpg'
import getLeadById from "@/lib/getLeadById";
import getLeadData from "@/lib/getLeadList";


export async function generateStaticParams() {
    const exclusive = await getLeadData("exclusive-leads");
    const layups = await getLeadData("layups");
    const opportunities = await getLeadData("opportunities");

    const exclusiveParams = exclusive.map(e => {
        return { leads: 'exclusive-leads', state: e.job_details.location.state, id: e._id };
    })
    const layupsParams = layups.map(l => {
        return (
            { leads: 'layups', states: l.job_details.location.state, id: l._id }
        )
    })

    const opportunitiesParams = opportunities.map(o => {
        return (
            { leads: 'opportunities', states: o.job_details.location.state, id: o._id }
        )
    })

    return [
        ...exclusiveParams,
        ...layupsParams,
        ...opportunitiesParams
    ]
}

const page = async ({ params }) => {
    console.log(params);
    const { leads, states, id } = params;
    const data = await getLeadById(leads, states, id);
    const { status, job_details } = data;
    const { location, type, scope, frequency, facility_size, date_sold, notes, schedule } = job_details;

    return (
        <div className="pt-40 pb-20 px-10">
            <div>
                {
                    status.toLowerCase() === 'sold' &&
                    <div className="flex items-center bg-red-100 rounded-[20px] py-[3px] pl-[10px] pr-[20px] w-fit mx-auto">
                        <RedDot />
                        <p className="text-red-600
                                     inter text-sm font-medium">Sold</p>
                    </div>
                    ||
                    status.toLowerCase() === 'available' &&
                    <div className="flex items-center bg-[#ECFDF3] rounded-[20px] py-[3px] pl-[10px] pr-[20px] w-fit mx-auto">
                        <Dot />
                        <p className="text-[#027A48] inter text-sm font-medium">Available</p>
                    </div>
                }
                <div className="flex justify-center items-end">
                    <h3 className="inter text-7xl font-black text-center mt-6">{scope} <span className="inter text-3xl text-secondary font-semibold">-{frequency}</span></h3>
                    <FireIcon width={"30"} />
                </div>
                <p className="text-center text-[#585860] font-medium text-2xl mt-4">Posted 5 month ago</p>
                <div className="mt-20 grid grid-cols-3 justify-between">
                    <div>
                        <div className="flex items-center gap-2">
                            <Image src={image} alt="" className="w-[64px] h-[64px]" />
                            <div>
                                <h3 className="inter text-3xl font-bold">Zoe towne</h3>
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path d="M12 3.7334V20.9834M12 20.9834C10.528 20.9834 9.118 21.2484 7.815 21.7334M12 20.9834C13.472 20.9834 14.882 21.2484 16.185 21.7334M18.75 5.7034C16.5137 5.38951 14.2582 5.23246 12 5.2334C9.709 5.2334 7.455 5.3934 5.25 5.7034M18.75 5.7034C19.76 5.8464 20.76 6.0204 21.75 6.2234M18.75 5.7034L21.37 16.4294C21.492 16.9284 21.264 17.4574 20.781 17.6314C20.1294 17.8652 19.4423 17.9843 18.75 17.9834C18.0577 17.9843 17.3706 17.8652 16.719 17.6314C16.236 17.4574 16.008 16.9284 16.129 16.4294L18.75 5.7044V5.7034ZM5.25 5.7034C4.24 5.8464 3.24 6.0204 2.25 6.2234M5.25 5.7034L7.87 16.4294C7.992 16.9284 7.764 17.4574 7.281 17.6314C6.62943 17.8652 5.94226 17.9843 5.25 17.9834C4.55774 17.9843 3.87057 17.8652 3.219 17.6314C2.736 17.4574 2.508 16.9284 2.629 16.4294L5.25 5.7044V5.7034Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p className="poppins text-sm font-normal">Decision maker</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mt-8">
                            <button className="bg-[#000] rounded-[90px] text-white poppins text-xs font-bold w-fit px-4 py-3 btn">message</button>
                            <FaFacebookMessenger size={'2rem'} />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <FaPhoneAlt />
                            <p className="poppins text-base font-bold">+056 55 555 55</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <MdEmail />
                            <p className="poppins text-base font-bold">hello@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaGlobe />
                            <p className="poppins text-base font-bold">www.hello.com</p>
                        </div>
                    </div>
                    <div>
                        <Image src={pImage} className="" alt="" />
                    </div>
                </div>
                <div className="mt-10 grid grid-cols-3 gap-10">
                    <div className="bg-white p-12 border-4 border-[#F4F4F5] rounded-[24px]">
                        <h4 className="text-[#246532] poppins text-xs font-black px-4 py-2 w-fit bg-[#DDFFE4] rounded-[100px] mx-auto">Location</h4>
                        <p className="text-[#72777A] inter text-sm font-medium text-center mt-4">{location.city} , {location.state}</p>
                    </div>
                    <div className="bg-white p-12 border-4 border-[#F4F4F5] rounded-[24px]">
                        <h4 className="text-[#246532] poppins text-xs font-black px-4 py-2 w-fit bg-[#DDFFE4] rounded-[100px] mx-auto">Type</h4>
                        <p className="text-[#72777A] inter text-sm font-medium text-center mt-4">{type}</p>
                    </div>
                    <div className="bg-white p-12 border-4 border-[#F4F4F5] rounded-[24px]">
                        <h4 className="text-[#246532] poppins text-xs font-black px-4 py-2 w-fit bg-[#DDFFE4] rounded-[100px] mx-auto">Scope</h4>
                        <p className="text-[#72777A] inter text-sm font-medium text-center mt-4">{scope}</p>
                    </div>
                    <div className="bg-white p-12 border-4 border-[#F4F4F5] rounded-[24px]">
                        <h4 className="text-[#246532] poppins text-xs font-black px-4 py-2 w-fit bg-[#DDFFE4] rounded-[100px] mx-auto">Cleaning</h4>
                        <p className="text-[#72777A] inter text-sm font-medium text-center mt-4">Outsourced</p>
                    </div>
                    <div className="bg-white p-12 border-4 border-[#F4F4F5] rounded-[24px]">
                        <h4 className="text-[#246532] poppins text-xs font-black px-4 py-2 w-fit bg-[#DDFFE4] rounded-[100px] mx-auto">Size</h4>
                        <p className="text-[#72777A] inter text-sm font-medium text-center mt-4">Total:{facility_size?.total},Ground Floor:{facility_size?.ground_floor},Basement:{facility_size?.basement}</p>
                    </div>
                    <div className="bg-white p-12 border-4 border-[#F4F4F5] rounded-[24px]">
                        <h4 className="text-[#246532] poppins text-xs font-black px-4 py-2 w-fit bg-[#DDFFE4] rounded-[100px] mx-auto">Frequency</h4>
                        <p className="text-[#72777A] inter text-sm font-medium text-center mt-4">{frequency}</p>
                    </div>
                    <div className="bg-white p-12 border-4 border-[#F4F4F5] rounded-[24px]">
                        <h4 className="text-[#246532] poppins text-xs font-black px-4 py-2 w-fit bg-[#DDFFE4] rounded-[100px] mx-auto">Note</h4>
                        <p className="text-[#72777A] inter text-sm font-medium text-center mt-4">{notes}</p>
                    </div>
                    <div className="bg-white p-12 border-4 border-[#F4F4F5] rounded-[24px]">
                        <h4 className="text-[#246532] poppins text-xs font-black px-4 py-2 w-fit bg-[#DDFFE4] rounded-[100px] mx-auto">Posted</h4>
                        <p className="text-[#72777A] inter text-sm font-medium text-center mt-4">{date_sold}</p>
                    </div>
                </div>
                {
                    status.toLowerCase() === 'sold' ?
                        <div className="w-1/2 mx-auto mt-10">
                            <h3 className="poppins text-6xl font-semibold text-center">Oops! You missed</h3>
                            <p className="poppins text-xl font-medium text-center mt-5">Looks like you missed this one. Get an Unlimited subscription and get instant notifications when leads are posted</p>
                        </div>
                        :
                        <div className="w-1/2 mx-auto mt-10">
                            <h3 className="poppins text-6xl font-semibold text-center">Buy This Lead</h3>
                            <p className="poppins text-xl font-medium text-center mt-5">The preset walkthrough date for this exclusive lead is 1/24/2024. Walkthrough dates and times may possibly be changed after purchasing but there is no guarantee.</p>
                            <div className="w-3/4 mx-auto mt-10">
                                <button className="bg-primary flex items-center gap-2 justify-center w-full rounded-[22px] font-medium text-xl py-7 px-16">
                                    <span>Only $50</span>
                                    <FaArrowRight />
                                </button>
                                <p className="mt-5 poppins font-medium text-base text-center">Get an Unlimited subscription and get 10% off of all exclusive leads!</p>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default page;