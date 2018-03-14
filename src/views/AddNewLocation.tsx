import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Modal } from 'react-native';
import { store, WeatherAppStore } from '../store/WeatherAppStore';
import { setLocationWindowVisible } from '../actions/ShowNewLocationAction';
import { addLocation } from '../actions/AddLocationAction';
import { connect, Provider } from 'react-redux';

interface AddNewLocationProps {
    visible: boolean;
}

interface AddNewLocationState {
    //modalVisible: boolean,
    inputText: string;
}

function mapStateToProps (storeState: WeatherAppStore.Stores): WeatherAppStore.ShowNewLocationStore {
    return {
        visible: storeState.ShowNewLocationStore.visible,
    };
}

class AddNewLocationRedux extends React.Component<AddNewLocationProps, AddNewLocationState> {
    constructor (props: AddNewLocationProps) {
        super(props);
        this.state = { inputText: '' };
    }
    processLocation (text: string) {
        let zipcode = Number.parseInt(text);
        let isNumber = !Number.isNaN(zipcode);

        if (isNumber && (zipcode as number).toString() === text && text.length === 5) {
            this.setState({ inputText: '' });
            store.dispatch(addLocation(zipcode.toString()));
            store.dispatch(setLocationWindowVisible(false));
            // add zipcode to the store.
            // then hide the modal because we added one successfully
            //this.state = { modalVisible: false };
            return;
        }
        this.setState({ inputText: text });
        // TODO: set timer to change inputext back to nothing in a few seconds?
    }
    render () {
        return (
            <Provider store={store}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.props.visible}
                    onRequestClose={() => {
                        //alert('Modal has been closed.');
                        store.dispatch(setLocationWindowVisible(false));
                    }}>

                    <View style={styles.container}>
                        <TextInput
                            style={styles.textInput}
                            editable={true}
                            placeholder="Enter the City or ZIP code"
                            placeholderTextColor="white"
                            //inlineImageLeft
                            //onChangeText={(text) => this.setState({ something: text })}
                            clearTextOnFocus={true}
                            onSubmitEditing={(event) => this.processLocation(event.nativeEvent.text)}
                        >

                        </TextInput>

                        <View style={{ padding: 15 }}>
                            <Text style={{ fontSize: 15, color: 'white' }}>
                                {
                                    (this.state.inputText.length > 0) ? 'Invalid zipcode ' + this.state.inputText : ' '
                                }
                            </Text>
                        </View>
                    </View>

                </Modal>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',

        backgroundColor: '#272627',
    },
    textInput: {
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
        backgroundColor: '#272627',
        color: 'white',

    },
    textLeft: {
        color: 'white',
        textAlign: 'left',
        fontFamily: 'HelveticaNeueLTStd_Lt',
        fontSize: 12,

    },
    textRight: {
        color: 'white',
        textAlign: 'right',
        fontFamily: 'HelveticaNeueLTStd_Lt',
        fontSize: 12,
    },
    line: {
        borderBottomColor: '#AFAFAC64',
        borderBottomWidth: 1,
        marginTop: 5,
        marginBottom: 5,
    },

});

const AddNewLocation = connect(mapStateToProps)(AddNewLocationRedux);
export default AddNewLocation;
