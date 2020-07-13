import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './service';

import styles from './App.module.css';
import coronaImage from './images/image.png';

export default class App extends Component {
    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const data = await fetchData();

        this.setState({data});
    }

    handleCountryChange = async (country: any) => {
        const data = await fetchData(country);

        this.setState({data, country});
    }

    render() {
        const {data, country} = this.state;

        return (
                <div className={styles.container}>
                    <img className={styles.image} src={coronaImage} alt='COVID-19' />
                    <Cards data={data} />
                    <CountryPicker handleCountryChange={this.handleCountryChange}/>
                    <Chart data={data} country={country} />
                </div>
            )
        }
}