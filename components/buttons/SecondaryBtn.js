import Link from 'next/link'

export default function SecondaryBtn({ text, link, outsideLink }) {

    if(outsideLink !== undefined) {
        return (
            <button className="block py-2 px-6 font-medium">
                <a href={outsideLink}>{text}</a>
            </button>
        )
    } 

    return (
        <button className="block py-2 px-6 font-medium">
            <Link href={link}>
                <a>{text}</a>
            </Link>
        </button>
    )
}