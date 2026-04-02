
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Promo from './Components/Promo';
import Experience from './Components/Experience';
import Discover from './Components/Discover';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Brands from './Components/Brands';
import Earlier from './Components/Earlier';
import Participations from './Components/Participations';
import ImgFooter from './Components/ImageFooter';


function App() {

  return (
    <>
      <Header></Header>
      <main className="main">
        <Promo></Promo> 
        <Discover></Discover>        
        <Experience></Experience>       
        <About></About>
        <Brands></Brands>
        <Portfolio></Portfolio>
        <Participations></Participations>
        <Earlier></Earlier>   
        <ImgFooter></ImgFooter>    
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
