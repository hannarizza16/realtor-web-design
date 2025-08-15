import { Navbar } from './components/Navbar/Navbar.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { Home } from './components/Home/Home.jsx'

import './App.css'

function App() {
  return (
    <>
        <Navbar />
    

      {/* About Section */}
      <section id="home" className="">
        <Home/>
        
      </section>

       <section id="home" className="">
        <div className="bg-[url(../public/img/background.jpg)] bg-cover bg-center h-screen"></div>
        <img src="../public" alt="" />
      </section>

    



        <Footer />
    </>
  )
}

export default App
