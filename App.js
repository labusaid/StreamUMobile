/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {ThemeProvider, Text, Input, Icon, Button, Image} from 'react-native-elements';
import {createStackNavigator, createAppContainer} from 'react-navigation';
// import Icon from 'react-native-vector-icons/FontAwesome';

//Platform specific code example
const currentPlatform = Platform.select({
    ios: 'ios',
    android: 'android',
});

//Theme defaults
const theme = {
    Text: {
        h1Style: {
            fontSize: 40,
            textAlign: 'center',
            margin: 10,
        },
        style: {
            color: 'white',
        },
    },
    Button: {
        buttonStyle: {
            borderRadius: 50,
        }
    }
};

//Login screen
class LoginScreen extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <View style={styles.container}>
                    {/*Logo*/}
                    <Image
                        source={require('./img/logo_white.png')}
                        style={{width: 200, height: 200}}
                    />
                    {/*Name*/}
                    <Text h1 h1Style={{marginTop: 0}}>StreamU</Text>
                    {/*Email*/}
                    <Input
                        leftIcon={{
                            type: 'font-awesome',
                            name: 'envelope-o',
                            color: 'white',
                        }}
                        leftIconContainerStyle={{marginRight: 10}}
                        placeholder="Email"
                        placeholderTextColor='grey'
                        inputStyle={{color: 'white'}}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        returnKeyType="next"
                        onSubmitEditing={() => {
                            this.password2Input.focus();
                        }}
                    />
                    {/*Password*/}
                    <Input
                        leftIcon={{
                            type: 'font-awesome',
                            name: 'lock',
                            color: 'white',
                        }}
                        leftIconContainerStyle={{paddingHorizontal: 4.2, marginRight: 10}}
                        placeholder="Password"
                        placeholderTextColor='grey'
                        inputStyle={{color: 'white'}}
                        autoCapitalize="none"
                        secureTextEntry={true}
                        autoCorrect={false}
                        keyboardType="default"
                        returnKeyType="done"
                        ref={input => (this.password2Input = input)}
                    />
                    <Button
                        title="Sign In"
                        onPress={console.log("sign in pressed")}
                        containerStyle={{margin: 20, width: 300}}
                    />
                    <Text>OR</Text>
                    <Button
                        title="Sign in with Twitch"
                        icon={{
                            name: 'twitch',
                            type: 'font-awesome',
                            size: 15,
                            color: 'white',
                        }}
                        iconLeft
                        iconContainerStyle={{marginHorizontal: 10}}
                        containerStyle={{margin: 20, width: 300}}
                    />
                    <View style={styles.cornerFlex}>
                        <Button
                            title="Forgot Details?"
                            titleStyle={{color: 'white'}}
                            type='clear'
                        />
                        <Button
                            title="Create Account"
                            titleStyle={{color: 'white'}}
                            type='clear'
                        />
                    </View>
                </View>
            </ThemeProvider>
        );
    }
}

//Home screen
class HomeScreen extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <View style={styles.container}>
                </View>
            </ThemeProvider>
        );
    }
}

//Navigation definitions
const AppNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen
    },
    Home: {
        screen: HomeScreen
    },
});

//App export
export default createAppContainer(AppNavigator);

//Stylesheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#555555',
    },
    cornerFlex: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#555555',
        width: 300,
    },
});
