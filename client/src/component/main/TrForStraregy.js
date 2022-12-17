import React, {useContext} from 'react';
import {Context} from "../../index";

const TrForStrategy = ({strategy}) => {
    const {points} = useContext(Context)
    return (
        <tr className="fw-normal">
            <td className="align-middle">
                <span style={{color:"black", cursor:"pointer"}} onClick={()=>{
                    points.setCurrStrategy(strategy)
                    points.setShowPoint(true)
                }}>{strategy.name}</span>
            </td>
        </tr>
    );
};

export default TrForStrategy;