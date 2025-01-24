import { useState } from 'react'
import './styles.css';
import './App.css'
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'; // For brand icons

function App() {
  const [load, setload] = useState(true)
function handleLoad(){
  setload(false)
}
  return (<div>
{load && (<div className="loading-screen">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>)} 
    
      <div className="bg">
    <Spline onLoad={handleLoad} scene="https://prod.spline.design/Klwl2vxUdDGH9-or/scene.splinecode" />
  </div>
  
<div  className='intro'>Hi, it's Shreeram 👋</div>
  <div className='content'>
    <div className='box1'>
      <div><Link style={{ textDecoration: 'none', color: 'inherit',backgroundColor:'transparent' }} to='/about'>ABOUT ME</Link></div>
     <div><Link style={{ textDecoration: 'none', color: 'inherit',backgroundColor:'transparent' }} to='/skills'>SKILLS</Link></div> 
    </div>

    <div className='box2'>
    <Link to='/project' style={{ textDecoration: 'none', color: 'inherit' ,backgroundColor:'transparent'}}> PROJECTS</Link></div>
      <div className='box3' >
    <a href='https://github.com/mugenGH/' target='_blank' style={{ textDecoration: 'none',color: 'inherit'}}> <FontAwesomeIcon icon={faGithub} /></a> 
    <a href='https://www.linkedin.com/in/shreeram-r-58a302263/'  target='_blank' style={{ textDecoration: 'none',color: 'inherit'}}>   <FontAwesomeIcon icon={faLinkedin} /></a> 
      
      </div>
  </div>

 
    </div>
  )
}

export default App
