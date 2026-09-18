'use client'

import "./style.css"
import {navLinks, contactInfo} from '@/constant/constant'
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MasVentasLogo from '@/public/MasVentasLogo.png'
import Image from "next/image";
import Link from "next/link";


export const NavBar = () => {

    const [navActive, setNavActive] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])


    return (
         <nav className="navbarContein fixed lg:top-5">
            <div className={`nav-contain py-3 md:m-auto md:rounded-4xl md:px-5 transition-shadow duration-300 ${scrolled ? "shadow-2xl" : "shadow-md"}`}>
                <Link href="/" className="ml-5 transition-transform duration-300 hover:scale-105">
                    <Image src={MasVentasLogo} alt="MasVentas" className="" width={160} height={300} />
                </Link>
                <div onClick={() => setNavActive(!navActive)} className="hamburger transition-transform duration-300 active:scale-90">
                    <AiOutlineMenu />
                </div>
                <div className={navActive ? "activeNav" : "disabledNav"}>
                    <div className='nav-links space-x-6'>
                        <button onClick={() => setNavActive(!navActive)}>X</button>
                        {
                            navLinks.map(i=>(
                                <Link key={i.id} className="nav-link text-decoration-none" href={i.url} onClick={() => setNavActive(false)}>{i.label}</Link>
                            ))
                        }

                    </div>
                </div>
                    <div className={navActive ? "activeInput" : "disabledInput"}>
                        <div className="max-sm:mr-10">
                        <a
                            href={`https://wa.me/${contactInfo.phoneWhatsapp}?text=Hola%20quiero%20más%20información`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-neutral-700 px-3 lg:px-6 lg:w-60 py-2 rounded-4xl text-white text-base transition-all duration-300 hover:scale-105 hover:bg-neutral-900 hover:shadow-lg active:scale-95"
                        >Contactanos</a>
                        </div>
                    </div>
                <div onClick={() => setNavActive(false)} className={navActive ? "disableNavActive" : "disableNavDisable"}></div>
            </div>
        </nav>
    )
}