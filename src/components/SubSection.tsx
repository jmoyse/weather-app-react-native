import * as React from 'react';
import { StyleSheet, Dimensions, Text, View, TextInput, Image, ViewPagerAndroid, StatusBar, ToolbarAndroid, WebView } from 'react-native';

interface SubSectionProps { }

interface SubSectionState { }

export default class SubSection extends React.Component<SubSectionProps, SubSectionState> {
    constructor (props: SubSectionProps) {
        super(props);
    }

    render () {
        return (
            <View style={styles.container}>
                {this.props.children}
            </View>
        );
    }
}

const low = require('../icons/system/ic_file_download_white_24dp_1x.png');
const high = require('../icons/system/ic_file_upload_white_24dp_1x.png');


const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
});