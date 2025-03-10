import React, { useContext } from "react";
import BoardContext from "./context/BoardContext";

function App() {
  // Access state and function from context
  const { allBoard, addTasks } = useContext(BoardContext);

  return (
    <div className="App" >
      {allBoard.map((ele) => (     //{} allow you to write the javascript inside jsx
        <div                       //create a container for each board.
          key={ele.id}            // unique id is required when rendering list in react
          style={{                //style  of each board
             border: "1px solid black",
            width: 300,
             height: 300,
            padding: 10,
             margin: 10,
            
          }}
        >
          <p>{ele.title}</p>
          <button onClick={() => addTasks(ele)}>Add</button>  
                                              {/* It passes the entire board object (ele) as an argument to addTasks. */}
          {ele.tasks.map((task, index) => (    //task represent the current task being  process and index-the positio of the task in the array
            <p key={index}>{task}</p>
          ))}
        </div>
      ))}
    </div>




























































  );
}

export default App;


{/* <div>
  <p>Board 1</p>
  <button>Add</button>
  <p>Task A</p>
  <p>Task B</p>
</div>
<div>
  <p>Board 2</p>
  <button>Add</button>
  <p>Task C</p>
  <p>Task D</p>
</div> */}
