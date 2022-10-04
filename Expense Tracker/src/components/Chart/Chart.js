import React from 'react';
import ChartBar from './ChartBar';
import './ChartBar'
import './Chart.css'
function Chart(props){
    const dataPointValues=props.data.map((dataPoint)=>dataPoint.value);
    const totalMax=Math.max(...dataPointValues);
    return <div className='chart'>
    {props.data.map((data)=> <ChartBar key={data.label} value={data.value} maxValue={totalMax} label={data.label}/>)}

    
    </div>

}

export default Chart;
