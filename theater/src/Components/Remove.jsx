export default function RemovePopUp({open,children}){
  return (
    <>
      <dialog className="dialog" open={open}>
        <h4>Do you really want to remove the task?</h4>
        <div className="choose-section">
        {children}
        </div>
      </dialog>
    
    
    
    </>
  )
}

