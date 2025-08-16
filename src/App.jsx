
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
       <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Features />
      </main>
      <Footer />
    </>
  )
}

export default App
