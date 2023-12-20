import RemovePopUp from "./Remove"

export default function CompleteTasks({work, date}){
  return (
  
  <>

        <div className='work' key={work}>

          <p>
            {work}
          </p>

          <p>
            {date}
          </p>
        </div>
    

  


  
  
  
  
  
  
  
  
  </>
  )
}