import { useRef, useState } from "react";

export default function MyTask() {
    const [task, setTasks] = useState([{ task: "Call from HR", done: true }, { task: "Team Call at 9PM", done: false }]);
    const inRef = useRef();
    const [newTask, setnewTask] = useState("");

    function addTask(e) {
        e.preventDefault();
        if(!newTask.trim()) return;
        setTasks(prev => [...prev, {task:newTask, done:false}]);
        setnewTask("");
    }

    function deleteTask(index) {
        setTasks(prev => {
            let copy = [...prev];
            copy.splice(index, 1);
            return copy;
        })
    }

    const toggleTask = (id) => {
        setTasks(prev => prev.map((task, index) => 
            id === index ? { ...task, done: !task.done } : task
        ))
    }

    function addTaskFocus(){
        inRef.current.focus();
    }

    const tasksEle = task.map((t, index) => (
        <div className="flex gap-3 bg-[#263146] py-2 px-4 rounded-lg dark:text-white items-center justify-between" key={t.task}>
            <div className="flex gap-4">
                <input type="checkbox" onChange={() => toggleTask(index)} checked={t.done}/>
                <div className={t.done ? 'line-through dark:text-[#485c7e]' : ''}>{t.task}</div>
            </div>
            <span className="p-1 hover:bg-[#303e58] rounded-2xl cursor-pointer" onClick={() => deleteTask(index)}>
                <img src="https://img.icons8.com/?size=100&id=85194&format=png&color=D13D1F" alt="deleteIcon" className="size-4" />
            </span>
        </div>
    ));

    return (
        <div className="dark:bg-[#202a3b] shadow-md overflow-visible box-border flex flex-col p-6 gap-2 rounded-2xl ">
            <div className="flex justify-between items-center">
                <span className="text-lg text-[#7d7d80] dark:text-white font-medium">My Tasks</span>
                <span className="px-2 rounded-4xl dark:text-white dark:hover:bg-[#2a374d] flex justify-center items-center text-center text-xl cursor-pointer" onClick={addTaskFocus}>+</span>
            </div>
            <form className="flex justify-between mt-3 items-center dark:text-white gap-5" onSubmit={addTask}>
                <input type="text" value={newTask} className="py-1 px-2 w-full border border-[#495f85] rounded-md" ref={inRef} onChange={(e) => setnewTask(e.target.value)}/>
                <button className="py-2 px-4 bg-[#2a374d] rounded-xl cursor-pointer">Add</button>
            </form>
            <div className="mt-3 flex flex-col gap-3">{tasksEle}</div>
        </div>
    )
}