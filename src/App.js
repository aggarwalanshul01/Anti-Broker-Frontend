import './App.css';
import React,{useState} from "react";
//import MainPage from './components/startingPage/MainPage';
import OurRouters from "./components/OurRouters";

function App() {
  const [data, setdata] = useState(null);
  return (
    <div className="App">
      <OurRouters data={data} setdata={setdata}/>
    </div>
  );
}

export default App;
