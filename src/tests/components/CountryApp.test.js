import { shallow } from 'enzyme'
import { CountryApp } from '../../components/CountryApp';

import '@testing-library/jest-dom';

describe('Prueba componente CountryApp', () => {

    test('Debe traer la foto del componente', () => {
        const wrapper = shallow(<CountryApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe contener el componente FormCountry', () => {
        const wrapper = shallow(<CountryApp />);
        expect(wrapper.exists('FormCountry')).toBe(true);
    });

    test('Debe contener el componente TableCountry', () => {
        const wrapper = shallow(<CountryApp />);
        expect(wrapper.exists('TableCountry')).toBe(true);
    });

    test('FormCountry debe de tener la función setCountries', () => {
        const wrapper = shallow(<CountryApp />);
        expect(wrapper.find('FormCountry').prop('setCountries'))
            .toEqual(expect.any(Function));
    });

});
