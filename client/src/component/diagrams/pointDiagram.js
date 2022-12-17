import React, {useContext, useEffect} from 'react';
import {Bar,BarChart, CartesianGrid, Tooltip, XAxis, YAxis} from "recharts";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import CustomTooltip from "./customTooltip";

const PointDiagram = observer(() => {
    const {points} = useContext(Context)
    const dataGraphic = []
    points.point1.filter(point=>{
        if(+point.projectId === +points.currProject.id && +point.strategyId === +points.currStrategy.id){
            console.log(point)
            dataGraphic.push(JSON.parse((JSON.stringify(point))))
            console.log(dataGraphic)
        }
    })
    console.log(dataGraphic)
    return (
        <BarChart width={450} height={200} data={dataGraphic}>
            <XAxis dataKey="name" stroke="#8884d8" style={{fontSize:12}}/>
            <YAxis />
            <Tooltip content={<CustomTooltip/>}/>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="point" fill="#8884d8" barSize={15} />
            <Bar dataKey="predictedPoint" fill="#8884d8" barSize={15} />
        </BarChart>
    );
})

export default PointDiagram;