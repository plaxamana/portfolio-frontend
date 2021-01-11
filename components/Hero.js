import PrimaryBtn from '../components/buttons/PrimaryBtn'
import SecondaryBtn from '../components/buttons/SecondaryBtn'

export default function Hero() {
    return(
        <div className="container mx-auto p-4 md:p-16">
            <div className="md:flex md:justify-between md:items-center">
                <div className="md:flex-auto">
                    <div className="mt-20 mb-8">
                        <div className="relative mb-6">
                            <div className="absolute top-0 left-0 transform -translate-x-10 -translate-y-2 bg-blue-900 w-3/4 min-w-xl h-16 shadow 
                            md:-translate-x-20 md:w-full md:h-20 md:-translate-y-4 
                            lg:-translate-x-56 xl:-translate-x-80 
                            2xl:-translate-x-96"></div>
                            <h1 className="relative text-4xl text-white md:text-5xl">Hi, I'm <strong>Philip</strong></h1>
                        </div>
                        <p className="leading-loose md:max-w-lg">
                            I'm an aspiring front-end developer based in Toronto, ON Canada.  I love all things
                            front-end development and UI Design.  I have a passion for creating beautifully crafted
                            web experiences and love dabbling in javascript.
                        </p>
                    </div>

                    {/* Button Container */}
                    <div className="flex flex-col w-full md:flex-row md:max-w-max md:space-x-4">
                        <PrimaryBtn text="Contact Me" link="#contact" />
                        <SecondaryBtn text="View My Resume" outsideLink="https://google.com"/>
                    </div>
                </div>

                {/* Hero image */}
                <div className="flex justify-center md:flex-auto">
                    <img 
                        src="/img/hero-img.svg" 
                        alt="developer on laptop coding"
                        className="w-full md:max-w-lg"
                    />
                </div>
            </div>
        </div>
    )
}