import Skill from './Skill'

export default function SkillsContainer() {
    return (
        <div className="flex flex-col items-center container mx-auto px-4" id="skills">
            <div className="relative flex justify-center text-white mb-4 md:mb-16">
                <h2 className="font-bold text-lg text-center uppercase md:text-2xl">My Skills</h2>
                <div className="absolute bottom-0 transform translate-y-1 w-16 h-1 bg-orange-500"></div>
            </div>
            <div className="w-full flex flex-col space-y-8 md:flex-row md:space-y-0 md:justify-between md:px-14">
                <Skill 
                    skillImg="/img/UI Vector.svg"
                    skillName="UI Design"
                    skillDesc="I specialize in UI Design.  I love using Figma for designing and prototyping"
                />
                <Skill 
                    skillImg="/img/App.svg"
                    skillName="Front-end Development"
                    skillDesc="Aside from designing, I love brining it to life using HTML, CSS and JavaScript.  I've also been keen on React development"
                />
                <Skill 
                    skillImg="/img/SQL.svg"
                    skillName="SQL & Restful API Design"
                    skillDesc="Almost every website needs to display data somehow. Covered from SQL to NoSQL."
                />
            </div>
        </div>
    )    
}