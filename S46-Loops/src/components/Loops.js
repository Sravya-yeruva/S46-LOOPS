import React from 'react'

function Loops() {
  return (
    <div>
      <h1 className='head'>Loops</h1>
      <hr></hr>
      <button onClick={()=>{
        let a=1;
        while(a<1000){
            console.log(`${'a'}`);
            a++;
        }
      }}>While</button>
      <button onClick={()=>{
        let money=1000;
        do{
          console.log("Eat Biryani");
          money--;
          console.log(money);
          
        }
        while(money>400);
      }}>Do While</button>
      <button onClick={()=>{
        for(let i=1; i<=567; i++){
          console.log(i);

        }

      }}>For Loop</button>
      <button onClick={()=>{
        for( let i=1; i<=10; i++){
          console.log(i);
          for(let j=1; j<=10; j++){
            console.log(`${i}--->${j}`);
          }
        }
      }}>Nested Loop</button>
      <button onClick={()=>{
        for(let i=1; i<10000; i++){
          console.log(i);
          if(i==300){
            break;
          }
        }
      }}>Break</button>
      <button onClick={()=>{
        for(let i=1; i<=1000; i++){
          if(i>99 && i<999){
            continue;
          }
          console.log(i);
        }
      }}>Continue</button>
      <button onClick={()=>{
        for(let i=1; i<=500; i++){
          for(let j=1; j<=100; j++){
            console.log(`${i} * ${j}=${i*j}`);
          }
        }
      }}>Tables</button>
    </div>

  )
}

export default Loops
