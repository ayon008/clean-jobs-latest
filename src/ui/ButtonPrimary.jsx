import Link from 'next/link';
import React from 'react';

const ButtonPrimary = ({ href, label }) => {
    return (
        <Link href={href}>
            <button className='btn text-white text-base px-6 bg-primary font-semibold poppins rounded-[35px]'>
                {label}
            </button>
        </Link>
    );
};

export default ButtonPrimary;