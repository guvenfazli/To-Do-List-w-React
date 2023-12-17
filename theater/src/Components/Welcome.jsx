import { forwardRef, useRef } from "react"

const Welcome = forwardRef(function Welcome({close}, ref){
  return (
    <>
    <div className="karartma"></div>
    <dialog ref={ref}>
 
      <h1>Welcome to my test page, i do many tests here...</h1>
    
      <form method="dialog">
        <button>Close</button>
      </form>
    
    </dialog>
    </>
  )
})

export default Welcome;