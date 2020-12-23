import React, { useEffect, useState } from 'react';
import { getCountries } from '../helpers/getCountries';
import { FormCountry } from './FormCountry';

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

            {/*Esta tabla se puede realizar en un componente independiente, con esto se facilita 
            la lectura de este componente
            Por temas de tiempo no se realiza*/}

            <table className="table mt-3">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Número habitantes</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        countries && countries.length > 0 && countries.map(({ country, peoples }, i) => {
                            return <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{country}</td>
                                <td>{peoples}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
