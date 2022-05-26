import './App.css';
import React, { useEffect, useState } from 'react';
import Table from './table/Table';

function App() {
  // 1. state/hook variable
  const unixTime = 165242593;
  const date = new Date(unixTime*1000);
  console. log(date.toLocaleDateString("en-US",{ year: 'numeric', month: "long", day: "numeric",weekday: "long",hour: '2-digit',minute: '2-digit', second: '2-digit' }));
  const[data1,setData1] = useState([])
  useEffect(()=>{
    fetch(`https://staging-api.dahmakan.com/test/orders?sort[0]=order_id&sort[1]=paid_withdesc`)
    .then((response)=>{
      return response.json();
    }).then((response)=>{
      console.log(response)
      setData1(response)
     
      console.log(response)
    }).catch((error)=>{
      console.log(error)
    })
  },[])

   /*  const data = React.useMemo(()=>[
    {
       
      arrives_at_utc: data1.orders,
      order_id: data1.orders,
      paid_with: data1.orders,
      total_paid: data1.orders
    },
    {

    }
  ],[]); */
  /* const columns = React.useMemo(()=>[
    {
     heading:'order_id',
     value:'order_id'
    },
    {
      heading:'arrives_at_utc',
      value:'arrives_at_utc'
     },
     {
      heading:' paid_with',
      value:' paid_with'
     },
     {
      heading:' total_paid',
      value:' total_paid'
     },
  ],[])  */

  // 2. function defination
  // 3. return statement
  
  return (
    <>
    {console.log('my new:-', data1.orders)}
     
      <div className="App">
        {/* <Table  data={data1} columns={columns}/>  */}
           
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
              data1.length &&
             data1.map((data1,idx,arr)=>{
              console.log(arr[idx]);
                return(
                  <>
                  <tr >
                    <td key={idx}>{data1.order_id}</td>
                    <td>{data1.arrives_at_utc}</td>
                    <td>{data1.paid_with}</td>
                    <td>{data1.total_paid}</td>
                  </tr>
                  </>
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
