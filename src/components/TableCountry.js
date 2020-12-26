import React from 'react';
import PropTypes from 'prop-types';

export const TableCountry = ({ countries }) => {
    console.log('TableCountry');

    return (
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
                    countries && countries.length > 0
                    && countries.map(({ country, peoples }, i) => {
                        return <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{country}</td>
                            <td>{peoples}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

TableCountry.propTypes = {
    countries: PropTypes.array.isRequired,
}
