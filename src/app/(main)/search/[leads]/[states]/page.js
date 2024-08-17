import Dot from "@/ui/Dot";
import FireIcon from "@/ui/FireIcon";
import Info from "@/ui/Info";
import MapMarker from "@/ui/MapMarker";
import Offline from "@/ui/Offline";
import RedDot from "@/ui/RedDot";
import getLeadByState from "@/lib/getLeadByState";
import getLeadData from "@/lib/getLeadList";
import Image from "next/image";
import Link from "next/link";
import { FaArrowDown, FaSearch } from "react-icons/fa";


export async function generateStaticParams() {
    const exclusive = await getLeadData("exclusive-leads");
    const layups = await getLeadData("layups");
    const opportunities = await getLeadData("opportunities");
    const exclusiveParams = exclusive.map(e => {
        return (
            { leads: 'exclusive-leads', states: e.job_details.location.state }
        )
    })
    const layupsParams = layups.map(l => {
        return (
            { leads: 'layups', states: l.job_details.location.state }
        )
    })

    const opportunitiesParams = opportunities.map(o => {
        return (
            { leads: 'opportunities', states: o.job_details.location.state }
        )
    })

    console.log(...exclusiveParams, ...opportunitiesParams, ...layupsParams);

    return [
        ...exclusiveParams, ...opportunitiesParams, ...layupsParams
    ]

}

const page = async ({ params }) => {
    const { leads, states } = params;
    console.log(leads, states);
    const data = await getLeadByState(leads, states);
    console.log(data);

    return (
        <div className="pt-40 pb-20 px-10">
            <div>
                <div className="flex items-center gap-4 justify-center">
                    <h4 className="text-xl inter font-medium text-center">Cleaning opportunities in {params.states}</h4>
                    <p className="text-[#6941C6] inter text-sm font-medium pt-[3px] px-[10px] bg-[#F9F5FF] rounded-[18px]">240 leads</p>
                </div>
                <p className="text-[#667085] inter font-normal text-base text-center mt-2">Opportunites can range from city/state, construcion clean ups, airbnb cleanings, sub contracts, and more. The process of providing a quote varies for each opportunity, and contact information is available for reaching out to the respective contacts in every opportunity</p>
            </div>
            <div className="w-1/2 mx-auto  mt-9">
                <div className="flex items-start gap-2">
                    <input id="search" type="text" placeholder={`Search cities near you`} className="input input-bordered bg-white w-[75%] h-[60px] rounded-[10px] border border-[#D0D5DD] shadow-lg" />
                    <button className="btn bg-primary text-white flex items-center h-[60px] w[20%] rounded-[10px]">
                        <FaSearch size={'1rem'} />
                        <span className="inter text-base font-medium">Search</span>
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto mt-6">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-[#FCFCFD]">
                            <th className="text-[#667085] font-medium text-sm inter">Leads</th>
                            <th className="text-[#667085] font-medium text-sm inter">Location</th>
                            <th className="text-[#667085] font-medium text-sm inter">Opportunity Type</th>
                            <th className="flex items-center gap-1 justify-center text-[#667085] font-medium text-sm inter">
                                <span>Date</span>
                                <FaArrowDown />
                            </th>
                            <th className="text-[#667085] font-medium text-sm inter">Status</th>
                            <th className="text-[#667085] font-medium text-sm inter">View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(d => {
                                const { status, job_details, _id } = d;
                                const { location, scope, type, date_posted } = job_details;
                                console.log(location);

                                return (
                                    <tr key={d._id}>
                                        <td>
                                            <div className="flex items-center gap-3 ">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        {/* <Image
                                                            src={"https://img.daisyui.com/images/profile/demo/2@94.webp"}
                                                            alt="Avatar Tailwind CSS Component" /> */}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{scope}</div>
                                                    <div className="text-sm opacity-50">{type}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center gap-4">
                                                <MapMarker />
                                                <div>
                                                    <h4 className="inter font-normal text-lg">{location.city}</h4>
                                                    <p className="text-[#72777A]">{location.state}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="text-[#175CD3] bg-[#EFF8FF]  rounded-[18px]  inter text-sm font-medium pt-[3px] px-[10px]">Standard Opportunity </p>
                                        </td>
                                        <td className="">
                                            <p className="  text-[#667085] inter text-base font-normal">{date_posted}</p>
                                        </td>
                                        <td>
                                            <div className="flex items-center bg-[#F2F4F7] rounded-[20px] py-[6px] pl-[10px] pr-[20px]  ">
                                                {
                                                    status.toLowerCase() === 'offline' &&
                                                    <>
                                                        <Offline />
                                                        <p className="text-[#344054]
                                     inter text-sm font-medium">Offline</p>
                                                    </> || status.toLowerCase() === 'sold' && <>
                                                        <RedDot />
                                                        <p className="text-red-600
                                     inter text-sm font-medium">Sold</p>
                                                    </> || status.toLowerCase() === 'open' && <>
                                                        <Dot />
                                                        <p className="text-[#027A48]
                                     inter text-sm font-medium">Available</p>
                                                    </>
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <div className="  cursor-pointer">
                                                <Link href={`${states}/${_id}`}>
                                                    <Info />
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default page;