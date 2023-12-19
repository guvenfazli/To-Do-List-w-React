import './Tests.css'
import { useState, useRef, useEffect } from 'react';
import Welcome from './Components/Welcome';


export default function TestComp(){

  const workerList = [
    {id: 1 ,name: 'Güven', age: 24, position: 'Software Dev.'},
    {id: 2 , name: 'Leila', age: 21, position: 'Consultant'},
    {id: 3 , name: 'Fevzi', age: 22, position: '3D Designer'},
    {id: 4 , name: 'Eren', age: 16, position: 'Graphic Desinger'},
    {id: 5 , name: 'Onur', age: 24, position: 'IT'},
    {id: 6, name: 'Veysel', age: 24, position: 'Software Dev.'},
  ]

  const popUp = useRef();

  const [doneList, setDoneList] = useState([]);

  console.log(doneList)

  
  

  const [valueNeeded, setValueNeeded] = useState(0);

  function getValue(event){
    setValueNeeded(event.target.value)
  }

  const [openNav, setOpenNav] = useState(false)

  function openContact(){
    setOpenFb(false)
    setOpenNav((prev) => !prev)
  }

  const [openFb, setOpenFb] = useState(false)

  function openFeedBack(){
    setOpenNav(false)
    setOpenFb((prev) => !prev)
  }



  function createInput(){
    let inputCreator = []

    for(let i = 1; i <= +valueNeeded; i++){
      inputCreator.push([i])
    }
    return inputCreator
  }

  let inputHolder = createInput()

  const [welcome, setWelcome] = useState(false)

  function closePopUp(){
    setWelcome((prev) => !prev)
  }

  const [not, setNot] = useState({
    sinav1: 0,
    sinav2: 0  
  })

  const [mean, setMean] = useState(0)

  function notYaz(parameter, yeniNot){
    setNot((prev) => {
      return {
        ...prev,
        [parameter]: +yeniNot
      }
    })
  }
  
  function calculateMean({sinav1, sinav2}){
    setMean((sinav1 + sinav2) / valueNeeded)
  }

  const [investment, setInvestment] = useState({
    initialValue: 0,
    faiz: 0,
    year: 0
  })

  function getUserValues(parameter, newValue){
    setInvestment((prev) => {
        return {
          ...prev,
          [parameter]: +newValue
        }
      }
    )
  }

  function calculateInvestment({initialValue, faiz, year}) {
    let investHolder = []
    let lastValue = 0
    for(let i = 0; i < year; i++){
      investHolder.push({
        lastValue: (lastValue += initialValue) * faiz,
        year: i+1
      
      })
    }
    return investHolder
  }
  
  let investmentResults = calculateInvestment(investment)

  function karakterYarat({name,age,race}){
    this.name = name;
    this.age = age;
    this.race = race;
  }



  const [newChar, setNewChar] = useState({
    name: '',
    age: '',
    race: ''
  })

  function getCharInfo(parameter, newValue){
    setNewChar((prev) => {
      return {
        ...prev,
        [parameter]: newValue
      }
    })
  }

  let i = 0;
  

  function karakterYaratAuto(){
    i++ 
    const yeniChar = new karakterYarat(newChar) 
  }

  const [quant, setQuant] = useState(0)
  
 
  function addQuant(){
    setQuant((prev) => {
      let oldQuant = prev;
      oldQuant += 1
      return oldQuant;  
      }
    ) 
  }

  function removeQuant(){
    setQuant((prev) => {
      let oldQuant = prev;
      if(oldQuant <= 0){
        alert('You cant go further!')
        return oldQuant;
      } else {
        oldQuant -= 1
        return oldQuant;  
      }
      
    })
  }

  const [ekle, setEkle] = useState([])

  function userAdd(parameter){
    let accum = {id: +parameter}
    
    setEkle((prev) => {
      return [
        ...prev,
        accum
      ]
    })
  }

  const toDoRef = useRef();
  const toDoDate = useRef();

  const [toDoList, setToDoList] = useState([])
  const [addToDo, setAddToDo] = useState({
    work: '',
    date: ''
  })

  function testList(){
    setAddToDo((prev) => {
      return {
        ...prev,
        work: toDoRef.current.value,
        date: toDoDate.current.value
      }
    })
  }

  function addToData(){
    setToDoList((prev) => {
      return [
        ...prev,
        addToDo
      ]
    })
  }

 

  function markAsDone(index){
    setToDoList((prev) => {
      let updatedList = [...prev]
      updatedList.splice(index, 1)
      return updatedList
    })

    setDoneList((prev) => {
      let updatedDone = [...prev]
      updatedDone.push(toDoList[index])
      return updatedDone
    })
  }

  function getPopUp(){
    popUp.current.showModal();
  }

 
    useEffect(() => {
      getPopUp();
    }, [])
  return (

    <>
    <Welcome close={closePopUp} ref={popUp}/>

    <h1>How Much Value Do You Need?</h1>
    <input type="text" placeholder='Value Quantity' onChange={(event) => getValue(event)}/>
    <button onClick={() => createInput()}>Create</button>
    {inputHolder.map((row) => <input type="text" onChange={(event) => notYaz(`sinav${row}`, event.target.value)} placeholder={`${row}.Value`} ></input>)}

    <button onClick={() => calculateMean(not)}>Calculate</button>
    
    {<p>{mean}</p>}

    <div className='investment-calculator'>
      <input type="text" className='initial-value' placeholder='Initial Value' onChange={(event) => getUserValues('initialValue', event.target.value)} />
      <input type="text" className='faiz' placeholder='Faiz' onChange={(event) => getUserValues('faiz', event.target.value)} />
      <input type="text" className='year' placeholder='Year' onChange={(event) => getUserValues('year', event.target.value)}/>
      <button onClick={() => calculateInvestment(investment)}>Calculate</button>

      {!investment ? <p>Invest some!</p> : 
        investmentResults.map((row) => 
        <div className='invest-results'>
          <p>{row.year}</p>
          <p>
          {
            `$${new Intl.NumberFormat("de-DE").format(row.lastValue)}`
          }
          </p>
        </div>)
      }
    </div>

    <div className='char-creation'>
      <input type="text" placeholder='Name' onChange={(event) => getCharInfo('name', event.target.value)} />
      <input type="text" placeholder='Age' onChange={(event) => getCharInfo('age', event.target.value)} />
      <input type="text" placeholder='Race' onChange={(event) => getCharInfo('race', event.target.value)} />
      <button onClick={() => new karakterYarat(newChar)}>Create!</button>
      <button onClick={()=> karakterYaratAuto()}>Test me</button>
    </div>

    <button onClick={() => addQuant()}>Add</button>
    <button onClick={() => removeQuant()}>Remove</button>

    {quant >= 10 ? <p>10+</p> : <p>{quant}</p>}

    {workerList.map((row) => <p key={row.id}>{row.name} <button onClick={() => userAdd(`${+row.id}`)}>Add</button> </p>)}
 
 
    {ekle.map((row) => {
      let oldu;

      workerList.map((worker) => {
        if(row.id === worker.id){
          oldu = worker
        }
        })

      return (
        <p key={row.id}>{oldu.position}</p>
      )
    })}

          <button onMouseOver={openContact}>Contact</button>
          <button onMouseOver={openFeedBack} >Feedback</button>

        {!openNav ? <></> :       <div className='button-animation-test'>

      
       

          <div onMouseLeave={openContact} className={`contact-section ${openNav ? 'active-contact' : undefined}`}>
            <button>Facebook</button>
            <button>Twitter</button>
            <button>Reddit</button>
          </div>

          {
          !openFb ? <></> : <div onMouseLeave={openFeedBack} >
            <button>Good</button>
            <button>Meh</button>
            <button>Bad</button>
          </div>
          }



        </div>}


          <div className='to-do'>

  



            <div className='to-do-section'>

              <nav>
                <h2>Project Tracker</h2>
                <button>My Projects</button>
                <button>Completed</button>
                <button>Trash Can</button>

              </nav> 


              <input type="text" placeholder='What To Do?' onChange={testList} ref={toDoRef} />
              <input type="date" placeholder='Date' onChange={testList} ref={toDoDate} />
              <button onClick={addToData}>Add to Do!</button>

              <div>{toDoList.map((row, index) => 
              
              <div className='render-list' key={row.work}>
                  <p>{row.work}</p>
                  <p>{row.date}</p>
                  <button onClick={() => markAsDone(index)}>Done</button>
              </div>
             )}
              </div>
            </div>
          </div>

          <div  className='done-list'>
            {doneList.map((row) => <p key={row.work}>{row.work}</p>)}
          </div>

        



  </>






  )
}