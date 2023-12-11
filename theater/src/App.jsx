import './App.css';
import { useState } from 'react';
import Welcome from './Components/Welcome';




function App() {

  const [valueNeeded, setValueNeeded] = useState(0);

  function getValue(event){
    setValueNeeded(event.target.value)
  }

  function createInput(){
    let inputCreator = []

    for(let i = 0; i <= +valueNeeded; i++){
      inputCreator.push([i])
    }
    console.log(inputCreator)
    return inputCreator
  }

  let inputHolder = createInput()

  console.log(inputHolder)

  console.log(+valueNeeded)




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
    setMean((sinav1 + sinav2) / 2)
  }



  
  return (
    <>
      {welcome ? <Welcome close={closePopUp} /> : !welcome}

      <h1>How Much Value Do You Need?</h1>
      <input type="text" placeholder='Value Quantity' onChange={(event) => getValue(event)}/>
      <button onClick={() => createInput()}>Create</button>
      {inputHolder.map((row) => <input></input>)}

      

      <input type="text" onChange={(event) => notYaz('sinav1', event.target.value)} placeholder='1. Sınav' />
      <input type="text" placeholder='2. Sınav' onChange={(event) => notYaz('sinav2', event.target.value)} />
      <button onClick={() => calculateMean(not)}>Calculate</button>
      
      {<p>{mean}</p>}





    </>
);
}

export default App;
