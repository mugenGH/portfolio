import Spline from '@splinetool/react-spline';
import '../styles.css'
import { useState } from 'react';
export default function Skills() {
    const [load,setload]=useState(true);
function handleLoad(){
    setload(false);
}
  return (
    <>
     {load && (<div className="loading-screen">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>)}
    <div className='spline-bg'>
    <Spline onLoad={handleLoad} scene="https://prod.spline.design/nJgaKgbmLGDKa-S0/scene.splinecode" />
    </div>
    </>
  );
}
