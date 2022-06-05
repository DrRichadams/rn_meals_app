import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CategoriesScreen = props => {
    return(
        <View style={StyleSheet.screen}>
            <Text>The Cartegories Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default CategoriesScreen