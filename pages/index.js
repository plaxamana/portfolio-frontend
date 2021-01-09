import Header from '../components/Header'
import Hero from '../components/Hero'
import ProjectContainer from '../components/project/ProjectContainer'

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <ProjectContainer className=""/>
      <div className="absolute -z-10 rect-clip bg-blue-900 h-64 w-full -mt-32"></div>   
    </div>
  )
}
