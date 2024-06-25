import React from 'react';
import {Pie} from 'react-chartjs-2';

interface PieChartProps {
    data: {
        labels: string[];
        datasets: {
            label: string;
            data: (number | undefined)[] ;
            backgroundColor: string[];
        }[];
    };
}


export const PieChart: React.FC<PieChartProps> = ({ data }) => {
    return (
        <div>
            <Pie data={data}/>
        </div>
    );
};


