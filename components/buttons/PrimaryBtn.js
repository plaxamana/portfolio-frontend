import Link from 'next/link'

export default function PrimaryBtn({ text, link }) {
    return(
        <button className="block bg-blue-500 text-white py-3 px-6 font-medium">
            <Link href={link}>
                <a>{text}</a>
            </Link>
        </button>
    )
}