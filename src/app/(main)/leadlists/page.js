'use client'
import Image from "next/image";
import ButtonPrimary from "@/ui/ButtonPrimary";
import GetLeadLists from "@/lib/getLeadLists";
import MapMarker from "@/ui/MapMarker";
import SectionTitles from "@/ui/SectionTitles";
import image from '@/../public/assets/OBJECTS.svg';
import image2 from '@/../public/assets/10768855_4503794 1.svg';

const LeadListTable = ({ leadList }) => (
    <div className="">
        <SectionTitles heading="Lead List" subHeading="A lead list helps you keep track of all the potential clients you want to connect with." />
        <div className="overflow-x-auto mt-20">
            <table className="table">
                <thead>
                    <tr className="bg-[#FCFCFD]">
                        <th className="text-center inter text-sm font-medium">List Name</th>
                        <th className="text-center inter text-sm font-medium">List State</th>
                        <th className="text-center inter text-sm font-medium">Pick an email template</th>
                        <th className="text-center inter text-sm font-medium">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {leadList.map((lead, i) => (
                        <tr key={i}>
                            <td className="flex items-center justify-center gap-2">
                                <div className="w-[30px] relative h-[30px] rounded-full bg-[#8BC5E5]">
                                    <span className="absolute top-1/2 right-1/2 transform -translate-y-1/2 translate-x-1/2 text-white poppins font-medium text-base">
                                        {i + 1}
                                    </span>
                                </div>
                                <span className="inter text-sm font-medium">{lead.listName}</span>
                            </td>
                            <td>
                                <div className="flex items-center justify-center gap-2">
                                    <MapMarker />
                                    <span className="text-center inter text-sm font-medium">{lead.state}</span>
                                </div>
                            </td>
                            {/* <td></td> */}
                            {/* <td className="text-center inter text-sm font-medium">{lead.emailTemplate}</td> */}
                            {/* <td className="w-fit mx-auto flex items-center gap-5">
                                <button className="btn btn-outline text-red-500 w-[80px]">Delete</button>
                                <button className="btn btn-primary bg-primary text-white w-[80px]">Edit</button>
                                <button className="btn btn-outline text-blue-500 w-[80px]">View</button>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="w-fit mx-auto mt-10">
            <button className="bg-primary text-white btn text-lg" disabled>Add another lead list</button>
        </div>
        <p className="my-10 text-center inter text-3xl font-normal">Sorry, you can't add another lead list. Upgrade to add more.</p>
        <Image src={image2} alt="upgrade-to-add-more-lists" className="h-auto mx-auto" />
        <div className="w-fit mx-auto mt-10">
            <ButtonPrimary href="/my-subscription" label="Upgrade Now" />
        </div>
    </div>
);

const EmptyState = () => (
    <div className="space-y-10">
        <h2 className="text-5xl poppins font-black text-center">You don't have any Lead Lists made</h2>
        <Image src={image} alt="lead-list" className="mx-auto" />
        <div className="w-fit mx-auto">
            <ButtonPrimary href="leadlists/make-a-list" label="Make a Lead List" />
        </div>
    </div>
);

const Page = () => {
    const leadList = GetLeadLists();
    console.log(leadList?.emailTemplate);

    return (
        <div className="pt-40 pb-20 px-10">
            {leadList?.length > 0 ? <LeadListTable leadList={leadList} /> : <EmptyState />}
        </div>
    );
};

export default Page;
