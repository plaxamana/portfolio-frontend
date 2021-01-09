import Link from 'next/link'

export default function PrimaryBtn({ text, link, outsideLink }) {

    if(outsideLink !== undefined) {
        return (
            <button className="block bg-blue-500 text-white py-2 px-6 font-medium">
                <a href={outsideLink}>{text}</a>
            </button>
        )
    }

    return(
        <button className="block bg-blue-500 text-white py-2 px-6 font-medium">
            <Link href={link}>
                <a>{text}</a>
            </Link>
        </button>
    )
}