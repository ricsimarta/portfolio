import './App.css';
import Landing from './components/Landing/Landing';
import Header from './components/Header/Header';
import About from './components/About/About';
import Arrow from './components/Arrow/Arrow';
import Skills from './components/Skills/Skills';

export default function App() {
  return (
    <>
      <Header />
      <Arrow />
      <Landing />
      <About />
      <Skills />
    </>
  )
}