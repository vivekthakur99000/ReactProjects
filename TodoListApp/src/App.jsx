import React, { useState } from 'react';
import { FaChevronCircleRight } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask(""); // Clear the input field
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <>
      <div className="w-full h-screen bg-[#232323] flex items-center justify-center">
        <div className="w-xl h-[70%] bg-amber-100 rounded-[8px] p-4 flex justify-center items-center flex-col">
          <h2 className="text-black text-center font-bold text-2xl mb-4">
            To do List
          </h2>

          <div className="flex justify-center items-center gap-1 w-full">
            <input
              type="text"
              placeholder="Enter the task"
              className="w-[90%] p-2 bg-amber-50"
              id="task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button
              className="bg-[#232323] hover:bg-[#232323] text-white"
              onClick={handleAddTask}
            >
              <FaChevronCircleRight className="text-4xl cursor-pointer w-10 rounded-xs p-1 border-none outline-none active:outline-none active:border-none" />
            </button>
          </div>

          <div className="mt-2.5 flex flex-col gap-3">
            {tasks.length === 0 ? (
              <p className="text-black">No tasks available</p>
            ) : (
              tasks.map((task, index) => (
                <div key={index} className="flex justify-between items-center gap-3 bg-amber-50 p-2 rounded">
                  <p className="text-black">{task}</p>
                  <button
                    className="bg-[#232323] hover:bg-[#232323] text-white"
                    onClick={() => handleDeleteTask(index)}
                  >
                    <AiFillDelete className="text-2xl cursor-pointer w-10 rounded-xs" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
