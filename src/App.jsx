import './App.css'
import Counter from './Count';
import Users from './Users';

function App() {

  function handleClick(){
    alert('Button Clicked');
  }

  const handleClick2 = () => {
    alert('Why?');
  }
  const whydidYou = (word) =>{
    alert (word+"click");
  }
  return (
    <>
      <h3>React Core Concepts 2</h3>
      
      <Users></Users>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click me too</button>
      <button onClick={() => {
        alert('Beyadob')
      }}>NO</button>
      {/* complex */}
      <button onClick={() => whydidYou("don't ")}>WHAT</button>
    </>
  )
}

export default App
