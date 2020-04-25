import React, {useState, useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../service';

import styles from './CountryPicker.module.css';

interface CountryPickerProps {
    handleCountryChange: (country: any) => void
}

export function CountryPicker({ handleCountryChange }: CountryPickerProps) {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setCountries(await fetchCountries());
        }

        fetchData();
    }, [setCountries]);

    return (
        <FormControl className={styles.FormControl}>
            <NativeSelect defaultValue='' onChange={(event) => handleCountryChange(event.target.value)}>
                <option value=''>Global</option>
                {countries.map((country, index) => (
                    <option key={index} value={country}>{country}</option>
                ))}
            </NativeSelect>
        </FormControl>
    )
}