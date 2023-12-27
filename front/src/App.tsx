import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Tecnologias from './components/Tecnologias'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useEffect, useRef, useState} from 'react'
import { boolean } from 'yup'


function App() {
  const home=useRef(null)
  const contacto=useRef(null)
  const tecnologias=useRef(null)
  const sobreMi=useRef(null)
  const proyectos=useRef(null)
   
  interface item{
    name:string,
    scroll:React.MutableRefObject<null>
  }

  const itemsNavbar:item[]=[{name:"home",scroll:home},{name:"sobre mi",scroll:sobreMi},{name:"tecnologias",scroll:tecnologias},{name:"proyectos",scroll:proyectos},{name:"contacto",scroll:contacto}]

  const scrollHandler=(elemRef:React.MutableRefObject<HTMLDivElement | null>)=>{
   
    if(elemRef.current){
      window.scrollTo({top:elemRef.current.offsetTop ,behavior:'smooth'})
    }
    

  }

 
  const [aboutMeMotion,setAboutMeMotion]=useState<boolean>(false)
  const [tecnoMotion,setTecnoMotion]=useState<boolean>(false)
  const [contactMotion,setContactMotion]=useState<boolean>(false)

 

  window.addEventListener("scroll",()=>{
    if(sobreMi && sobreMi.current){
    if(sobreMi.current.offsetTop>0 && sobreMi.current.offsetTop/1.5<=window.scrollY){
      setAboutMeMotion(true)
      console.dir(sobreMi.current)
    }
   if(tecnologias.current.offsetTop>0 && tecnologias.current.offsetTop<=window.scrollY){
    setAboutMeMotion(false)
   }

   if(tecnologias.current.offsetTop>0 && tecnologias.current.offsetTop/1.5<=window.scrollY){
    setTecnoMotion(true)
  
  }

  if(contacto.current.offsetTop>0 && contacto.current.offsetTop/1.13<=window.scrollY){
    setContactMotion(true)
    console.log("xxxxxxxxx",contacto.current.offsetTop/1.5)
    console.log("yyyyyyyyyyyyyy",window.scrollY)
  
  }
  }

  })



console.log("contact",contactMotion)
  return (
    <>
    <Navbar itemsNavbar={itemsNavbar} scrollHandler={scrollHandler}/>
    <Home referencia={home}/>
    <AboutMe referencia={sobreMi} aboutMeMotion={aboutMeMotion} />
    <Tecnologias referencia={tecnologias} tecnoMotion={tecnoMotion} />
    <Projects referencia={proyectos}/>
    <Contact referencia={contacto} contactMotion={contactMotion}/>
    <Footer/>
   
    </>
  )
}

export default App
