import { shallow } from 'enzyme'
import { FormCountry } from '../../components/FormCountry';

import '@testing-library/jest-dom';

describe('Prueba componente FormCountry', () => {

    const setCountries = jest.fn();
    let wrapper = shallow(<FormCountry setCountries={setCountries} />);

    beforeEach(() => {
        wrapper = shallow(<FormCountry setCountries={setCountries} />);
    });

    test('Debe traer la foto del componente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Simula agregar nuevo pais', () => {
        const inputs = wrapper.find('input');
        //console.log(inputs.at(0).props());
        //console.log(inputs.at(1).props());

        const inputCountry = inputs.at(0);

        inputCountry.simulate('change', {
            target: {
                name: 'country',
                value: 'Canada',
            }
        });

        const inputPeoples = inputs.at(1);

        inputPeoples.simulate('change', {
            target: {
                name: 'peoples',
                value: 1000,
            }
        });

        // Formulario
        wrapper.find('form').simulate('submit', {
            preventDefault() { }
        });

        //expect(setCountries).toHaveBeenCalled();
        //expect(setCountries).toHaveBeenCalledWith(expect.any(Function));

    });


});
