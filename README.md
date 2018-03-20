

![Screenshot](https://raw.githubusercontent.com/jmoyse/weather-app-react-native/master/src/screenshot/screenshot1.png)

# React Native Weather App

## About
Basic weather app written in React Native. The application is feature complete copy of the official Yahoo Weather application for Android and iOS.  Implements most of the functionality of the original application with the exception of alerts sent to the user. Designed to copy and look and full as much as possible.

Android binaries available in the build folder.

Uses the following technologies:
* React
* React-Native
* Typescript
* Redux
* React-Redux

## Installation
1. Run `npm install`
2. Run `npm start`
3. Run `npm run android` or npm run windows
4. Metro bundler runs on port localhost:8081. Point a emulator or phone to the address to run.

## Publishing
1. Run `npm run deploy`
2. `cd android`
3. Run `gradlew assembleRelease`
4. APK will build to `android\app\build\outputs\apk\app-release-unsigned.apk`


## Data
+ Weather data provided by [Yahoo Weather API](https://developer.yahoo.com/weather/)
+ Background images from [getwallpapers.com](http://getwallpapers.com/)
+ Icons from "Fine Weather Forecast Icon Png" from [gofreedownload.com](http://gofreedownload.net/free-icon/icons/fine-weather-forecast-icon-png-234435/)





