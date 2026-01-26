'use client'

import "./style.css"
import {navLinks} from '@/constant/constant'
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MasVentasLogo from '@/public/MasVentasLogo.png'
import Image from "next/image";


export const NavBar = () => {

    const [navActive, setNavActive] = useState(false)


    return (
         <nav className="navbarContein fixed lg:top-5">
            <div className="nav-contain py-3 md:m-auto md:rounded-4xl md:px-5 shadow-2xl">
                <a href="#Inicio" className="ml-5">
                    <Image src={MasVentasLogo} alt="sss" className="" width={160} height={300} />
                </a>
                <div onClick={() => setNavActive(!navActive)} className="hamburger">
                    <AiOutlineMenu />
                </div>
                <div className={navActive ? "activeNav" : "disabledNav"}>
                    <div className='nav-links space-x-6'>
                        <button onClick={() => setNavActive(!navActive)}>X</button>
                        {
                            navLinks.map(i=>(
                                <a key={i.id} className="text-decoration-none" href={i.url} onClick={() => setNavActive(false)}>{i.label}</a>
                            ))
                        }
                        
                    </div>
                </div>
                    <div className={navActive ? "activeInput" : "disabledInput"}>
                        <div className="max-sm:mr-10">
                        <button className="bg-neutral-700 px-3 lg:px-6 lg:w-60 py-2 rounded-4xl text-white text-sm" >Contactanos</button>
                        </div>
                    </div>
                <div onClick={() => setNavActive(false)} className={navActive ? "disableNavActive" : "disableNavDisable"}></div>
            </div>
        </nav>
    )
}