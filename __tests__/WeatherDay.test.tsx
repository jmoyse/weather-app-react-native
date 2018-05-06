import React from 'react';
import 'react-native';
import WeatherDay from '../src/components/WeatherDay';
import { shallow, configure, mount, ShallowWrapper, render, } from 'enzyme';

describe("WeatherDay", () => {
    let props = {
        dayJSON: {
            "code": "26",
            "date": "06 May 2018",
            "day": "Sun",
            "high": "33",
            "low": "29",
            "text": "Cloudy"
        }
    };
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<WeatherDay {...props} />);
    });

    it('matches snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('renders text properly', () => {
        const dayText = wrapper.find('Text').get(0).props.children.toString();
        const highText = wrapper.find('Text').get(1).props.children.toString();
        const lowText = wrapper.find('Text').get(2).props.children.toString();

        expect(dayText).toEqual('Sunday');
        expect(highText).toEqual('33°');
        expect(lowText).toEqual('29°');
    });

    it('renders refreshes properly', () => {
        props.dayJSON.high = "34";
        props.dayJSON.low = "24";
        props.dayJSON.day = "Fri";

        wrapper.setProps({ ...props });

        const dayText = wrapper.find('Text').get(0).props.children.toString();
        const highText = wrapper.find('Text').get(1).props.children.toString();
        const lowText = wrapper.find('Text').get(2).props.children.toString();

        expect(dayText).toEqual('Friday');
        expect(highText).toEqual('34°');
        expect(lowText).toEqual('24°');
    });
});
