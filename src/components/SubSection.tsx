import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface SubSectionProps {
    title?: string
}

interface SubSectionState { }

export default class SubSection extends React.Component<SubSectionProps, SubSectionState> {
    constructor (props: SubSectionProps) {
        super(props);
    }

    render () {
        return (
            <View style={styles.container}>
                {this.props.title && this.props.title.length > 0 ?
                    <Text style={styles.headerText}>
                        {this.props.title}
                    </Text> :
                    <Text></Text>

                }
                {this.props.title && this.props.title.length > 0 ?
                    <View
                        style={styles.line}
                    /> : <View />
                }

                <View style={styles.viewGap} />

                {this.props.children}
            </View>
        );
    }
}

const low = require('../icons/system/ic_file_download_white_24dp_1x.png');
const high = require('../icons/system/ic_file_upload_white_24dp_1x.png');

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#0000006f',
        alignSelf: 'center',
        padding: 15,
        width: '95%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        marginBottom: 10,
        marginTop: 10,

    },
    headerText: {
        fontSize: 15,
        textAlign: 'left',
        color: 'white',
        marginBottom: 10,
    },
    line: {
        borderBottomColor: '#A8A7A6',
        borderBottomWidth: 1,
    },
    viewGap: {
        marginBottom: 10
    }
});