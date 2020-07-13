import React from 'react';
import { Grid, Card, CardContent, Typography} from '@material-ui/core';
import CountUp from 'react-countup';

interface ContentProps {
    title: string,
    text: string
}

interface DataCardProps {
    value: number,
    date: string,
    content: ContentProps,
    className?: any
}

export function DataCard({value, date, content, className}: DataCardProps) {
    return (
        <Grid xs={12} md={3} item component={Card} className={className}>
            <CardContent>
                <Typography color='textSecondary' gutterBottom>{content.title}</Typography>
                <Typography variant='h5'>
                    <CountUp start={0} end={value} duration={2.5} separator=',' />
                </Typography>
                <Typography color='textSecondary'>{date}</Typography>
                <Typography variant='body2'>{content.text}</Typography>
            </CardContent>
        </Grid>
    )
}