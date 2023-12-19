import './App.css';
import { useState, useRef, useEffect } from 'react';
import Welcome from './Components/Welcome';




function App() {

 const workTitle = useRef();
 const workDate = useRef();

 const [work, setWork] = useState({
  work: '',
  date: '',
 })
  
  
  return (
    <>
      <section>
   
        <div className='to-do'>

          <nav>
            <h2>Project Manager</h2>
            <button>My Projects</button>
            <button>Completed</button>
            <button>Trash Can</button>
          </nav>
          <div className='to-do-header'>
            <input type="text" placeholder='Work' ref={workTitle} />
            <input type="Date" placeholder='Choose' ref={workDate} />
            <button>Add to the List!</button>
          </div>
        </div>
      </section>




    </>
);
}

export default App;
