import { useState } from 'react';

export const useForm = ({ initialState = {} }) => {
    const [values, setValues] = useState(initialState);

    const handleOnChange = ({ target }) => {
        //console.log(values);
        //console.log(target);
        setValues({
            ...values,
            [target.name]: target.value
        });
    }

    const handleReset = () => {
        setValues(initialState);
    }

    return [values, handleOnChange, handleReset];
}
