import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AtomicSpinner from 'atomic-spinner';
import { ImacCanvas } from './components/canvas';

const Intro = lazy(() => import('./components/Intro'));
const Tech = lazy(() => import('./components/Tech'));
const About = lazy(() => import('./components/About'));
const Hero = lazy(() => import('./components/Hero'));
const Contact = lazy(() => import('./components/Contact'));
const Experience = lazy(() => import('./components/Experience'));
const Navbar = lazy(() => import('./components/Navbar'));
const Works = lazy(() => import('./components/Works'));
const StarsCanvas = lazy(() => import('./components/canvas/Stars'));
const Education = lazy(() => import('./components/Education'));
const Footer = lazy(() => import('./components/Footer'));

const App = () => {
  return (
    <Suspense
      fallback={
        <div className='w-full h-screen flex justify-center items-center'>
          <AtomicSpinner
            atomSize={450}
            electronSize={1.8}
            electronSpeed={0.4}
          />
        </div>
      }
    >
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <Intro />
          <Tech />
          <Experience />
          <Works />
          <Education />
          <About />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
