import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoryMealsScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>The Cartegory Meals Screen</Text>
            <View style={styles.btn}>
                <Button title="Meal Detail" onPress={() => props.navigation.navigate("MealDetail")}/>
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

export default CategoryMealsScreen