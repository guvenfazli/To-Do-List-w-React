import './App-Main.css'
import { useState } from 'react'

export default function AppMenu({saloon,takenSeat,custName,customerName}){

  const [player, setPlayer] = useState('X');

  function changePlayer(){
    setPlayer((prevPlayer) => prevPlayer === 'X' ? 'O' : 'X')
  }



  return (
    <section className='main-menu'>
      <div className='application'>
        <div className='seats'>
          {saloon.map((section, rowIndex) => section.map((coridor, colIndex) => <button className={
            saloon[rowIndex][colIndex] === null ? 'avalaible' : 'taken'
          }  onClick={() => takenSeat(rowIndex, colIndex)}>{coridor}</button>))}
        </div>
        <div className='customer-section'>
          <input type="text" required onChange={custName} />
          <button onClick={changePlayer}>Deneme</button>
          <p>{player}</p>
         

        </div>

        



      </div>
      
    </section>
  )
}