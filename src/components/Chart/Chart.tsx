import React, {useState, useEffect} from 'react';
import { fetchDailyData } from '../../service';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

interface ChartProps {
    data: any,
    country: string
}
export function Chart({ data, country}: ChartProps) {

    const [dailyData, setDailyData] = useState([]);
    const {confirmed, recovered, deaths} = data;

    useEffect(() => {
        const fetchData = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchData();

    }, []);

    const lineGraph = (
        dailyData.length ? <Line
            data={{
                labels: dailyData.map(({date}) => date),
                datasets: [
                    {
                        data: dailyData.map(({confirmed}) => confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true
                    },
                    {
                        data: dailyData.map(({deaths}) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        fill: true
                    }
                ]
            }}
        /> : null
    )

    const barChart =(
        data.confirmed ? <Bar
            data={{
                labels: [ 'Infected', 'Recovered', 'Deaths' ],
                datasets: [{
                    label: 'People',
                    backgroundColor: [
                        'rgba( 0, 0, 255, 0.5)',
                        'rgba( 0, 255, 0, 0.5',
                        'rgba( 255, 0, 0, 0.5)'
                    ],
                    data: [confirmed.value, recovered.value, deaths.value]
                }]
            }}
            options={{
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: `Current state in ${country}`
                }
            }}
        /> : null
    )

    return (
        <div className={styles.container}>
            {country ? barChart : lineGraph}
        </div>
    )
}