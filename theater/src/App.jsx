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

 const [completeList, setCompleteList] = useState([])

 
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

 function removeWork(index){
  setToDoList((prev) => {
    let updatedList = [...prev]
    updatedList.splice(index, 1)
    return updatedList
  })
 }

 function completeWork(index){
  setToDoList((prev) => {
    let updatedList = [...prev]
    updatedList.splice(index, 1)
    return updatedList
  })

  setCompleteList((prev) => {
    let doneList = [...prev]
    doneList.push(toDoList[index])
    return doneList
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
              {toDoList.map(
                (row, index) => 
                  <div className='work' key={row.work}>
                    <p>
                      {row.work}
                    </p>

                    <p>{row.date}</p>

                    <button onClick={() => removeWork(index)} className='remove-btn'>Remove</button>
                    <button onClick={() => completeWork(index)} className='complete-btn'>Complete</button>
                  </div>
                )
              }




            </div>

          </div>

        </div>

      </section>

      

    </>
);
}

export default App;
