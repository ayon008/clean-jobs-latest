import Link from "next/link";

const Banner = () => {
    return (
        <div className="h-[639px] max-h-screen w-full banner relative">
            {/* Layer */}
            <div className="absolute inset-0 h-[600px] z-10" style={{
                backgroundImage: 'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)',
            }}></div>
            <div className="absolute top-1/2 right-1/2 transform -translate-y-1/2 translate-x-1/2 w-full text-center z-20 md:px-0 px-6 space-y-5">
                <p className="md:text-xl text-xs text-secondary nunito font-light">Connect with numerous decision-makers and receive opportunities directly in your inbox, effortlessly</p>
                <h1 className="md:text-6xl text-3xl poppins font-semibold md:leading-[80px] leading-[32px]">
                    Discover <br />
                    <span className="text-primary">Cleaning Opportunities</span><br />
                    Effortlessly.
                </h1>
                <div className="flex md:flex-row flex-col items-center gap-2 mx-auto w-fit mt-6">
                    <button className='btn bg-primary rounded-[70px] nunito font-semibold text-white border-none text-lg hover:bg-green-600 px-6'><Link href="/register">Sign Up</Link></button>
                    <p className="text-black font-semibold">No Credit Card Required</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;