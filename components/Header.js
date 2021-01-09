import Link from 'next/link'

export default function Header() {
    return (
        <header className="container mx-auto p-4">
            <div className="flex justify-between">
                <div className="font-bold">Philip Laxamana</div>
                <nav>
                    <div className="w-6" id="menu">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
    </svg>
                    </div>
                    <ul className="hidden">
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="#work"><a>My Work</a></Link></li>
                        <li><Link href="#skills"><a>My Skills</a></Link></li>
                        <li><Link href="#"><a>Blog</a></Link></li>
                        <li><Link href="#contact"><a>Contact</a></Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}