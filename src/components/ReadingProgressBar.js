import React, { useEffect, useRef} from 'react';
import { View, StyleSheet, Text, Animated, Easing} from 'react-native';
import { Svg, Circle } from 'react-native-svg';

import { Ionicons } from '@expo/vector-icons';

const ReadingProgressBar = ({ progress }) => {
    const size = 52;
    const strokeWidth = 6;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const progressStroke = (progress / 100) * circumference;
    const checkmarkScale = useRef(new Animated.Value(0)).current;
    
    useEffect(()=> {
        const targetScale = progress >= 100 ? 1 : 0;
        const duration = progress >= 100 ? 1000 : 0;
        Animated.timing(checkmarkScale, {
            toValue: targetScale,
            duration: duration,
            easing: Easing.bounce,
            useNativeDriver: true
        }
        ).start();
    },[progress]);

    return (
        <View style={styles.container}>
            <View style={styles.svgView}>
                <Svg width={size} height={size}>
                    <Circle
                        stroke="lightgray"
                        fill="transparent"
                        strokeWidth={strokeWidth}
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                    />
                    <Circle
                        stroke="green"
                        fill="transparent"
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        strokeDasharray={`${circumference} ${circumference}`}
                        strokeDashoffset={circumference - progressStroke}
                    />         
                </Svg>
            </View>

            {(progress < 100) &&
            <View width={size} height={size} style={styles.percentageView}>
                <Text width={size} style={styles.percentageText}>{progress+"%"}</Text>
            </View>
            }
            
            <Animated.View style={[styles.checkmarkView, { paddingLeft: strokeWidth/4+1, paddingTop: strokeWidth/4, opacity: checkmarkScale, transform: [{ scale: checkmarkScale }] }]}>
                <Ionicons name="checkmark-circle-sharp" size={radius * 2} color="green" />
            </Animated.View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    svgView: {
        position: "absolute",
        transform: [{rotateZ: '-90deg'}],
    },
    percentageView: {
        alignItems: 'center',
        flexDirection: 'row',
        position: "absolute",
    },
    percentageText: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    checkmarkView: {
        position: "absolute",        
    },
});

export default ReadingProgressBar;
