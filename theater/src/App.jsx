import './App.css';
import { useState, useRef, useEffect } from 'react';
import AddedPopUp from './Components/Added';
import RemovePopUp from './Components/Remove';
import RenderTasks from './Components/GeneralTasks';
import Welcome from './Components/Welcome';





function App() {

 const workTitle = useRef();
 const workDate = useRef();
 const showPop = useRef();

 const [work, setWork] = useState({
  work: '',
  date: '',
 })

 const [toDoList, setToDoList] = useState([])

 const [completeList, setCompleteList] = useState([])

 const [showPup, setShowPup] = useState(false)

 const [removePup, setRemovePup] = useState(false)

 function showPopUp(){
  setShowPup(true)
  setTimeout(() => {setShowPup(false)}, 2000)
 }

 function showRemovePup(){
  setRemovePup((prev) => !prev);
 }

 
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

  if(workTitle.current.value === '' || workDate.current.value === '') {
    alert('Please Enter Valid Date or Task!')
  } else {
    setToDoList((prev) => {
      return [
        ...prev,
        work
      ]
    })
    workTitle.current.value = '';
    workDate.current.value = '';
  
    showPopUp()
  }

 }

 function removeWork(){
  showRemovePup()
 }

 function removeWorkFromList(index){
  setToDoList((prev) => {
    let updatedList = [...prev]
    updatedList.splice(index, 1)
    return updatedList
  })

  showRemovePup()
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

    
      <AddedPopUp open={showPup} />
      
      <section>
   
        <div className='to-do'>

          <nav>
            <h2>Project Manager</h2>
            <button>My Projects ({toDoList.length})</button>
            <button>Completed ({completeList.length})</button>
            <button>Trash Can</button>
          </nav>

          <div className='current-page'>
            <div className='to-do-header'>
              <input type="text" placeholder='Work' ref={workTitle} onChange={createWork}/>
              <input type="Date" placeholder='Choose' ref={workDate} onChange={createWork}/>
              <button onClick={addToList}>Add to the List!</button>
            </div>

            <div className='work-display'>
              {toDoList.map((renderTask) => (<RenderTasks complete={completeWork} removeWork={removeWork} remove={removeWorkFromList} {...renderTask}/>))}


              
              {toDoList.map(
                (row, index) => 

                  <div className='work' key={row.work}>
 
                    <p>
                      {row.work}
                    </p>

                    <p>
                      {row.date}
                    </p>

                    <RemovePopUp open={removePup}>
                      <button onClick={() => removeWorkFromList(index)}>Yes {index}</button>
                      <button onClick={removeWork}>No</button>
                    </RemovePopUp>
                   
                    <button onClick={removeWork} className='remove-btn'>Remove</button>
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
