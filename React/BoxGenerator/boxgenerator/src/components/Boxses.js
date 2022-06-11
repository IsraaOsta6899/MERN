import React  from 'react'

const Boxses = (props) => {
    return (
      
        <div>
        <div >
            { props.colors1.map( (item, i) => 
                <p  key={ i } style={{width:'200px',height:'200px',margin:'10px',color:item,backgroundColor:item}} >{ item }</p> ) }
        </div>
        </div>
       
         
    )
}

export default Boxses
