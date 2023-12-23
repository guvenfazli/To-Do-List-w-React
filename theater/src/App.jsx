import './App.css';
import { useState, useRef, useEffect } from 'react';
import AddedPopUp from './Components/Added';
import hamburger from './Assets/bars-solid.svg'
import RemovePopUp from './Components/Remove';
import NoTask from './Components/No Task/NoTask';
import Welcome from './Components/Welcome';
import RenderWork from './Components/RenderWork/RenderWork';


function App() {

 const workTitle = useRef();
 const workDate = useRef();
 const workDesc = useRef();
 const guestName = useRef();
 const guestAge = useRef();

 const [work, setWork] = useState({
  work: '',
  date: '',
  description: ''
 })

 const [navBar, setNavBar] = useState(false)

 function openCloseNav(){
  setNavBar((prev) => !prev)
 }

 const [expand, setExpand] = useState(false)

 function expandDiv(){
  setExpand((prev) => !prev)
 }

 function createWork(){
  setWork((prev) => {
    return {
      ...prev,
      work: workTitle.current.value,
      date: workDate.current.value,
      description: workDesc.current.value
    }
  })
 }
 

 const [taskList, setTaskList] = useState({
  available: [],
  completed: []
 })

 const [testList, setTestList] = useState({
  avl: [],
  comp: []
 })

 function addTestList(){
  setTestList((prev) => {
    let updatedList = {...prev}
    updatedList.avl = [...updatedList.avl, work]
    updatedList.comp = [...updatedList.comp]
    return updatedList;
  })
 }

 const [removeAnim, setRemoveAnim] = useState(true)

 const [renderTask, setRenderTask] = useState('available')

 const [noTask, setNoTask] = useState(true)

 function closeNoTask(){
  setNoTask(false)
  workTitle.current.focus();

 }

 function addAsTask(){
  setRemoveAnim(false)

  if(workTitle.current.value === '' || workDate.current.value === ''){
    alert('Please enter a valid task!')
  } else {
    setTimeout(() => {
      setTaskList((prev) => {
        let updatedTask = {...prev}
        updatedTask.available = [...updatedTask.available, work]
        updatedTask.completed = [...updatedTask.completed]
        setNoTask(false)
        setRemoveAnim(true)
        return updatedTask;
      })
    }, 1000)

    setTimeout(() => {
      workDate.current.value = ''
      workTitle.current.value = ''
      workDesc.current.value = ''
    }, 10)
  
    showPopUp();
  }


 }

 function markAsCompleted(index){
  setRemoveAnim(false)
  setTimeout(() => {
    setTaskList((prev) => {
      let updatedTask = {...prev}
      updatedTask.completed = [...updatedTask.completed, updatedTask.available[index]]
      updatedTask.available = [...updatedTask.available]
      updatedTask.available.splice(index, 1)
      setRemoveAnim(true)
      return updatedTask
    })
  }, 1000)



 }

 function removeTask(index){
  setRemoveAnim(false)

  setTimeout(() => {
    setTaskList((prev) => {
      let updatedTask = {...prev}
      updatedTask.available = [...updatedTask.available]
      updatedTask.available.splice(index, 1)
      setRemoveAnim(true)
      return updatedTask;
    })
  }, 1000)


 }

 /* TESTS ARE DOWN BELOW*/

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

 


 function addToList(){

  if(workTitle.current.value === '' || workDate.current.value === '' || workDesc.current.value === '') {
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

          <nav className={navBar ? 'to-do-nav' : 'closed-nav'}>
            <h2>Project Manager</h2>
            <button onClick={() => setRenderTask('available')}>My Projects ({taskList.available.length})</button>
            <button onClick={() => setRenderTask('completed')}>Completed ({taskList.completed.length})</button>
          </nav>

          <div className='current-page'>
            <div className='to-do-header'>
              <input type="text" placeholder='Work' ref={workTitle} onChange={createWork}/>
              <input type="Date" placeholder='Choose' ref={workDate} onChange={createWork}/>
              <input type="text" placeholder='Description' ref={workDesc} onChange={createWork} />
              <button className='add-button' onClick={addAsTask}>Add to the List!</button>

              
            </div>

            <button onClick={openCloseNav} className={navBar ? 'hmb' : 'open-nav-btn'}><img src={hamburger} alt="hamburger" /></button>



            <div className='work-display'>
              {noTask ? <NoTask close={closeNoTask} /> : <></>}
              
              {taskList[renderTask].map((work, index) => (<RenderWork removeAnim={removeAnim} removeTask={() => removeTask(index)} markAsCompleted={() => markAsCompleted(index)} avlorcomp={renderTask} expand={expandDiv} ex={expand} {...work}/>))}



 

            </div>

          </div>

        </div>


      </section>



      



    </>
);
}

export default App;
