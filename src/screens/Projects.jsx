import Spline from '@splinetool/react-spline';
import { useState } from 'react';
export default function App() {

const projects=[
{
    id:1,
    name:'Book-lore',
    link:'https://book-lore.vercel.app/',
    summary:'A web application that allows users to search for books, view their details, and discover new titles using the Google Books API. Built with EJS, Node.js, and Express.js, it focuses on simplicity and accessibility'
},
{     id:2,
    name:'REACT to-do list',
    link:'https://github.com/mugenGH/React-fullstack-todolist-',
    summary:'"A full-stack application for managing tasks efficiently. Users can add, update, and delete tasks with a seamless UI built using React, Node.js, Express.js, and PostgreSQL. Includes features like task categorization and responsive design'
},
{ 
    id:3,
    name:'recipe finder',
    link:'',
    summary:'A React Native app that enables users to search for recipes based on available ingredients. The app fetches data from recipe APIs, providing detailed instructions and nutritional information. Designed for mobile devices, it features a responsive and user-friendly interface for seamless meal planning on the go'
},
{ 
  id:4,
  name:'Simon Game',
  link:'https://mugengh.github.io/simon-game/',
  summary:`The Simon Game is a classic memory-based game where players follow an increasing sequence of lights and sounds. The game displays a random sequence, and players must repeat it correctly by pressing the corresponding buttons. Each round adds a new element to the sequence Built using HTML, CSS, and JavaScript, the game features an engaging design, interactive sound effects. `
},

]

const [summary,setSummary]=useState('');
const [load, setload] = useState(true)
function handleLoad(){
  setload(false)
}
  return (
    <>
    {load && (<div className="loading-screen">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>)}
     <div className='spline-bg'>
    <Spline onLoad={handleLoad} scene="https://prod.spline.design/nLhO62fW-frRO17y/scene.splinecode" />
    </div> 
    <div className='summary'>
       <h3>Summary</h3>
        <div>{summary || 'Hover over a project to see its summary!'}</div>
    </div>
    <div className='projects'>
       { projects.map((item)=>(
        <div className='porj' onMouseEnter={()=>{setSummary(item.summary)}} onMouseLeave={()=>{setSummary('')}}>
            <h4 className='title' style={{backgroundColor:'transparent'}}>{item.name}</h4>
            <a href={item.link} style={{backgroundColor:'transparent'}}>link</a>
        </div>
       ))}
    </div>
    </>
  );
}
