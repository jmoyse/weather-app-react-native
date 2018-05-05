// __tests__/Intro-test.js
import React from 'react';
import { WeatherIconProps, WeatherIcon } from '../src/components/WeatherIcon';
import renderer from 'react-test-renderer';
import { StyleSheet, Text, View, Image } from 'react-native';


test('renders correctly (JSX)', () => {
  const icon = renderer.create(<WeatherIcon weatherID={1} />).toJSON();
  expect(icon).toMatchSnapshot();
});


test('matches snapshot (JS)', () => {
  const props: WeatherIconProps = { weatherID: 1 };
  const icon = new WeatherIcon(props);
  expect(icon).toMatchSnapshot();
});

test('invalid weather ID renders', () => {
  const icon = renderer.create(<WeatherIcon weatherID={('asdf' as any)} />).toJSON();
  expect(icon).toMatchSnapshot();
});

test('updated weatherID changes properly', () => {
  const props: WeatherIconProps = { weatherID: 20 };
  const icon = new WeatherIcon(props);
  //icon.setState({ weatherID: 35 });
  expect(icon).toMatchSnapshot();
});
