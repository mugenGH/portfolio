import Spline from '@splinetool/react-spline';
import '../styles.css'
import { useState } from 'react';
export default function AboutMe() {
      const [load, setload] = useState(true)
      const [cont, setCont] = useState('')
    function handleLoad(){
      setload(false)
     setTimeout(()=>
     { setCont(`Hi, I’m Shree Ram, a final-year Computer Science Engineering student passionate about web and app development. I specialize in building efficient, user-friendly applications using React, Node.js, PostgreSQL, and reactive native.

I’ve developed projects like BookLore, a book search platform using the Google Books API, and VOICESHIELD, a women’s safety app with voice commands and real-time alerts.

I’m also proficient in Japanese  and aspire to work in Japan to contribute to cutting-edge technology projects while improving my skills.`)},1000);
    }
  return (
    <>
    {load && (<div className="loading-screen">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>)}

    <div className='spline-bg'>
    <Spline onLoad={handleLoad} scene="https://prod.spline.design/igNH797Idt2bO1fF/scene.splinecode" />
    </div>
    <div className='abtcont'>{cont}</div>
    </>
  );
}
