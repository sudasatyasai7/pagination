import React from 'react'
const pagination = ({data,submitHandler}) => {
    const page=[];
    for(let i=1;i<Math.ceil(data.length/10)+1;i++)
    {
        page.push(i);
    }
  return (
    <div>
        <center>
            {page.map(pa=><span onClick={()=>submitHandler(pa)}>{pa} &nbsp; &nbsp;</span>)}
        </center>
     
    </div>
  )
}

export default pagination
