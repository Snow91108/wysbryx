import Welcome from "./components/Welcome"; 
import { Goodbye } from "./components/Goodbye";

export default function App() {
  const name = "Sachin"; 

  return (
    <div>
      <h1>Hello, {name} </h1>
      <Welcome name={name} />
      <Welcome name="John Snow" />
      <Goodbye />
    </div>
  );
}
