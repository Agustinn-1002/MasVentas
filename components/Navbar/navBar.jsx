'use client'

import "./style.css"
import {navLinks} from '@/constant/constant'
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export const NavBar = () => {

    const [navActive, setNavActive] = useState(false)


    return (
         <nav className="navbarContein">
            <div className="container-md nav-contain">
                <a href="#Inicio">
                    <img src='' alt="" className="logo" />
                </a>
                <div onClick={() => setNavActive(!navActive)} className="hamburger">
                    <AiOutlineMenu />
                </div>
                <div className={navActive ? "activeNav" : "disabledNav"}>
                    <div className='nav-links'>
                        <button onClick={() => setNavActive(!navActive)}>X</button>
                        {
                            navLinks.map(i=>(
                                <a key={i.id} className="text-decoration-none text-white" href={i.url} onClick={() => setNavActive(false)}>{i.label}</a>
                            ))
                        }
                    </div>
                </div>
                <div onClick={() => setNavActive(false)} className={navActive ? "disableNavActive" : "disableNavDisable"}></div>

            </div>
        </nav>
    )
}