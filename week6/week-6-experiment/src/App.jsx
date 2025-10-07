import {useState} from "react";

function App() {
  const[title,setTitle]= useState("my name is john")

  function updateTitle() {
    setTitle("my name is "+ Math.random());
  }

  return (
    <div>
      <button onClick={updateTitle}>update the title</button>
      <Header title={title}></Header>
      <Header title="snow"></Header>
    </div>
  )
  
}

function Header({title}) {
  return <div>
    {title}
  </div>
    
}

export default App
