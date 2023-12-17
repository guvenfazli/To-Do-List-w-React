import { forwardRef, useRef } from "react"

const Welcome = forwardRef(function Welcome({close}, ref){
  return (
    <dialog ref={ref}>
 
      <h1>Welcome to my test page, i do many tests here...</h1>
    
      <form method="dialog">
        <button>Close</button>
      </form>
    
    </dialog>
  )
})

export default Welcome;