'use client'
import useAxiosPublic from "@/Hooks/useAxiosPublic";
import GetTemplateList from "@/lib/getTemplateList";
import SectionTitles from "@/ui/SectionTitles";
import Link from "next/link";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const Page = () => {
    const data = GetTemplateList();
    const axiosPublic = useAxiosPublic()
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/email-template/${id}`)
                    .then(res => {
                        console.log(res);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })
                    .catch(error => console.log(error))
            }
        });
    }

    return (
        <div className="pt-40 pb-20 px-10">
            <SectionTitles heading={'Email Template List'} />
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-[#FCFCFD]">
                            <th className="text-[#667085] text-center font-medium text-sm inter">Template Name</th>
                            <th className="text-[#667085] text-center font-medium text-sm inter">Subject</th>
                            <th className="text-[#667085] text-center font-medium text-sm inter">Email Signature</th>
                            <th className="text-[#667085] text-center font-medium text-sm inter">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map(d => {
                                const { templateName, subject, emailSignature, _id } = d;
                                return (
                                    <tr key={d._id}>
                                        <td>
                                            <p className="text-center text-[#667085] inter text-base font-normal">{templateName}</p>
                                        </td>
                                        <td className="">
                                            <p className="text-center text-[#667085] inter text-base font-normal">{subject}</p>
                                        </td>
                                        <td className="">
                                            <p className="  text-center text-[#667085] inter text-base font-normal">{emailSignature}</p>
                                        </td>
                                        <td className="flex items-center justify-center gap-6">
                                            <button onClick={() => handleDelete(_id)} className="btn btn-outline text-red-500 w-[80px]">Delete</button>
                                            <Link href={`/email-template-list/${_id}`}>
                                                <button className="btn btn-primary bg-primary text-white w-[80px]">Edit</button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="w-fit mx-auto mt-10">
                <Link href={'/email-templates'}>
                    <button className="bg-primary text-white inter text-lg btn">Add More</button>
                </Link>
            </div>
        </div>
    );
};

export default Page;