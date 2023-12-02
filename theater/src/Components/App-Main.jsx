import './App-Main.css'


export default function AppMenu({sellSeat, saloon,takenSeat,children}){




  return (
    <section className='main-menu'>
      <div className='application'>
        <div className='seats'>
          {saloon.map((section, rowIndex) => section.map((coridor, colIndex) => <button onClick={() => takenSeat(rowIndex, colIndex)}>{coridor}</button>))}
        </div>

        



      </div>
      
    </section>
  )
}