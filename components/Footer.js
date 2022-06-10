import Link from 'next/link'
import React from 'react'
import { FiGithub } from 'react-icons/fi'

const style = {
    wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex sticky bottom-0 z-50 `,
    logoText: ` ml-[0.8rem] text-white text-center font-semibold `,
    logoContainer: `ml-[50rem] flex items-center cursor-pointer`,
}

const Footer = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.logoText}>
                Made By Muhammad Hamza Faisal
            </div>
        </div>
    )
}

export default Footer