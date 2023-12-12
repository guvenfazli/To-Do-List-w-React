import './App.css';
import { useState } from 'react';
import Welcome from './Components/Welcome';

function karakterYarat(name,age,race){
  this.name = name;
  this.age = age;
  this.race = race;
}

const char1 = new karakterYarat('Güven', 24, 'Spanish')

console.log(char1)
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
    console.log(inputCreator)
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
    console.log(investHolder)
    return investHolder
  }
  
  let investmentResults = calculateInvestment(investment)


  
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
              {row.year}

              {`$ ${new Intl.NumberFormat("de-DE").format(row.lastValue)}`}
          </div>)
        }


      </div>





    </>
);
}

export default App;
