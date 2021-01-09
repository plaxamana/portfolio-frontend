import Link from 'next/link'

export default function SecondaryBtn({ text, link }) {
    return (
        <button className="block py-3 px-6 font-medium">
            <Link href={link}>
                <a>{text}</a>
            </Link>
        </button>
    )
}