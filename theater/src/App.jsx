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

 const [toDoList, setToDoList] = useState([])

 
 function createWork(){
  setWork((prev) => {
    return {
      ...prev,
      work: workTitle.current.value,
      date: workDate.current.value
    }
  })
 }
 

 function addToList(){
  setToDoList((prev) => {
    return [
      ...prev,
      work
    ]
  })
 }
  
  
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

          <div className='current-page'>
            <div className='to-do-header'>
              <input type="text" placeholder='Work' ref={workTitle} onChange={createWork}/>
              <input type="Date" placeholder='Choose' ref={workDate} onChange={createWork}/>
              <button onClick={addToList}>Add to the List!</button>
            </div>

            <div className='work-display'>
              {toDoList.map((row) => <p>{row.work}</p>)}

            </div>

          </div>



        </div>




      </section>

      

    </>
);
}

export default App;
