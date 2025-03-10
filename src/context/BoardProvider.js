import { useState } from "react";
import BoardContext from "./BoardContext";

export const BoardProvider = ({ children }) => {
  const boards = [
    {
      id: 1,
      title: "test 1",
      tasks: ["task 1", "task 2"],
    },
    {
      id: 2,
      title: "test 2",
      tasks: ["task 1", "task 2"],
    },
    {
      id: 3,
      title: "test 3",
      tasks: ["task 1", "task 2"],
    },
  ];

  // State for managing boards
  const [allBoard, setAllBoard] = useState(boards);

  // Function to add tasks
  const addTasks = (task) => {
    console.log("task --->", task);
    const newBoards = allBoard.map((ele) => {
      console.log("element --->", ele);
                                             // map is the function that will go to each task in a board  here ele is the each board
      if (ele.id === task.id) {
        return {
          ...ele,
          tasks: [...ele.tasks, "test Task 3"],
        };
      }
     
      return ele;
    });
    setAllBoard(newBoards);
    // console.log('Print newBoard', newBoards);
  };

  return (
    <BoardContext.Provider value={{ allBoard, addTasks }}>
      {children}
    </BoardContext.Provider>
  );
};
