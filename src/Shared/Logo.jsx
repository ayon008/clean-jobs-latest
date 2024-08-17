import Image from 'next/image';
import logo from "../../public/assets/Vector.png";
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href="/" className="btn btn-ghost">
            <Image src={logo} alt="logo" className="w-[25px] h-[40px]" />
            <div className="text-left">
                <span className="md:text-lg text-xs font-bold">
                    <span className="text-primary">Clean</span>Jobs
                </span>
                <p className="md:text-xs text-[8px] text-secondary font-normal">Clean, Green, Reliable</p>
            </div>
        </Link>
    );
};

export default Logo;