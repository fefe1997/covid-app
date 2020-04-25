import React from 'react';
import { Grid } from '@material-ui/core';
import { DataCard } from '../DataCard/DataCard';
import clsx from 'clsx';

import styles from './Cards.module.css';

interface CardsProps {
    data: any
}

const contents = {
    infected: {
        title: 'Infected',
        text: 'Number of active cases of COVID-19'
    },
    recovered: {
        title: 'Recovered',
        text: 'Number of recoveries from COVID-19'
    },
    deaths: {
        title: 'Deaths',
        text: 'Number of deaths caused by from COVID-19'
    }
}

export function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }: CardsProps) {
    if (!confirmed) {
        return <div>Loading...</div>
    }

    const date = new Date(lastUpdate).toDateString();

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                <DataCard 
                    className={clsx(styles.card, styles.infected)} 
                    value={confirmed.value} 
                    date={date} 
                    content={contents.infected}
                />
                <DataCard 
                    className={clsx(styles.card, styles.recovered)} 
                    value={recovered.value} 
                    date={date} 
                    content={contents.recovered} 
                />
                <DataCard 
                    className={clsx(styles.card, styles.deaths)} 
                    value={deaths.value} 
                    date={date} 
                    content={contents.deaths} 
                />
            </Grid>
        </div>
    )
}