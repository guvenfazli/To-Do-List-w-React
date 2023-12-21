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
    return updatedObj;
  })

  setGuestList((prev) => {
    let updatedObj = {...prev}
    updatedObj.adult.splice(index,1)
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
            <button onClick={showSelect}>My Projects ({toDoList.length})</button>
            <button onClick={renderComplete}>Completed ({completeList.length})</button>
            <button>Trash Can</button>
          </nav>

          <div className='current-page'>
            <div className='to-do-header'>
              <input type="text" placeholder='Work' ref={workTitle} onChange={createWork}/>
              <input type="Date" placeholder='Choose' ref={workDate} onChange={createWork}/>
              <button onClick={addToList}>Add to the List!</button>
            </div>

            <div className='work-display'>
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

        {console.log(guestList)}

        {guestList[guestPerson].map((row, index) => <><p>{row}</p> <button onClick={() => addAsChild(index)}>Add as Child {index}</button></>)}
        

      </div>
             


    </>
);
}

export default App;
