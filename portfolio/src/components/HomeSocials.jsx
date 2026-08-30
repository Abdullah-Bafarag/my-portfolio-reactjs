import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const HomeSocials = () => {
    return (
        <div className='flex flex-col gap-4 text-xl'>
            <a href='https://github.com/Abdullah-Bafarag' target='_blank'><FaGithub /></a>
            <a href='https://t.me/Abdullah_Bafarag' target='_blank'><FaTelegramPlane /></a>
        </div>
    )
}

export default HomeSocials