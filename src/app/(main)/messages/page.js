import Image from 'next/image';
import image from '@/../public/assets/55024593_9264820 1.png';
import { FaArrowRight } from 'react-icons/fa';
const page = () => {
    // border-4 border-[#246532]
    return (
        <div className="pt-[80px]">
            <div className='grid message h-[600px]'>
                <div className='px-10 py-20 flex flex-col border-t-2 border-r-2 border-[#246532]'>
                    <h3 className='poppins text-3xl font-semibold'>Message</h3>
                    <label className="input input-bordered flex items-center gap-2 bg-[#F8F8F8] mt-6 rounded-lg">
                        <input type="text" className="grow bg-[#F8F8F8]" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                    <Image src={image} alt="" className='my-auto' />
                </div>
                <div className='w-full h-full border-t-2 border-[#246532]'>
                    <div className='p-10 grid grid-cols-2 h-full'>
                        <div className='flex flex-col h-full'>
                            <Image src={image} alt="" className='m-auto' />
                            <label className="input input-bordered flex items-center gap-2 bg-[#F8F8F8] mt-auto rounded-[90px] border-2 border-[#A4DB74]">
                                <input type="text" className="grow bg-[#F8F8F8]" placeholder="Enter something" />
                                <div className='bg-[#A4DB74] p-2 rounded-full'>
                                    <FaArrowRight className=' text-white' />
                                </div>
                            </label>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default page;