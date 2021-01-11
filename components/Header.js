import Link from 'next/link'
import { useState, useRef } from 'react'


export default function Header() {
    const dropdownRef = useRef(null);
    const [ isActive, setIsActive ] = useState(false);
    const onClick = () => setIsActive(!isActive);

    const displayMenu = isActive ? (
        <svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
        ) : (
        <svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
        </svg>
        )
    
    const navItemStyle = isActive ? 'border-gray-200 border-b-2 w-full py-2' : null
    
    return (
        <header className="container mx-auto p-4 md:px-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex justify-between">
                    <div className="font-bold">Philip Laxamana</div>
                    <div 
                        onClick={onClick}
                        className="md:hidden cursor-pointer" 
                        id="menu-btn"
                    >
                    {displayMenu}
                    </div>
                </div>
                <nav>
                    <ul 
                        className={`${isActive ? 'block transform duration-500' : 'hidden'} mt-4 flex flex-col text-center md:flex md:flex-row md:space-x-6 md:my-auto`}
                        ref={dropdownRef}
                        id="menu"
                    >
                        <li className={`${navItemStyle} md:py-2 md:px-4`}><Link href="/"><a>Home</a></Link></li>
                        <li className={`${navItemStyle} md:py-2 md:px-4`}><Link href="#work"><a>My Work</a></Link></li>
                        <li className={`${navItemStyle} md:py-2 md:px-4`}><Link href="#skills"><a>My Skills</a></Link></li>
                        <li className={`${navItemStyle} md:py-2 md:px-4`}><Link href="#"><a>Blog</a></Link></li>
                        <li className={`${navItemStyle} md:py-2 md:px-4`}><Link href="#contact"><a>Contact</a></Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

