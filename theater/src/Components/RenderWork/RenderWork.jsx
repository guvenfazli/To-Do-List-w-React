export default function RenderWork({work, date, description, removeTask, markAsCompleted, removeAnim}){
  return (
    <>
      <div className={removeAnim ? 'work' : 'remove-task-animation'}>
        <p>{work}</p>
        <p>{date}</p>
        <p>{description}</p>
        <button onClick={removeTask} className='remove-btn'>Remove</button> <button onClick={markAsCompleted} className='complete-btn'>Complete</button>

      </div>
    
    
    
    
    </>
  )
}