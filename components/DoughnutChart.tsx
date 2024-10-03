"use client";

import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts}: DoughnutChartProps) => {
    const data = {
        datasets: [
        {
          label: "Balance",
          data: [500,1000,2000],
          backgroundColor: ['#019208', '#453214', '#912859']
        }
        ],
        labels: ['Bank1', 'Banck2', 'Bank3']
    }


    return (
        <Doughnut 
            data={data} 
            options={{
                cutout: '70%',
                plugins: {
                    legend:{
                        display: false
                    }
                }
            }}
        />
    )
}

export default DoughnutChart