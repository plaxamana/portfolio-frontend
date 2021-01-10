import Header from '../components/Header'
import Hero from '../components/Hero'
import ProjectContainer from '../components/project/ProjectContainer'
import SkillsContainer from '../components/skill/SkillsContainer'
import ContactForm from '../components/forms/Contact'
import Footer from '../components/Footer'

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
      <ContactForm />
      <Footer />
    </div>
  )
}
