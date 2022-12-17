import React from 'react';

const CustomTooltip = ({active,payload,label}) => {
    if(active && payload && payload.length){
        return(
            <div className='d-flex flex-column p-4' style={{borderColor:"black", color:"black"}}>
                <p>{`${payload[0].dataKey} : ${payload[0].value}`}</p>
                <p>{`${payload[1].dataKey} : ${payload[1].value}`}</p>
                <p>{`Differences : ${payload[1].value - payload[0].value}`}</p>

            </div>
        )
    }
};

export default CustomTooltip;