import {
  Home,
  Nav,
  About,
  Skills,
  Projects,
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
        {/* <Projects /> in the future */}
        <Contact />
      </main>

      <Footer /> 
    </div>
  )
}

export default App