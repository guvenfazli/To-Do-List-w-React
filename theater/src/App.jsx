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

  function haveSeat(rowIndex, colIndex){
    setSoldSeat((prevSeat) => {
      let updateSeat = [...prevSeat.map(array => [...array])]
      updateSeat[rowIndex][colIndex] = 'X'
      console.log(updateSeat)
      return updateSeat;
    })
  }


  return (
    <div className="App">
      <AppMenu saloon={soldSeat} takenSeat={haveSeat}/>
    </div>
  );
}

export default App;
