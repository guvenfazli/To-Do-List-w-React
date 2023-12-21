import './App.css';
import { useState, useRef, useEffect } from 'react';
import AddedPopUp from './Components/Added';
import RemovePopUp from './Components/Remove';
import RenderTasks from './Components/RenderTasks';
import CompleteTasks from './Components/CompleteTasks';
import Welcome from './Components/Welcome';




function App() {

 const workTitle = useRef();
 const workDate = useRef();
 const guestName = useRef();
 const guestAge = useRef();

 const [work, setWork] = useState({
  work: '',
  date: '',
 })

 const [taskList, setTaskList] = useState({
  available: [],
  completed: []
 })

 const [removeAnim, setRemoveAnim] = useState(true)

 const [renderTask, setRenderTask] = useState('available')

 function addAsTask(){
  setTaskList((prev) => {
    let updatedTask = {...prev}
    updatedTask.available = [...updatedTask.available, workTitle.current.value + ' ' + workDate.current.value]
    updatedTask.completed = [...updatedTask.completed]
    return updatedTask;
  })



  showPopUp();
 }

 function markAsCompleted(index){
  setTaskList((prev) => {
    let updatedTask = {...prev}
    updatedTask.completed = [...updatedTask.completed, updatedTask.available[index]]
    updatedTask.available = [...updatedTask.available]
    updatedTask.available.splice(index, 1)
    return updatedTask
  })
 }

 function removeTask(index){
  setRemoveAnim(false)

  setTimeout(() => {
    setTaskList((prev) => {
      let updatedTask = {...prev}
      updatedTask.available = [...updatedTask.available]
      updatedTask.available.splice(index, 1)
      return updatedTask;
    })
  }, 1500)


 }

 const [toDoList, setToDoList] = useState([])

 const [completeList, setCompleteList] = useState([])

 const [guestList, setGuestList] = useState({
  adult: [],
  child: []
 })

 const [guestPerson, setGuestPerson] = useState('adult');

 

 function addGuest(){
  setGuestList((prev) => {
    let updatedObj = {...prev}

    /* 
      if(+guestAge.current.value <= 12){
        updateObj.child.push(guestName.current.value)
      } else {
        updateObj.adult.push(guestName.current.value)
      }
    */

    if(+guestAge.current.value <= 12){
      updatedObj.child = [...updatedObj.child, guestName.current.value + ' ' + guestAge.current.value]
    } else {
      updatedObj.adult = [...updatedObj.adult, guestName.current.value + ' ' + guestAge.current.value]
    }

    return updatedObj
  })
 }

 function addAsChild(index){
  setGuestList((prev) => {
    let updatedObj = {...prev}
    updatedObj.child = [...updatedObj.child, updatedObj.adult[index]]
    updatedObj.adult = [...updatedObj.adult]
    updatedObj.adult.splice(index, 1)
    return updatedObj;
  })

 }

 const [showPup, setShowPup] = useState(false)

 const [removePup, setRemovePup] = useState(false)

 const [currentTask, setCurrentTask] = useState(true)

 const [completeTask, setCompleteTask] = useState(false)

 function showSelect(){
    setCurrentTask(true)
    setCompleteTask(false)
  }

  function renderComplete(){
    setCompleteTask(true)
    setCurrentTask(false)
  }

 

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
            <button onClick={() => setRenderTask('available')}>My Projects ({taskList.available.length})</button>
            <button onClick={() => setRenderTask('completed')}>Completed ({taskList.completed.length})</button>
            <button>Trash Can</button>
          </nav>

          <div className='current-page'>
            <div className='to-do-header'>
              <input type="text" placeholder='Work' ref={workTitle} onChange={createWork}/>
              <input type="Date" placeholder='Choose' ref={workDate} onChange={createWork}/>
              <button onClick={addAsTask}>Add to the List!</button>
            </div>

            {console.log(taskList)}

            <div className='work-display'>

              {renderTask === 'available' ? taskList[renderTask].map((row,index) => <div className={removeAnim ? 'work' : 'remove-task-animation'}><p>{row}</p> <button onClick={() => removeTask(index)} className='remove-btn'>Remove</button> <button onClick={() => markAsCompleted(index)} className='complete-btn'>Complete</button></div>) : taskList[renderTask].map((row) => <div className='work'><p>{row}</p></div>)}



              {currentTask ? toDoList.map((renderTask, index) => (<RenderTasks complete={() => completeWork(index)} open={removePup} removeWork={removeWork} remove={() => removeWorkFromList(index)} {...renderTask}/>)) : ''} 
              {completeTask ? completeList.map((doneTask, index) => (<CompleteTasks complete={() => completeWork(index)} removeWork={removeWork} remove={() => removeWorkFromList(index)} {...doneTask} />)) : ''}

              
 

            </div>

          </div>

        </div>


      </section>

      <div className='test-section'>

        <input ref={guestName} type="text" placeholder='Name' />

        <input ref={guestAge} type="text" placeholder='Age' />

        <button onClick={() => addGuest()}>Add Guest</button>

        <p>Selam</p>

        <button onClick={() => setGuestPerson('adult')}>Adults</button> <button onClick={() => setGuestPerson('child')}>Children</button>

        {guestList[guestPerson].map((row, index) => <><p>{row}</p> <button onClick={() => addAsChild(index)}>Add as Child {index}</button></>)}
        
        
      </div>


      <p className={removeAnim ? '' : 'remove-task-animation'}>Selam</p>       
      <button onClick={() => setRemoveAnim(false)}>Make it Invis</button>


    </>
);
}

export default App;
