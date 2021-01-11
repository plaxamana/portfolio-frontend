import PrimaryBtn from '../buttons/PrimaryBtn'
import SecondaryBtn from '../buttons/SecondaryBtn'

export default function Project({ type, projectName, description, primaryLink, secondaryLink, imageSrc, imageDesc, flipped }) {

    const orderFirst = { order: -9999 }
    const orderLast = { order: 9999 }

    return (

        <div className="flex flex-col items-center my-12 text-center space-y-10 md:mb-24">
            <div className="md:flex md:items-center md:justify-between">
                {/* Project container */}
                <div className={`${flipped ? 'order-last' : 'order-first' }  mb-8 md:flex md:flex-col md:text-left `} >
                    
                    <div className="mb-4 md:mb-8">
                        <p className="uppercase font-bold tracking-widest-lg text-orange-500 mb-2">{type}</p>
                        <p className="font-bold mb-4">{projectName}</p>
                        <p className="leading-loose md:max-w-md">{description}</p>
                        
                    </div>

                    {/* button container */}
                    <div className="flex flex-col w-full md:flex-row">
                        <PrimaryBtn 
                            text="Visit Site" 
                            outsideLink={primaryLink}
                        />
                        <SecondaryBtn 
                            text="View Source Code" 
                            outsideLink={secondaryLink}
                        />
                    </div>
                </div>
                {/* end project container */}

                {/* Image container */}
                
                <a 
                    href={primaryLink} 
                    className={`${flipped ? 'order-first' : 'order-last' } block rounded-2xl shadow-lg overflow-hidden object-cover w-full h-48 md:w-1/2 md:h-3/4`}
                    
                >
                    <img 
                        src={imageSrc}
                        alt={imageDesc}
                        className=""
                    />
                </a>
               
                
            </div>
        </div>
    )
}