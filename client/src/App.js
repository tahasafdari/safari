
import './styles/background.css';
import Background from './components/background'
import {useState,useEffect,useRef} from 'react'
import products from "./mockdata/products.json";
import ProductView from './components/productView';




function App() {

  const positionRef = useRef(0);
  const [mainstuff,setMainStuff] = useState(null)
  const [sunset,setSunset] = useState(null)
  const [background,setBackground] = useState(null)

  useEffect(() => {

    setMainStuff(document.getElementById('mainstuff'))
    setSunset(document.getElementById('sunset'))
    setBackground(document.getElementById('background'))

  },[]);

  const handleScroll = (e) => {

    const target = e.currentTarget.scrollTop;
      
      if (target !== positionRef.current) {

          positionRef.current = target;
          const mainposition = positionRef.current/600
          const sunposition = positionRef.current/1000
          const backgroundposition = 1 - positionRef.current/900
          mainstuff.style.opacity = mainposition 
          sunset.style.opacity = sunposition
          background.style.opacity = backgroundposition
        }
  }

  return(

    <main>
      <div className = 'wrapper' onScroll={handleScroll}>
        <Background/>
        <ProductView products={products}/>
      </div>
    </main>
    
  )
}

export default App;
