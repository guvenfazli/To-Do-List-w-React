import './App.css';
import { useState } from 'react';
import Welcome from './Components/Welcome';




function createCharacter({name, age, race}){
  return {
    name: name,
    age: age,
    race: race
  }
}


function App() {

  const [valueNeeded, setValueNeeded] = useState(0);

  function getValue(event){
    setValueNeeded(event.target.value)
  }



  function createInput(){
    let inputCreator = []

    for(let i = 1; i <= +valueNeeded; i++){
      inputCreator.push([i])
    }
    return inputCreator
  }

  let inputHolder = createInput()

  const [welcome, setWelcome] = useState(true)

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
    let yeniChar = new karakterYarat(newChar) 
    console.log(yeniChar)
  }


  console.log(new karakterYarat(newChar))

  
  return (
    <>
      {welcome ? <Welcome close={closePopUp} /> : !welcome}

      <h1>How Much Value Do You Need?</h1>
      <input type="text" placeholder='Value Quantity' onChange={(event) => getValue(event)}/>
      <button onClick={() => createInput()}>Create</button>
      {inputHolder.map((row) => <input type="text" onChange={(event) => notYaz(`sinav${row}`, event.target.value)} placeholder={`${row}.Value`} ></input>)}

      <button onClick={() => calculateMean(not)}>Calculate</button>
      
      {<p>{mean}</p>}

      <div className='investment-calculator'>
        <input type="text" className='initial-value' placeholder='initial-value' onChange={(event) => getUserValues('initialValue', event.target.value)} />
        <input type="text" className='faiz' placeholder='faiz' onChange={(event) => getUserValues('faiz', event.target.value)} />
        <input type="text" className='year' placeholder='year' onChange={(event) => getUserValues('year', event.target.value)}/>
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
        <button onClick={() => karakterYaratAuto()}>Test me</button>
      </div>

      


    </>
);
}

export default App;
