import MapMarker from "@/ui/MapMarker";
import image from '@/../public/assets/10768855_4503794 1.svg';
import Image from "next/image";

const page = () => {
    return (
        <div className="pb-20 pt-40 px-10">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-[#FCFCFD]">
                            <th className="text-center inter text-sm font-medium">List Name</th>
                            <th className="text-center inter text-sm font-medium">List State</th>
                            <th className="text-center inter text-sm font-medium">Pick an email template</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            {/* <th ></th> */}
                            <td className="flex items-center justify-center gap-2">
                                <div className="w-[30px] relative h-[30px] rounded-full bg-[#8BC5E5] ">
                                    <span className="absolute top-1/2 right-1/2 transform -translate-y-1/2 translate-x-1/2 text-white poppins font-medium text-base">01</span>
                                </div>
                                <span className="inter text-sm font-medium">The Best List</span>
                            </td>
                            <td>
                                <div className="flex items-center justify-center gap-2">
                                    <MapMarker /><span className="text-center inter text-sm font-medium ">Florida</span>
                                </div>
                            </td>
                            <td><p className="text-center inter text-sm font-medium ">1st email template</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="w-fit mx-auto mt-10">
                <button className="bg-primary text-white btn text-lg" disabled>Add another lead list</button>
            </div>
            <p className="my-10 text-center inter text-3xl font-normal">Sorry, you can't add another lead list. Upgrade to add more.</p>
            <div>
                <Image src={image} alt='upgrade-to-add-more-lists' className='h-auto mx-auto' />
            </div>
            <div className="w-fit mx-auto mt-10">
                <button className="bg-primary text-white btn text-lg">Upgrade Now</button>
            </div>
        </div>
    );
};

export default page;