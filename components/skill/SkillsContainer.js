import Skill from './Skill'

export default function SkillsContainer() {
    return (
        <div className="flex flex-col items-center container mx-auto px-4">
            <div className="relative flex justify-center text-white mb-4">
                <h2 className="font-bold text-lg text-center uppercase">My Skills</h2>
                <div className="absolute bottom-0 transform translate-y-1 w-16 h-1 bg-orange-500"></div>
            </div>
            <div className="w-full flex flex-col space-y-8">
                <Skill 
                    skillImg="/img/UI Vector.svg"
                    skillName="UI Design"
                    skillDesc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, ducimus?"
                />
                <Skill 
                    skillImg="/img/App.svg"
                    skillName="Front-end Development"
                    skillDesc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, ducimus?"
                />
                <Skill 
                    skillImg="/img/SQL.svg"
                    skillName="SQL & Restful API Design"
                    skillDesc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, ducimus?"
                />
            </div>
        </div>
    )    
}