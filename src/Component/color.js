import React from 'react';
export default function Color(){
    const[color,setColor]=React.useState('#fff')
    const getColor=()=>{
        const randomColor='#'+ Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor=randomColor;
        setColor(randomColor);
    };
    return(
        <div>
            <h1>Color Generator</h1>
            <div className='firstclass'>
                <h2 className='third'>{color}</h2>
               <button onClick={getColor} className='yeahcolor'>Generate Color</button>
            </div>
        </div>
    );
};







