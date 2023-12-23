import RemovePopUp from "./Remove"

export default function RenderTasks({work, date, open, remove, removeWork, complete, avlorcomp}){
  return (
  
  <>

        <div className='work' key={work}>

          <p>
            {work}
          </p>

          <p>
            {date}
          </p>

          <RemovePopUp open={open}>
            <button onClick={remove}>Yes</button>
            <button onClick={removeWork}>No</button>
          </RemovePopUp>
          
          <button onClick={removeWork} className='remove-btn'>Remove</button>
          <button onClick={complete} className='complete-btn'>Complete</button>

        </div>
    

  


  
  
  
  
  
  
  
  
  </>
  )
}