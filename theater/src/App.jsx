import './App.css';
import { useState } from 'react';
import AppMenu from './Components/App-Main';

export const totalSeats = [
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null]
]

function App() {

  const [soldSeat, setSoldSeat] = useState(totalSeats);
  const [customerName, setCustomerName] = useState();

  function haveSeat(rowIndex, colIndex){
    setSoldSeat((prevSeat) => {
      let updateSeat = [...prevSeat.map(array => [...array])]
      if(!customerName){
        alert('Please insert a name!')
      } else {
        updateSeat[rowIndex][colIndex] = customerName;
        
      }
        return updateSeat;
      
      
    })
  }

  function setName(event){
    setCustomerName(event.target.value)
    console.log(event.target)
  }

  


  return (
    <div className="App">
      <AppMenu saloon={soldSeat} takenSeat={haveSeat} custName={setName} customerName={customerName}/>
      
    </div>
  );
}

export default App;
