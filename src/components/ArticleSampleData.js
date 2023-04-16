import React from 'react';
import { View, StyleSheet, Text, } from 'react-native';

const ArticleSampleData = () => {
    return (
        <View>
            {[...Array(100)].map((x, i) =>
                <Text>Sample Data</Text>
            )}
        </View>
    )
}

export default ArticleSampleData;
