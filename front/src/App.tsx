import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Tecnologias from './components/Tecnologias'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useRef} from 'react'


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

 

  return (
    <>
    <Navbar itemsNavbar={itemsNavbar} scrollHandler={scrollHandler}/>
    <Home referencia={home}/>
    <AboutMe referencia={sobreMi}/>
    <Tecnologias referencia={tecnologias}/>
    <Projects referencia={proyectos}/>
    <Contact referencia={contacto}/>
    <Footer/>
   
    </>
  )
}

export default App
