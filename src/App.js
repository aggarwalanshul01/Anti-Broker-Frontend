import './App.css';
import React,{useState} from "react";
//import MainPage from './components/startingPage/MainPage';
import OurRouters from "./components/OurRouters";

export const IsG = React.createContext();
export const ServiceComp = React.createContext();

function App() {
  const [data, setdata] = useState(null);
  const [isGA, setisGA] = useState(0);
  const [CompS, setCompS] = useState(0);
  return (
    <div className="App">
      <IsG.Provider value={[isGA,setisGA]}>
        <ServiceComp.Provider value={[CompS, setCompS]}>
          <OurRouters data={data} setdata={setdata}/>
        </ServiceComp.Provider>
      </IsG.Provider>
    </div>
  );
}

export default App;
