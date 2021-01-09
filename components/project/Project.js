import PrimaryBtn from '../buttons/PrimaryBtn'
import SecondaryBtn from '../buttons/SecondaryBtn'

export default function Project({ type, projectName, description, primaryLink, secondaryLink, imageSrc, imageDesc }) {
       
    return (
        <div className="flex flex-col items-center my-8 text-center space-y-10">
            <div>
                <p className="uppercase font-bold tracking-widest text-orange-500">{type}</p>
                <p className="font-bold mb-4">{projectName}</p>
                <p className="leading-normal">{description}</p>
            </div>

            {/* button container */}
            <div className="flex flex-col w-full">
                <PrimaryBtn 
                    text="Visit Site" 
                    outsideLink={primaryLink}
                />
                <SecondaryBtn 
                    text="View Source Code" 
                    outsideLink={secondaryLink}
                />
            </div>

            {/* Image container */}
            <div>
                <img 
                    src={imageSrc}
                    alt={imageDesc}
                    className="rounded-2xl shadow-lg object-cover w-full h-48"
                />
            </div>
        </div>
    )
}