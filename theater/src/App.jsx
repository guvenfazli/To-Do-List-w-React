import './App.css';
import { useState } from 'react';



function App() {

  const classInfo = { 
    paladin : {healer: 'Heals with holy light. Better than most of the priests imo.', dps: 'Does heavy damage with the sword and holy light.', tank: 'One of the best tanks in the game. Almost never dies and forever self-healing.'}, 
    warrior: {healer: 'There is no such a thing as Healer Warrior', dps: 'Does heavy damage depends on if the player is furry or arms.', tank: 'One of the best and classic tanks in the game.'},
    druid: {healer: 'Very efficiant and very fast healing. Does heavy healing with tranquility.', dps: 'Boomy druid deals the heaviest dmg as druid. Recommended.', tank: 'Depends on the expension, can be the best tank during that era of the game, Bear form.'} 
  }

  const [chosenClass, setChosenClass] = useState();

  const [chosenRole, setChosenRole] = useState();

  function chooseClass(event){
    setChosenClass(event.target.value)
  }

  function chooseRole(event){
    setChosenRole(event.target.value)
  }


  return (
    <>
     
    <select name="" id="" onChange={(event) => chooseClass(event)}>
      <option value="">Choose a Class</option>
      <option value="paladin">Paladin</option>
      <option value="warrior">Warrior</option>
      <option value="druid">Druid</option>
    </select>

    <select name="" id="" onChange={(event) => chooseRole(event)}>
      <option value="">Choose a Role</option>
      <option value="tank">Tank</option>
      <option value="healer">Healer</option>
      <option value="dps">Dps</option>
    </select>

    {!chosenRole || !chosenClass ? <p>Please choose a class and role</p> : <>
      <h2>{chosenClass}</h2>
      <p>{classInfo[chosenClass][chosenRole]}</p>
    
    
    </>}

    
      

    </>
);
}

export default App;
