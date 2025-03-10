
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { BoardProvider } from "./context/BoardProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BoardProvider>
    <App />
  </BoardProvider>
);

//-------------------another method for board provider-----------


  /*
import React,{ useContext ,useState } from "react"

import  BoardProvider  from "./context/BoardProvider";
import App from './App';

function App(){

const [count,setCount]=useState(0)

return (

<BoardProvider>
    <App />
  </BoardProvider>


)
}
export default App

*/















