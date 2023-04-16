import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import ArticleSampleData from '../components/ArticleSampleData';
import ReadingProgressBar from '../components/ReadingProgressBar';

const ArticleScreen = () => {
    const [scrollposition, setScrollPosition] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [contentHeight, setContentHeight] = useState(0);
    const [contentLayoutHeight, setContentLayoutHeight] = useState(0);
    const [totalScrollPosition, setTotalScrollPosition] = useState(0);

    useEffect(() => {
        setTotalScrollPosition(contentHeight - contentLayoutHeight);
    }, [contentHeight, contentLayoutHeight]);

    useEffect(() => {
        let temp = 100 * (scrollposition / totalScrollPosition);
        temp = clamp(temp, 0, 100);
        setPercentage(temp.toFixed(0))
    }, [scrollposition, totalScrollPosition]);

    const clamp = (num, min, max) => {
        return num <= min
            ? min
            : num >= max
                ? max
                : num
    }

    const handleScroll = (event) => {
        const { contentOffset } = event.nativeEvent;
        setScrollPosition(contentOffset.y.toFixed(0));
    };

    const onContentSizeChange = (width, height) => {
        setContentHeight(height);
    };

    const onLayout = event => {
        setContentLayoutHeight(event.nativeEvent.layout.height);
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.headerContainer}>
                <View style={styles.leftHeaderView}>
                    <Text style={styles.articleText}>
                        Article1
                    </Text>
                </View>
                <View style={styles.rightHeaderView}>
                    <ReadingProgressBar progress={percentage} />
                </View>
            </View>

            <View style={styles.articleContainer}>
                <ScrollView 
                scrollEventThrottle={100}
                onScroll={handleScroll}
                onContentSizeChange={onContentSizeChange}
                onLayout={onLayout}>
                    <ArticleSampleData />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flexDirection: "row",
        height: 60,
    },
    leftHeaderView: {
        flex: 1,
        marginLeft: 10,
    },
    rightHeaderView: {
        marginRight: 40,
    },
    articleContainer: {
        flex: 1,
        marginTop: 5,
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 16,
        borderWidth: 0.5, borderColor: "gray",
    },
    articleText: {
        marginTop: 20,
        fontSize: 26,
        fontWeight: 'bold',
    },
});

export default ArticleScreen;
