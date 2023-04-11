import logo from './logo.svg';
import './App.css';
import { Cards } from './Cards';
import { Footer } from './Footer';
import { Carousel } from './Carousel';
import {History} from './History';
import { Team } from './Team';
import {Doctors} from './Doctors'
import { How } from './How';
function App() {
  return (
    <>
 <Carousel></Carousel>
  <Cards></Cards>
  <History></History>
  <Team></Team>
  <Doctors></Doctors>
  
  </>
  );
}

export default App;
