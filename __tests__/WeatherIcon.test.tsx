import React from 'react';
import 'react-native';
import { WeatherIconProps, WeatherIcon, icons, BLANK_ID } from '../src/components/WeatherIcon';
import { shallow, configure, mount, ShallowWrapper, render, } from 'enzyme';

describe("WeatherIcon", () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = { weatherID: 0 };
    wrapper = shallow(<WeatherIcon {...props} />);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders expected image for weatherID 0', () => {
    wrapper.setProps({ weatherID: 0 });
    wrapper.render();
    let iconSource = wrapper.find("Image").prop("source");
    expect(iconSource).toEqual(icons[0]);
  });

  it('renders expected update image for weatherID 25', () => {
    wrapper.setProps({ weatherID: 25 });
    let iconSource = wrapper.find("Image").prop("source");
    expect(iconSource).toEqual(icons[25]);
  });

  it('renders expected invalid image', () => {
    wrapper.setProps({ weatherID: -1 });
    let iconSource = wrapper.find("Image").prop("source");
    expect(iconSource).toEqual(icons[BLANK_ID]);
  });
});
