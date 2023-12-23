export default function RenderWork({work, date, description, removeTask, markAsCompleted, removeAnim, avlorcomp, expand, ex}){
  return (
    <>

      {avlorcomp === 'available' ?
       
        <div className={`${removeAnim ? 'work' : 'remove-task-animation'} ${!ex ? 'work' : 'expanded-div'}`}>
          <p style={{flexShrink: '0'}} >{work}</p>
          <p style={{flexShrink: '0'}}>{date}</p>
          <button onClick={removeTask} className='remove-btn'>Remove</button> 
          <button onClick={markAsCompleted} className='complete-btn'>Complete</button>   
          <button className="expand-btn" onClick={expand}>Description</button> 
          <p className={!ex ? 'task-desc' : 'expanded'}>Task Description: {description}</p>              
        </div>
        : 
       
        <div className={removeAnim ? 'work' : 'remove-task-animation'}>
          <p>{work}</p>
          <p>{date}</p>
          <p>{description}</p>
        </div>       
       }

    
    
    
    </>
  )
}

