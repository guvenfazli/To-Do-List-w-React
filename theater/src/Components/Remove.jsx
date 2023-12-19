import { forwardRef } from "react"

const RemovePopUp = forwardRef(function RemovePopUp({open, decide, close}){
  return (
    <>
      <dialog className="dialog" open={open}>
        <h4>Do you really want to remove the task?</h4>
        <div className="choose-section">
        <button onClick={decide}>Yes</button>
        <button onClick={close}>No</button>
        </div>
      </dialog>
    
    
    
    </>
  )
})

export default RemovePopUp