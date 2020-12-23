import { shallow } from 'enzyme'
import { FormCountry } from '../../components/FormCountry';

import '@testing-library/jest-dom';

describe('Prueba componente FormCountry', () => {

    const handleSave = jest.fn();
    let wrapper = shallow(<FormCountry handleSave={handleSave} />);

    beforeEach(() => {
        wrapper = shallow(<FormCountry handleSave={handleSave} />);
    });

    test('Debe traer la foto del componente', () => {
        expect(wrapper).toMatchSnapshot();
    });

});
