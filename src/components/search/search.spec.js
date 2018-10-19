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

    it("should render the supplied title", () => {
        const wrapper = shallow(<Search searchTitle="Test text"/>);
        expect(wrapper.find('.search-title').render().text()).toEqual("Test text");
    })

    it("should render the input", () => {
        const wrapper = shallow(<Search />);
        expect(wrapper.find('.search-input')).toBeDefined();
    })

    // it("should accept input", () => {
    //     const wrapper = shallow(<Search />);
    //     wrapper.find('input').simulate('change', {
    //         target: { value: 'abcde' }
    //     })
    //     expect(wrapper.find('.search-input').render().value).toEqual('abcde');
    // });


});