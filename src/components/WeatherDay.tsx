import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WeatherIcon from './WeatherIcon';

interface WeatherDayProps {
    dayJSON: Object;
}

interface WeatherDayState { }

export default class WeatherDay extends React.Component<WeatherDayProps, WeatherDayState> {
    constructor (props: WeatherDayProps) {
        super(props);

    }

    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.dayText} >
                    {(this.props.dayJSON as any).day}
                </Text>

                <WeatherIcon weatherID={Number.parseInt((this.props.dayJSON as any).code)} />

                <View style={styles.tempsView}>
                    <Text style={styles.highText} >
                        {(this.props.dayJSON as any).high + '°'}
                    </Text>
                    <Text style={styles.lowText} >
                        {(this.props.dayJSON as any).low + '°'}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    lowText: {
        fontFamily: 'HelveticaNeueLTStd_Th',
        fontSize: 15,
        color: '#8FBFE8'
    },
    highText: {
        fontFamily: 'HelveticaNeueLTStd_Th',
        fontSize: 15,
        color: 'white',
        paddingRight: 15
    },
    dayText: {
        fontFamily: 'HelveticaNeueLTStd_Th',
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
        width: 100
    },
    tempsView: {
        display: 'flex',
        flexDirection: 'row',
    },
    container: {
        //paddingTop: 5,
        //paddingLeft: 10,
        //paddingRight: 10,

        //height: 150,

        display: 'flex',
        flexDirection: 'row',
        //width: '100%',
        alignContent: 'center',
        alignItems: 'center',
        //alignItems: 'center',
        justifyContent: 'space-between',
    },
});
