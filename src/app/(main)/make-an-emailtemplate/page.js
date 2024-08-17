import SectionTitles from "@/ui/SectionTitles";
import Link from "next/link";

const page = () => {
    return (
        <div className="pt-40 pb-20 px-10 h-screen flex flex-col">
            <div className="my-auto">
                <SectionTitles heading={'You dont have any email templates.'} />
                <div className="w-fit mt-10 mx-auto">
                    <Link href={'/email-templates'}>
                        <button className="btn bg-primary text-white">Make an Email Template</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default page;