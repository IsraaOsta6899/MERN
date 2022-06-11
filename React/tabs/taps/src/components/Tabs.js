import React,{useState} from 'react'

const Tabs = (props) => {
    const [labelClass, setLabelClass] = useState("");
    const handelClock=(e,indx)=>{
        setLabelClass(props.tabs[indx])
        console.log(props.tabs[indx])
        props.fun(props.tabs[indx])


    }
    const activeTab={
            fontFamily: 'cursive',
            backgroundColor: 'black', 
            color: 'white',
            
        };
            const notActiveTab={
                fontFamily: 'cursive',
                backgroundColor: 'white', 
                color: 'black',
                
            };
    
    return (
        <div>
            {props.tabs.map((item,indx)=>{
                if(item==labelClass)
              return  <label key={indx} onClick={(e)=>handelClock(e,indx)} style={activeTab}>{item}</label>
              else
              return <label key={indx} onClick={(e)=>handelClock(e,indx)} style={notActiveTab}>{item}</label>
            })}
            
        </div>
    )
}

export default Tabs
