import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ProjectContainer from '../components/project/ProjectContainer'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ProjectContainer />
    </div>
  )
}
