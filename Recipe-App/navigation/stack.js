import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import { Login, Recipe } from "../screens";
import Tabs from './tabs';
const Stacks = () => {
  return (
    <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Login"}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Recipe" component={Recipe} />
      </Stack.Navigator>
  )
}

export default Stacks