import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from '../hooks/useForm';

export const FormCountry = ({ setCountries }) => {
    const [propertiesForm, handleOnChange, handleReset] = useForm({
        country: '',
        peoples: '',
    });

    const [errorMessage, setErrorMessage] = useState(null);

    const { country, peoples } = propertiesForm;


    const handleSave = (e) => {
        e.preventDefault();

        if (!country || country.length <= 0 || !peoples || peoples.length <= 0) {
            setErrorMessage('País y Habitantes es requerido');
            return;
        }

        console.log('Hola mundo', country, peoples);
        setCountries((countries) => [...countries, { country, peoples: Number(peoples) }]);
        handleReset();
        setErrorMessage(null);
    }


    return (
        <>
            <form onSubmit={(e) => handleSave(e, propertiesForm)}>
                <div className="form-group">
                    <label>Pais</label>
                    <input onChange={handleOnChange} value={country ? country : ''} name="country" className="form-control" type="text" placeholder="Escriba pais" autoComplete="off" />
                </div>
                <div className="form-group">
                    <label>Habitantes</label>
                    <input onChange={handleOnChange} value={peoples ? peoples : ''} name="peoples" className="form-control" type="number" placeholder="Escriba numero" autoComplete="off" />
                </div>
                <button className="btn btn-primary btn-block" type="submit">Nuevo pais</button>
                {errorMessage && <span className="text-danger">{`*${errorMessage}`}</span>}
            </form>
        </>
    )
}

FormCountry.propTypes = {
    setCountries: PropTypes.func.isRequired,
}


