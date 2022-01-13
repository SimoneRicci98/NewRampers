import React from 'react';
import { StyleSheet, Text, View } from "react-native";



export default function RamBolla() {
    return (
        <View style={styles.body}>
            <Text>Ciao RamBolla</Text>
        </View>        
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center'
    }
});
