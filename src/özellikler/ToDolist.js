import React from "react";
import ToDo from ".\src\özellikler\ToDolist.js";

 const ToDoList = ({toDoList, handleToggle, HandFiltre}) => {
    const HandFiltre=()=>{
        let filtre=toDoList.filter(
            task=>{
                return !task.complete
            }
        );
        setToDoList(filtered);
         }
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} HandFiltre={HandFiltre}/>
                )
            })}
            <button style={{margin: '20px'}} onClick={HandFiltre}>TAMAMLANDI</button>
        </div>

    );
 };


export default ToDoList;