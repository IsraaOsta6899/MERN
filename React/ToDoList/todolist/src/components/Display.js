import React,{useState} from 'react'

const Display = (props) => {
  console.log(props.tasks)
    const deleteThisTask=(e,i)=>{
      props.tasks[i].flag=true;
      props.fun([...props.tasks])
      
     
    }
    ;
    return (
        <div>
             {props.tasks.filter(task => task.flag==false).map( (item, i) => {
               
                if(item.checked==true){
               return<>  <p  style={{textDecoration:'line-through'}} key={ i }  >{ item.name }</p> 
                         <button onClick={(myEvent)=>{deleteThisTask(myEvent,i)}}>Delete</button></>

            
                }
                else{
                  return <> <p style={{textDecoration:'none'}} key={ i }  >{ item.name }</p>
                            <button onClick={(myEvent)=>{deleteThisTask(myEvent,i)}}>Delete</button></>

                }
                 }) }
        </div>
    )
}

export default Display
