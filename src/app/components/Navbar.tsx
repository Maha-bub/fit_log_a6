'use client'
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import NavButton from './NavButton';
import { usePathname } from 'next/navigation';
const Navbar = () => {
    const pathName = usePathname();
    const links =
        <>
            <li><Link href={`/`} className={`btn ${pathName === '/' ? 'bg-[#24311a] text-[#C6F602]':''} rounded-full`}>Workouts</Link></li>
            <li><Link href={`/listedcard`} className={`btn ${pathName === '/listedcard' ? 'bg-[#24311a] text-[#C6F602]':''} rounded-full`}>My Plan</Link></li>
        </>
    return (
        <div className="container mx-auto p-4  border-b border-b-slate-600">
            <div className="navbar bg-base-100 shadow-sm">
                {/* for mobile */}
                <div className="navbar-start lg:hidden">
                    <div className="dropdown">
                        <div
                            tabIndex={0} role="button" className="btn btn-ghost">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>
                </div>


                <div className='absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 lg:navbar-start'>
                    <Link href={`/`} className='flex items-center justify-center btn btn-ghost'>
                        <Image src={logo} alt={`Logo`} width={30} height={30}></Image>
                        <span className=" text-xl font-bold">FITLOG</span>
                    </Link>

                </div >


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {links}
                    </ul>
                </div>
                <NavButton></NavButton>
            </div >
        </div >

    );
};

export default Navbar;