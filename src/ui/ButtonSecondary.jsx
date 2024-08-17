import Link from 'next/link';
import React from 'react';

const ButtonSecondary = ({ href, label }) => {
    return (
        <Link href={href}><button className="btn bg-primary text-white rounded-lg px-10 text-base inter font-bold">{label}</button></Link>
    );
};

export default ButtonSecondary;