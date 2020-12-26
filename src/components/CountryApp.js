import React, { useEffect, useState } from 'react';
import { getCountries } from '../helpers/getCountries';
import { FormCountry } from './FormCountry';
import { TableCountry } from './TableCountry';

export const CountryApp = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries().then(resp => {
            setCountries(resp);
        });
    }, []);


    return (
        <>
            <h1>Countries App</h1>
            <hr />

            <FormCountry
                setCountries={setCountries}
            />

            <TableCountry countries={countries} />
        </>
    )
}
