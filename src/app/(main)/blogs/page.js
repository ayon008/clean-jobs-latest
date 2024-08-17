import Image from 'next/image';
import image from '../../../../public/assets/e73b8a25012b43969565404f2fbb8bed.jpg'
import dp from '../../../../public/assets/Ellipse 146.png'
import Link from 'next/link';

const page = () => {
    return (
        <div className="pt-40 pb-20 px-10">
            <h1 className="text-2xl font-bold inter">Stories, News, and Insights for Business Growth</h1>
            <p className="poppins text-sm font-medium mt-3">A thoughtfully curated blog featuring stories, news, and insights to help you grow and enhance your cleaning service business.</p>
            <div className='grid grid-cols-4 gap-6 mt-10'>
                <div className="card p-3 shadow-xl">
                    <figure>
                        <Image src={image} alt='' className='h-auto w-full' />
                    </figure>
                    <div className="card-body p-0 mt-3">
                        <h2 className="card-title inter text-base font-semibold">Lorem ipsum dolor sit</h2>
                        <hr className='h-[2px]' />
                        <div className='flex items-center gap-2'>
                            <Image src={dp} className='w-[30px] h-auto' alt='' />
                            <h5 className='text-xs font-bold inter'>Joanna Wellick</h5>
                        </div>
                        <p className='inter text-xs font-normal text-[#6C757D]'>June 28, 2018</p>
                        <p className='text-[#6C757D] font-normal inter text-xs'>Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. </p>
                        <div className="card-actions">
                            <button className="btn w-full rounded-lg bg-primary text-white"><Link href={'blogs/1'}>View post</Link></button>
                        </div>
                    </div>
                </div>
                <div className="card p-3 shadow-xl">
                    <figure>
                        <Image src={image} alt='' className='h-auto w-full' />
                    </figure>
                    <div className="card-body p-0 mt-3">
                        <h2 className="card-title inter text-base font-semibold">Lorem ipsum dolor sit</h2>
                        <hr className='h-[2px]' />
                        <div className='flex items-center gap-2'>
                            <Image src={dp} className='w-[30px] h-auto' alt='' />
                            <h5 className='text-xs font-bold inter'>Joanna Wellick</h5>
                        </div>
                        <p className='inter text-xs font-normal text-[#6C757D]'>June 28, 2018</p>
                        <p className='text-[#6C757D] font-normal inter text-xs'>Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. </p>
                        <div className="card-actions">
                            <button className="btn w-full rounded-lg bg-primary text-white"><Link href={'/blogs/id'}>View post</Link></button>
                        </div>
                    </div>
                </div>
                <div className="card p-3 shadow-xl">
                    <figure>
                        <Image src={image} alt='' className='h-auto w-full' />
                    </figure>
                    <div className="card-body p-0 mt-3">
                        <h2 className="card-title inter text-base font-semibold">Lorem ipsum dolor sit</h2>
                        <hr className='h-[2px]' />
                        <div className='flex items-center gap-2'>
                            <Image src={dp} className='w-[30px] h-auto' alt='' />
                            <h5 className='text-xs font-bold inter'>Joanna Wellick</h5>
                        </div>
                        <p className='inter text-xs font-normal text-[#6C757D]'>June 28, 2018</p>
                        <p className='text-[#6C757D] font-normal inter text-xs'>Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. </p>
                        <div className="card-actions">
                            <button className="btn w-full rounded-lg bg-primary text-white">View post</button>
                        </div>
                    </div>
                </div>
                <div className="card p-3 shadow-xl">
                    <figure>
                        <Image src={image} alt='' className='h-auto w-full' />
                    </figure>
                    <div className="card-body p-0 mt-3">
                        <h2 className="card-title inter text-base font-semibold">Lorem ipsum dolor sit</h2>
                        <hr className='h-[2px]' />
                        <div className='flex items-center gap-2'>
                            <Image src={dp} className='w-[30px] h-auto' alt='' />
                            <h5 className='text-xs font-bold inter'>Joanna Wellick</h5>
                        </div>
                        <p className='inter text-xs font-normal text-[#6C757D]'>June 28, 2018</p>
                        <p className='text-[#6C757D] font-normal inter text-xs'>Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. </p>
                        <div className="card-actions">
                            <button className="btn w-full rounded-lg bg-primary text-white">View post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;