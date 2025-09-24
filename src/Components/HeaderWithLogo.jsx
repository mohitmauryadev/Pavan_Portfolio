import React from 'react'
import { useState } from 'react'
import Header from './Header'
import nexovate4 from '../assets/Logos/pavanport.png'
import './Header.css'
const HeaderWithLogo = () => {



    const burger = document.querySelector('.burger');
    const toggleNavBar = () => {
        const HeadNav = document.querySelector('.HeadNav');
        HeadNav.classList.toggle('hidden');
    };

    return (
        <div className='header flex  align-middle '>
            <div className='logo '><img src={nexovate4} className='h-[200px] mt-[25px]' /></div>

            <div className="HeadNav" ><Header />
            </div>


            <div className="burger hidden w-[35px]" onClick={toggleNavBar}>
                <div className='w-full h-[3px] bg-green-400'></div>
                <div className='w-[29px] h-[3px] bg-green-400'></div>
                <div className='w-[24px] h-[3px] bg-green-400'></div>
            </div>


        </div>
    )
}

export default HeaderWithLogo
