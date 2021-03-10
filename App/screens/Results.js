import React, { useRef, useEffect, Component } from 'react';
import { View, StyleSheet, StatusBar, Text, SafeAreaView, TouchableOpacity, Animated } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#36B1F0',
        flex: 1,
        paddingHorizontal: 20,
    },
    safearea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 20,
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 75,
        width: 200,
    },
    text: {
        color: '#fff',
        fontSize: 25,
        textAlign: 'center',
        letterSpacing: -0.02,
        fontWeight: '600',
    },
    scoretext: {
        color: '#fff',
        fontSize: 50,
        textAlign: 'center',
        letterSpacing: -0.02,
        fontWeight: '600',
        marginTop: 15,
        marginBottom: 20,
    },
    buttontext: {
        color: '#fff',
        fontSize: 35,
        textAlign: 'center',
        letterSpacing: -0.02,
        fontWeight: '600',
    },
});


const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 1000,
            }
        ).start();
    }, [fadeAnim])

    return (
        <Animated.View                 // Special animatable View
            style={{
                ...props.style,
                opacity: fadeAnim,
                useNativeDriver: true,         // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
}

class Results extends React.Component {
    state = {
        // opacity: new Animated.Value(0),
        totalCount: this.props.navigation.getParam('totalCount'),
        correctCount: this.props.navigation.getParam('correctCount'),
    };

    // onLoad = () => {
    //     Animated.timing(this.state.opacity, {
    //         toValue: 1,
    //         duration: 1500,
    //         useNativeDriver: true,
    //     }).start();
    // }

    // const opacity = useState(new Animated.Value(0))[0]

    // function fadeInButton() {
    //     Animated.timing(opacity, {
    //         toValue: 1,
    //         duration: 1500,
    //         useNativeDriver: true
    //     }).start()
    // }

    render() {


        return (
            <View
                style={
                    [
                        styles.container,
                        { backgroundColor: this.props.navigation.getParam('color') },
                    ]} >

                <StatusBar barStyle="light-content" />
                <SafeAreaView style={styles.safearea}>
                    <Text style={styles.text}>Here are your quiz results!</Text>
                    <Text style={styles.scoretext}>
                        {`${this.state.correctCount}/${this.state.totalCount}`}
                    </Text>

                    <FadeInView>
                        <TouchableOpacity style={styles.button}
                            onPress={() => this.props.navigation.navigate('QuizIndex')}>
                            <Text style={styles.buttontext}>Home</Text>
                        </TouchableOpacity>
                    </FadeInView>
                </SafeAreaView>
            </View >
        );
    }
}

export default Results;