export default function Welcome({close}){
  return (
    <>
      <div className="background-cancel"></div>
      <div className="welcome-message">
        <h1>Welcome to Mean Calculator Test, Lets do This!</h1>
        <button onClick={close}>Lets get started!</button>
      </div>
    
    
    
    </>
  )
}