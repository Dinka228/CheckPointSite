import React, {useContext} from 'react';
import {CartesianGrid,LineChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const Graphics = observer(({data}) => {
    const {points} = useContext(Context)
    const dataGraphic = []
    dataGraphic.push(JSON.parse((JSON.stringify(points.point1))))
    console.log(dataGraphic)
        return(
            <LineChart
                width={500}
                height={300}
                data={dataGraphic[0]}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Line  dataKey="point" stroke="#8884d8"/>
                <Line  dataKey="predictedPoint" stroke="#82ca9d"/>
            </LineChart>

        )
});

export default Graphics;