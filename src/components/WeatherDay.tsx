import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import WeatherIcon from './WeatherIcon';

interface WeatherDayProps {
    dayJSON: Object;
}

interface WeatherDayState { }

export default class WeatherDay extends React.Component<WeatherDayProps, WeatherDayState> {

    constructor (props: WeatherDayProps) {
        super(props);
    }
    protected dayTable: { [name: string]: string } = {
        'Mon': 'Monday',
        'Tue': 'Tuesday',
        'Wed': 'Wednesday',
        'Thu': 'Thursday',
        'Fri': 'Friday',
        'Sat': 'Saturday',
        'Sun': 'Sunday'
    };

    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.dayText} >
                    {
                        this.dayTable[((this.props.dayJSON as any).day as string)]
                    }
                </Text>

                <View style={styles.weatherIcon}>
                    <WeatherIcon weatherID={Number.parseInt((this.props.dayJSON as any).code)} />
                </View>

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
        fontFamily: (Platform.OS === 'ios') ? 'Helvetica Neue LT Std' : 'HelveticaNeueLTStd_Th', // Helvetica Neue LT Std 35 Thin -- Weight 100
        fontSize: 15,
        color: '#8FBFE8',
    },
    highText: {
        fontFamily: (Platform.OS === 'ios') ? 'Helvetica Neue LT Std' : 'HelveticaNeueLTStd_Th', // Helvetica Neue LT Std 35 Thin -- Weight 100
        fontWeight: '100',
        fontSize: 15,
        color: 'white',
        paddingRight: 15,
    },
    dayText: {
        fontFamily: (Platform.OS === 'ios') ? 'Helvetica Neue LT Std' : 'HelveticaNeueLTStd_Lt', // Helvetica Neue LT Std 45 Light -- Weight 300
        fontSize: 15,
        textAlign: 'left',
        color: 'white',
        width: 100
    },
    tempsView: {
        display: 'flex',
        flexDirection: 'row',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 30,
    },
    weatherIcon: {
        position: 'absolute',
        width: '100%',
        //display: 'flex',
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
    }
});
