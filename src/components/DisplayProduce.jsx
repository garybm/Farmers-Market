import React from 'react';
import Produce from './Produce';
import availableProduce from '../model/seasonalProduce.js';


// console.log(availableProduce);
function DisplayProduce(){
  return(
    <div>
      <style jsx>{`
        div{
          padding:20px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 1%;
        }
        `}
      </style>
      {availableProduce.map((produce, index) =>
        <Produce month={produce.month}
          selection={produce.selection}
          key={index}/>
      )}
    </div>

  );
}

export default DisplayProduce;
