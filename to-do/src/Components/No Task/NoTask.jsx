export default function NoTask({close}){
  return (
    <>
      <div className="no-task">
        <h2 style={{color: 'black'}}>Select a project or get started with a new one!</h2>
        <button onClick={close}>+ Add Project</button>
      </div>

    
    
    </>
  )
}