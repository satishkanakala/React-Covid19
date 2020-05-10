import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {getCountries} from '../../api';

const CountryPicker = ({handelCountryChange}) => {

   const [fetchedCountries,setfetchedCountries] = useState([]);

   useEffect(() => {
       const fectCountries = async () =>{
           setfetchedCountries(await getCountries())
       }
       fectCountries();
   },[setfetchedCountries])

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handelCountryChange(e.target.value)}>
                <option value="">Select Country</option>
                {fetchedCountries.map((country,i)=> <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;