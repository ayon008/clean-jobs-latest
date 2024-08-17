import PageTitle from "@/Shared/PageTitle";
import { FaArrowRight } from "react-icons/fa";

const page = () => {

    const usStates = [
        "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
        "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
        "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
        "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
        "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
        "Wisconsin", "Wyoming"
    ];

    return (
        <div className="pb-20 pt-40 px-10">
            <PageTitle heading={'Decision Maker Search'} subHeading={'Verified emails have been double validated. Unverified emails are catch-all emails that may or may not work.'} />
            <div className="mt-20 flex items-center justify-between">
                <form className="w-1/2 space-y-10">
                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base poppins">Search By</span>
                        </label>
                        <select
                            className="select select-bordered rounded-[10px] bg-white border border-[#5C6272]">
                            <option className="text-[#666968] poppins text-lg" selected disabled>Company Name / First Name</option>
                            <option className="text-[#666968] poppins text-lg" value="Company Name">Company Name</option>
                            <option className="text-[#666968] poppins text-lg" value="First Name">First Name</option>
                            <option className="text-[#666968] poppins text-lg" value="Last Name">Last Name</option>
                        </select>
                    </div>
                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base poppins">Name</span>
                        </label>
                        <input
                            type="text"
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
                        <button className="bg-primary text-white w-3/4 btn rounded-[16px] poppins text-lg font-semibold h-[60px]">Search <FaArrowRight /></button>
                    </div>
                </form>
                {/* <div>
                    <Decisions />
                </div> */}
            </div>
        </div>
    );
};

export default page;