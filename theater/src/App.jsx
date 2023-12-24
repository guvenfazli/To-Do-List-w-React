import './App.css';
import { useState, useRef, useEffect } from 'react';
import AddedPopUp from './Components/Added';
import hamburger from './Assets/bars-solid.svg'
import NoTask from './Components/No Task/NoTask';
import RenderWork from './Components/RenderWork/RenderWork';


function App() {
 /* Used Refs */
 const workTitle = useRef();
 const workDate = useRef();
 const workDesc = useRef();

 /* Create Work */

 const [work, setWork] = useState({
  work: '',
  date: '',
  description: ''
 })

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

 /* Open / Close Nav Bar*/
 const [navBar, setNavBar] = useState(false)

 function openCloseNav(){
  setNavBar((prev) => !prev)
 }

 /* Expand Description */
 const [expand, setExpand] = useState(false)

 function expandDiv(){
  setExpand((prev) => !prev)
 }

 /* Add To The Task List */

 const [taskList, setTaskList] = useState({
  available: [],
  completed: []
 })

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

 /* Remove Task From List */ 

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

/* Add Task as Completed */
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


 /* Remove Animation */ 

 const [removeAnim, setRemoveAnim] = useState(true)

 /* Renderin the Tasks */

 const [renderTask, setRenderTask] = useState('available')

 /* Starting Pop Up */

 const [noTask, setNoTask] = useState(true)

 function closeNoTask(){
  setNoTask(false)
  workTitle.current.focus();
 }

 /* Succesfully added Pop Up */

 const [showPup, setShowPup] = useState(false)


 function showPopUp(){
  setShowPup(true)
  setTimeout(() => {setShowPup(false)}, 2000)

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
