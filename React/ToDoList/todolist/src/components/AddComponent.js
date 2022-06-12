import React ,{useState}from 'react'

const AddComponent = (props) => {
    
    const [tasks,setTasks]=useState([{name:"",flag:false,checked:false}]);
    const [newTask,setNewTask]=useState({name:"",flag:false,checked:false});
    const[checked,setChecked]=useState(false);
    const addTask=(e)=>{
        newTask.checked=checked
        setTasks(tasks => [
            ...tasks,
            newTask,
          ])
          tasks.forEach(element => {
            console.log(element)
          });
          props.addTa(newTask);
    }
    
    return (
        <>
            <button onClick={addTask} >Add</button> 
            <input type='checkbox' onChange={(e)=>{setChecked(e.target.checked)}} /> 
            <input type="text" onChange={(e)=>{setNewTask({name:e.target.value,flag:0,checked:checked})}}/>          
        </>
    )
}

export default AddComponent
