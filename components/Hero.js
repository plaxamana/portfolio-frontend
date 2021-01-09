import PrimaryBtn from '../components/buttons/PrimaryBtn'
import SecondaryBtn from '../components/buttons/SecondaryBtn'

export default function Hero() {
    return(
        <div className="container mx-auto p-4">
            <div className="mt-20 mb-4">
                <div className="relative mb-6">
                    <div className="absolute top-0 left-0 transform -translate-x-8 -translate-y-2 bg-blue-900 w-3/4 h-16 shadow"></div>
                    <h1 className="relative text-4xl text-white">Hi, I'm <strong>Philip</strong></h1>
                </div>
                <p className="leading-loose">
                    I'm an aspiring front-end developer based in Toronto, ON Canada.  I love all things
                    front-end development and UI Design.  I have a passion for creating beautifully crafted
                    web experiences and love dabbling in javascript.
                </p>
            </div>

            {/* Button Container */}
            <div className="flex flex-col">
                <PrimaryBtn text="Contact Me" link="#contact"/>
                <SecondaryBtn text="View My Resume" link="#contact"/>
            </div>

            {/* Hero image */}
            <div className="flex justify-center">
                <img 
                    src="/img/hero-img.svg" 
                    alt="developer on laptop coding"
                    className="w-full"
                />
            </div>
        </div>
    )
}