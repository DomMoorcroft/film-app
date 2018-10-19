import React from 'react';
import { shallow } from 'enzyme';

import FilmList from './filmList';

describe('<FilmList />', () => {

    const testResults = [{"vote_count":46,"id":45781,"video":false,"vote_average":3.9,"title":"Hole in One","popularity":2.275,"poster_path":"/o4S4P0AOf3VX4oIwNpxPu9mxEA.jpg","original_language":"en","original_title":"Hole in One","genre_ids":[35],"backdrop_path":"/px4w4mZ3mdEr9SKL7NOKsaND1lK.jpg","adult":false,"overview":"Eric, a highly-gifted golfer but radically-undisciplined college undergrad, finds his world drastically altered after losing a golf bet to a pair of sadistic plastic surgeons. Eric's bad-boy attitude lifestyle comes to a screeching halt as he loses his money, his girlfriend, his dignity and his golf swing. Eric and his best friend Tyler decide to take on the doctors, in a final golf match of \"Best-Ball\" to get his life back and become the man he should have been all along.","release_date":"2010-09-10"},{"vote_count":146,"id":176983,"video":false,"vote_average":7.3,"title":"One Piece Film Z","popularity":7.162,"poster_path":"/xEtU6BGHlI4YRkTqUuaqR5u2V9J.jpg","original_language":"ja","original_title":"One Piece Film Z","genre_ids":[28,12,16],"backdrop_path":"/xQuPNX2RIgLV54fmDuLgDgPWwna.jpg","adult":false,"overview":"Zephyr, now known as Z, rides the seas with only one goal: Destroy all pirates and their dreams at becoming King of Pirates. When Luffy and his crew encounter him at sea, not only are they utterly defeated by the man with an arm made of Seastone, Nami, Robin, and Chopper are turned 10 years younger due to Z's minion Ain. Luffy is so determined to win against him that he does not even notice Z's master plan that could sacrifice thousands of lives.","release_date":"2012-12-15"},{"vote_count":111,"id":41498,"video":false,"vote_average":7.5,"title":"One Piece Film Strong World","popularity":9.215,"poster_path":"/3JCslmRXlCNXiShbeicNdTN1Jcs.jpg","original_language":"ja","original_title":"ONE PIECE FILM STRONG WORLD","genre_ids":[16,14,12],"backdrop_path":"/zdrcfKzIYLTLAX6nuLuwMpbqhA1.jpg","adult":false,"overview":"20 years after his escape from Impel Down, the legendary pirate Shiki, the Golden Lion, reappears causing massive upheaval to the Marines. During his long seclusion, he was able to come up with a scheme to bring the World Government to his knees. On his way to execute the plan, Shiki crosses paths with the Straw Hat Pirates and becomes so impressed with Nami's knowledge of meteorology that he abducts her to forcedly enlist her into his crew. Luffy and the gang end up on a strange land populated with monstrous beasts as they desperately search for Shiki and Nami.","release_date":"2009-12-12"}]
    const wrapper = shallow(<FilmList filmResults={testResults}/>);

    it("should render the FilmList component", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should render the FilmList component and have the correct amount of items", () => {
        expect(wrapper.find('Film')).toHaveLength(testResults.length);
    });

});

