import React from 'react';
import { shallow } from 'enzyme';

import Search from './search';

describe('<Search />', () => {

    it("Should render the search component", () => {
        const wrapper = shallow(<Search />);
        expect(wrapper).toMatchSnapshot();
    });

    it("should render the title", () => {
        const wrapper = shallow(<Search />);
        expect(wrapper.find('.search-title')).toBeDefined();
    })

    it("should render the input", () => {
        const wrapper = shallow(<Search />);
        expect(wrapper.find('.search-input')).toBeDefined();
    })


});