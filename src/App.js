import './App.css';
import React, { useEffect, useState } from 'react';
import Table from './table/Table';
import axios from 'axios';

function App() {
  // 1. state/hook variable
  /* const unixTime = 165242593;
  const date = new Date(unixTime*1000);
  console. log(date.toLocaleDateString("en-US",{ year: 'numeric', month: "long", day: "numeric",weekday: "long",hour: '2-digit',minute: '2-digit', second: '2-digit' })); */
  const[data1,setData1] = useState([])
  useEffect(()=>{
    myFun();
   
  },[])
 
  

   

  // 2. function defination
  let myFun = async()=>{
    let po = await axios.get(`https://staging-api.dahmakan.com/test/orders?sort[0]=order_id&sort[1]=paid_withdesc`)
    console.log(po.data.orders)
    setData1(po.data.orders)
    .catch((error)=>{
      console.log(error)
    }) 
  }
  // 3. return statement
  
  return (
    <>
     {console.log("data.orders",data1)}
     
      <div className="App">
       
          
        <table>
          <thead>
            <tr>
              <th>order_id</th>
              <th>arrives_at_utc</th>
              <th>paid_with</th>
              <th>total_paid</th>
              
            </tr>
          </thead>
          <tbody>
            {
               data1.length > 0 && 
               data1.map((dt,idx,arr)=>{
              console.log("data1",dt.order_id);
              const unixTime = dt.arrives_at_utc	;
              const date = new Date(unixTime);
              const time =date.toLocaleDateString("en-US");
                return(
                  
                  <tr key={idx}>
                    <td >{dt.order_id}</td>
                    <td>{time}</td>
                    <td>{dt.paid_with}</td>
                    <td>{dt.total_paid}</td>
                  </tr>
                  
                )
             })
            }
             </tbody>
          </table> 
         
         
 
      </div>
    </>
  );
}

export default App;
