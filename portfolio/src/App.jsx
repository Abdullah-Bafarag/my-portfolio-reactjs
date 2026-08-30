import {
  Home,
  Nav,
  About,
  Skills,
  Contact,
  Footer
} from './sections';
import Services from './sections/Services';

const App = () => {
  return (
    <div>

      <main>
        <Home />
        <Nav />
        <About />
        <Skills />
        <Services />
        <Contact />
      </main>

      <Footer /> 
    </div>
  )
}

export default App