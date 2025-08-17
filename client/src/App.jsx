import { Navbar } from './components/Navbar/Navbar.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { Home } from './components/Home/Home.jsx'
import { Gallery } from './components/Gallery/Gallery.jsx'
import { Logo } from './components/Logo/Logo.jsx'
import './App.css'

function App() {
  return (
    <>
        <Navbar />
    

      {/* About Section */}
      <section id="home" className="">
        <Home/>
      </section>

      <section id="gallery">
        <Gallery/>
      </section>

       {/* <section id="asd" className="">
        <div className="bg-[url(/Img/background.jpg)] bg-cover bg-center h-screen"></div>
        <img src="../public" alt="" />
      </section> */}

      <section id="logo">
        <Logo/>
      </section>


    



        <Footer />
    </>
  )
}

export default App
