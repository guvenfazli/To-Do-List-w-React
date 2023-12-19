export default function RemovePopUp({open, decide}){
  return (
    <>
      <dialog className="dialog" open={open}>
        <h4>Do you really want to remove the task?</h4>
        <button onClick={decide}>Yes</button>
        <button>No</button>
      </dialog>
    
    
    
    </>
  )
}