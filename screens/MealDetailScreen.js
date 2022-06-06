import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MealDetailScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>The Meal Detail Screen</Text>
            <View style={styles.btn}>
                <Button title="Refresh" onPress={() => props.navigation.push("MealDetail")}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    btn: {
        width: "40%",
        marginVertical: 5
    }
})

export default MealDetailScreen