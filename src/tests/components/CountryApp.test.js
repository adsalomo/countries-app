import { shallow } from 'enzyme'
import { CountryApp } from '../../components/CountryApp';

import '@testing-library/jest-dom';

describe('Prueba componente CountryApp', () => {

    const wrapper = shallow(<CountryApp />)

    test('Debe traer la foto del componente', () => {
        expect(wrapper).toMatchSnapshot();
    });


});
