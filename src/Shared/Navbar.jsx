'use client'
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useSpring, animated } from "@react-spring/web";
import Logo from "./Logo";
import { MdOutlineNotifications } from 'react-icons/md';
import useAuth from "@/Hooks/useAuth";
import Dropdown from "@/ui/Dropdown";
import Link from "next/link";
import Button from "@/ui/Button";
import GetTemplateList from "@/lib/getTemplateList";

const Navbar = () => {

    // TO_DO : Toggle Ul in mobile device

    // User Info
    const { user, logOut } = useAuth();
    const pathName = usePathname();
    const userName = user?.displayName;
    const firstLetter = user?.displayName[0];

    // Logout function
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            });
    };

    // Email Template Data for Email Template List
    const templateData = GetTemplateList();


    const renderLinks = (links) => {
        return links.map(({ href, label, subLinks, i }) => (
            <li key={i} className={subLinks ? "dropdown dropdown-hover" : ""}>
                <div
                    className={`text-sm gap-0 ${pathName.startsWith(href) && label !== 'Home' ? 'font-bold' : 'font-normal'}`}
                >
                    <span>{label}</span>
                    {subLinks && <Dropdown color={"#6E7C87"} />}
                </div>
                {subLinks && (
                    <ul className="dropdown-content menu bg-white border z-[1] px-0 py-2 rounded-lg w-80">
                        {subLinks.map(subLink => (
                            <li key={subLink.href}>
                                <Link href={subLink.href} className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">{subLink.label}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        ));
    };

    const commonLinks = [
        { href: '/about', label: 'About' },
        { href: '/other-services', label: 'Other Services' }
    ];

    const userLinks = [
        { href: '/', label: 'Home', subLinks: [{ href: '/dashboard', label: 'Dashboard' }] },
        { href: '/leadlists', label: 'List', subLinks: [{ href: '/leadlists', label: 'Lead Lists' }, { href: '/master-list', label: 'Master List' }, { href: '/solicitationsList', label: 'Solicitations List' }] },
        { href: '/blogs', label: 'Resources', subLinks: [{ href: '/blogs', label: 'Blog' }, { href: '/free-lists', label: 'Free Lists' }, { href: '/pay-rate-checker', label: 'Pay Rate Checker' }, { href: '/cleaning-calculators', label: 'Cleaning Calculators' }, { href: '/help', label: 'Help' }] },
        { href: '/profile', label: 'Company Information', subLinks: [{ href: '/profile', label: 'Profile' }, { href: '/messages', label: 'Messages' }, { href: '/email-credentials', label: 'Email Credentials' }, { href: !templateData?.length > 0 ? '/make-an-emailtemplate' : '/email-template-list', label: 'Email Templates' }, { href: '/my-subscription', label: 'My Subscription' }] },
        { href: '/search', label: 'Search', subLinks: [{ href: '/search/exclusive-leads', label: 'Exclusive Leads' }, { href: '/search/layups', label: 'LayUps (Warm leads)' }, { href: '/search/opportunities', label: 'Opportunities' }, { href: '/single-decision-maker', label: 'Single Decision Maker' }, { href: '/decision-makers', label: 'Decision Makers' }, { href: '/search/local-businesses', label: 'Local Businesses (Be Soon)' }] }
    ];

    const guestLinks = [
        { href: '/blogs', label: 'Blogs' },
        { href: '/contact', label: 'Contact' }
    ];

    const navEnds = user ? (
        <>
            <MdOutlineNotifications className="md:text-2xl text-lg" />
            <div className="flex items-center gap-2">
                <div className="md:w-[32px] relative md:h-[32px] w-[20px] h-[20px] rounded-full bg-primary text-white">
                    <span className="absolute top-1/2 right-1/2 transform -translate-y-1/2 translate-x-1/2 md:text-base text-xs font-normal">{firstLetter}</span>
                </div>
                <div className="dropdown dropdown-hover">
                    <h4 tabIndex={0} role="button" className="md:text-sm text-[8px] inter font-semibold w-fit">{userName.length < 20 ? userName : userName.slice(0, 16)}...</h4>
                    <ul tabIndex={0} className="dropdown-content menu bg-white border z-[1] md:w-52 w-40 -right-[20%] px-0 py-2 rounded-lg">
                        <li>
                            <button onClick={handleLogOut} className="text-base border-none shadow-none inter font-normal hover:bg-[#F9FAFB] rounded-none w-full">
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
                <Dropdown color={'black'} />
            </div>
        </>
    ) : (
        <>
            <Link href={'/login'}><button className="font-semibold text-xs md:text-base">Sign In</button></Link>
            <Link href={'/register'} className="btn bg-primary text-xs md:text-base md:px-6 py-0 rounded-[100px]"><span className="text-white">Get Started Free</span></Link>
        </>
    );

    const [scrolled, setScrolled] = useState(false);
    const props = useSpring({
        backgroundColor: scrolled ? '#ffffff' : 'rgba(0, 0, 0, 0)',
        boxShadow: scrolled ? '0px 8px 20px rgba(0, 0, 0, 0.2)' : '0px 0px 0px rgba(0, 0, 0, 0)'
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <animated.div style={props} className="navbar h-[60px] bg-inherit fixed inset-0 top-0 z-50 justify-between py-10">
            <div className="navbar-start w-fit">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-20 mt-3 p-2 shadow w-[340px] max-h-[60vh]">
                            <>
                                {
                                    commonLinks.map(c => {
                                        return (
                                            <li key={c}>
                                                <Link href={c.href}>{c.label}</Link>
                                            </li>
                                        )
                                    })
                                }
                                {
                                    user &&
                                    userLinks.map(u => {
                                        const { subLinks } = u;
                                        return (
                                            subLinks.map(s => {
                                                return (
                                                    <li key={s}>
                                                        <Link href={s.href}>{s.label}</Link>
                                                    </li>
                                                )
                                            })
                                        )
                                    })
                                }
                                {
                                    guestLinks.map(g => {
                                        return (
                                            <li key={g}>
                                                <Link href={g.href}>{g.label}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </>
                        </ul>
                    </div>
                </div>
                <Logo />
                <div className="hidden lg:flex 2xl:ml-12 ml-6">
                    <ul className="menu menu-horizontal px-1 text-lg text-[#252C32] inter">
                        {renderLinks(commonLinks)}
                        {user ? renderLinks(userLinks) : renderLinks(guestLinks)}
                    </ul>
                </div>
            </div>
            <div className="navbar-end lg:flex md:gap-6 gap-2 w-fit">
                {
                    pathName !== '/other-services' ?
                        navEnds
                        :
                        <>
                            <Link href={'/contact-us'}>
                                <Button />
                            </Link>
                        </>
                }
            </div>
        </animated.div>
    );
};

export default Navbar;
