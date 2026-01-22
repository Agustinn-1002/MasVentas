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
         <nav className="navbarContein my-7 sticky top-7  ">
            <div className="shadow-lg bg-white opacity-80 rounded-4xl lg:container mx-auto flex justify-between items-center lg:px-10 lg:py-3 relative z-50">
                <a href="#Inicio">
                    <Image src={MasVentasLogo} alt="sss" className="" width={160} height={300} />
                </a>
                <div onClick={() => setNavActive(!navActive)} className="hamburger">
                    <AiOutlineMenu />
                </div>
                <div className={navActive ? "activeNav" : "disabledNav"}>
                    <div className='nav-links lg:space-x-8 space-y-3 lg:space-y-0'>
                        <button onClick={() => setNavActive(!navActive)}>X</button>
                        {
                            navLinks.map(i=>(
                                <a key={i.id} className="text-decoration-none" href={i.url} onClick={() => setNavActive(false)}>{i.label}</a>
                            ))
                        }
                        
                    </div>
                </div>
                <div className={navActive ? "activeInput" : "disabledInput"}>
                    <input className="bg-neutral-700 lg:px-6 lg:w-60 lg:py-2 rounded-4xl text-white text-sm" type="text" name="" id="" placeholder="Buscar..." />
                </div>
                <div onClick={() => setNavActive(false)} className={navActive ? "disableNavActive" : "disableNavDisable"}></div>
            </div>
        </nav>
    )
}