import React from 'react';
import { shallow } from 'enzyme';

import Film from './film';

describe('<Film />', () => {

    const testObject = {
        "image" : "test",
        "title" : "test",
        "overview" : "test",
        "vote_average" : "test",
        "release_date" : "test"
    };

    const wrapper = shallow(<Film title={testObject.title} vote_average={testObject.vote_average} overview={testObject.overview} image={testObject.poster_path} release_date={testObject.release_date}/>);

    it("should render the film component with parameters", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should render the card", () => {
        expect(wrapper.find('.card')).toBeDefined();
    });

    it("should render the image", () => {
        expect(wrapper.find('img')).toBeDefined();
    });

    it("should render the film title", () => {
        expect(wrapper.find('.card-info h3')).toBeDefined();
    });

    it("should render the film description", () => {
        expect(wrapper.find('.card-info-desc')).toBeDefined();
    });

    it("should render the films rating", () => {
        expect(wrapper.find('#cardInfoRating')).toBeDefined();
    });

    it("should render the films release date", () => {
        expect(wrapper.find('#cardIntoReleaseDate')).toBeDefined();
    });

});