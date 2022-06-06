import { createStackNavigator } from '@react-navigation/stack';

import CartegoriesScreen from "../screens/CartegoriesScreen"
import CartegoryMealScreen from "../screens/CartegoryMealsScreen"
import MealDetailScreen from "../screens/MealDetailScreen"

createStackNavigator({
    Cartegories: CartegoriesScreen,
    CartegoryMeal: {
        screen: CartegoryMealScreen
    },
    MealDetail: MealDetailScreen
})