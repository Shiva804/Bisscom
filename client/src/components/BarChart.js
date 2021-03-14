import React from 'react'
import {Bar,Line} from 'react-chartjs-2'
const BarChart = () => {
    return(
        <div>
            
            <Line
            
             data={{
                labels: ['July','August','September','October','November','December'],
                datasets: [
                    {
                        label: ' retailer 1',
                        data: [123,87,145,134,121,90],
                        borderColor: 'Red',
                        
                        
                    },
                    {
                        label: 'retailer 2',
                        data: [98,99,65,111,101,119],
                        borderColor: 'Blue',
                        
                    },
                    {
                        label: ' retailer 3',
                        data: [134,89,130,150,90,76],
                        borderColor: 'Green',
                        
                    },
                ]
            }} 
            
            height={400}
            width={600}
            options={{
                maintainAspectRatio: false,
                scales: {
                    yAxes: [
                        {
                            ticks:{ beginAtZero: true}
                        }
                    ]
                }
            }}
            />
        </div>
    )
}

export default BarChart