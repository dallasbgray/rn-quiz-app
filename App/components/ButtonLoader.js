import React from 'react';
import { View, StyleSheet, StatusBar, Text, SafeAreaView, TouchableOpacity, Animated } from 'react-native';

class ButtonLoader extends React.Component {
    state = {
        opacity: new Animated.Value(0),
    }

    onLoad = () => {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }

    return() {
        <Animated.View
            onLoad={this.onLoad}
            {...this.props}
            style={[
                {
                    opacity: this.state.opacity,
                    transform: [
                        {
                            scale: this.state.opacity.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0.85, 1],
                            })
                        }
                    ]
                },
                this.props.style,
            ]}
        />
    }
}

export const ButtonLoader = ({ children }) => (
    <View>{children}</View>
);