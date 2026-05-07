import { useState } from "react";

function TodoList(){
    const [tasks,setTasks] = useState([]);
    const [task, setTask] = useState("");

    function addTask(){
        if(task.trim()!==""){
            setTasks([...tasks,task]);
        }
        setTask("");
    }
    return(
        <>
            <input type="text" placeholder="enter you task" value={task} onChange={(e)=>setTask(e.target.value)}/>
            <button onClick={addTask}>Add task</button>

            {
                tasks.map((t,index)=>(
                    <div key={index}>
                        <h1>{t}</h1>
                    </div>
                ))
            }
        </>
    );
}

export default TodoList