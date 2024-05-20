import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import TabNavigator from '../views/Admin/TabNavigator';
import Login from '../views/login/Login';
import Register from '../views/login/Register'
import TabCustomer from '../views/Customer/TabCustomer'


const Stack = createStackNavigator();

export default function RootComponent() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Tab" component={TabNavigator} />
                <Stack.Screen name="TabC" component={TabCustomer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
