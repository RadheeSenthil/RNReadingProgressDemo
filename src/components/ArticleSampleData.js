import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const ArticleSampleData = () => {

    return (
        <View
            style={styles.container}>
            <View>
                <Text style={styles.subHeading}>Scenic View</Text>

                <View style={styles.imageContainer}>
                    <Image
                        style={styles.imagestyle}
                        source={require('../../assets/imgs/img1.jpg')}
                    />
                </View>

                <Text style={styles.content}>
                    Through photography, the beauty of Mother Nature can be frozen in time. This category celebrates the magic of our planet and beyond from the immensity of the great outdoors, to miraculous moments in your own backyard.
                </Text>
            </View>

            <View>
                <Text style={styles.subHeading}>Scenic View</Text>

                <View style={styles.imageContainer}>
                    <Image
                        style={styles.imagestyle}
                        source={require('../../assets/imgs/img2.jpg')}
                    />
                </View>

                <Text style={styles.content}>
                    Through photography, the beauty of Mother Nature can be frozen in time. This category celebrates the magic of our planet and beyond from the immensity of the great outdoors, to miraculous moments in your own backyard.
                </Text>
            </View>

            <View>
                <Text style={styles.subHeading}>Scenic View</Text>

                <View style={styles.imageContainer}>
                    <Image
                        style={styles.imagestyle}
                        source={require('../../assets/imgs/img3.jpg')}
                    />
                </View>

                <Text style={styles.content}>
                    Through photography, the beauty of Mother Nature can be frozen in time. This category celebrates the magic of our planet and beyond from the immensity of the great outdoors, to miraculous moments in your own backyard.
                </Text>
            </View>

            <View>
                <Text style={styles.subHeading}>Scenic View</Text>

                <View style={styles.imageContainer}>
                    <Image
                        style={styles.imagestyle}
                        source={require('../../assets/imgs/img4.jpg')}
                    />
                </View>

                <Text style={styles.content}>
                    Through photography, the beauty of Mother Nature can be frozen in time. This category celebrates the magic of our planet and beyond from the immensity of the great outdoors, to miraculous moments in your own backyard.
                </Text>
            </View>

            <View>
                <Text style={styles.subHeading}>Scenic View</Text>

                <View style={styles.imageContainer}>
                    <Image
                        style={styles.imagestyle}
                        source={require('../../assets/imgs/img5.jpg')}
                    />
                </View>

                <Text style={styles.content}>
                    Through photography, the beauty of Mother Nature can be frozen in time. This category celebrates the magic of our planet and beyond from the immensity of the great outdoors, to miraculous moments in your own backyard.
                </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 1,
    },
    subHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        paddingVertical: 4,
        paddingHorizontal: 4,
    },
    content: {
        fontSize: 16,
        paddingVertical: 2,
        paddingBottom: 10,
        paddingHorizontal: 4,

    },
    imageContainer: {
        margin: 15,
    },
    imagestyle: {
        resizeMode: "cover",
        width: '100%',
        borderRadius: 20,
    },
});

export default ArticleSampleData;
