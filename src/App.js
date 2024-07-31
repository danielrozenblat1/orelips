import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import Sillabus from './components/silabus/Silabus';
import Recommends from './components/recommends/Recommends';
import Results from './components/recommends/Results';
import Eyebrows from './components/recommends/Eyebrows';
import NavBarNew from './components/NewNav/NavBarNew';
import { useEffect, useState } from 'react';
import BasicAccordion from './components/Akordion/Akordion';
import AboutMe from './components/me/Me';
import ByMe from './components/ByMe/ByMe';
import ForthScreen from './screens/ForthScreen';
import FormScreen from './components/form/FormScreen';

function App() {
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return <>
  <NavBarNew/>
  <FirstScreen scrolled={scrolled}/>

  <SecondScreen/>
  <ThirdScreen/>
  <FormScreen/>
  <AboutMe/>
  <Sillabus/>
  <Results/>
  <Eyebrows/>
  <Recommends/>
  <ForthScreen/>
  <BasicAccordion/>
  <ByMe/>
  </>
}

export default App;
