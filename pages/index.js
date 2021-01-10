import Header from '../components/Header'
import Hero from '../components/Hero'
import ProjectContainer from '../components/project/ProjectContainer'
import Skill from '../components/skill/Skill'
import SkillsContainer from '../components/skill/SkillsContainer'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="relative">
        <ProjectContainer />
        <div className="-z-10 absolute bottom-0 rect-clip bg-blue-900 h-64 w-full transform translate-y-40"></div>
      </div>
      <SkillsContainer />
    </div>
  )
}
