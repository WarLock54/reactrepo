import React from "react";
import ToDoList from "./todolist";

const [ userInput, setUserInput ] = useState('');
<input value={userInput} type="text" onChange={handleChange} placeholder="Görev Gir"></input>
const handleChange=(e)=>{
    setUserInput(e.currentTarget.value)
}
const HandleSubmit=(e)=>{
e.preventDefault();
addTask(userInput);
setUserInput("");
}
const addTask=(userInput)=>{
    let copy=[...ToDoList];
    copy=[...copy,{id:ToDoList.length+1,task:userInput,complete:false}];
    setUserInput(copy);
}
export default addTask;