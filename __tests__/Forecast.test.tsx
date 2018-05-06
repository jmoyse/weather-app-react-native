import React from 'react';
import 'react-native';
import Forecast from '../src/views/Forecast';
import { shallow, configure, mount, ShallowWrapper, render, ReactWrapper, } from 'enzyme';

describe("Forecast", () => {
    const feed = require('./data/weather.json');
    let props;
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        props = { forecastJson: (feed as any).query };
        wrapper = shallow(<Forecast {...props} />);
    });

    it('render matches snapshot', () => {
        wrapper.setProps({ ...props });
        expect(wrapper).toMatchSnapshot();
    });

    it('updated render matches snapshot', () => {
        let updatedWeather = {
            "code": "1",
            "date": "01 May 2015",
            "day": "Mon",
            "high": "0",
            "low": "999999",
            "text": "Sunny"
        };

        props.forecastJson.results.channel.item.forecast[0] = updatedWeather
        wrapper.setProps({ ...props });
        expect(wrapper).toMatchSnapshot();
    });

    it('new low temp is found', () => {
        let updatedWeather = {
            "code": "20",
            "date": "01 May 2000",
            "day": "NEW_DAY",
            "high": "000000",
            "low": "999999",
            "text": "UPDATE_TEXT"
        };

        props.forecastJson.results.channel.item.forecast[0] = updatedWeather
        wrapper.setProps({ ...props });

        let found = wrapper.html().toString().indexOf("999999") >= 0;
        expect(found).toBeTruthy();
    });
});
