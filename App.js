import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ListPokemonScreen from "./screens/ListPokemonScreen";
import ReadPokemonScreen from "./screens/ReadPokemonScreen";
import SearchPokemonScreen from "./screens/SearchPokemonScreen";
import MenuPokemonScreen from "./screens/MenuPokemonScreen";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MenuPokemonScreen"
        component={MenuPokemonScreen}
        options={{
          title: "Menu Pokemon",
          headerStyle: {
            backgroundColor: "#FF0000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="SearchPokemonScreen"
        component={SearchPokemonScreen}
        options={{
          title: "Buscar Pokemon",
          headerStyle: {
            backgroundColor: "#FF0000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="ListPokemonScreen"
        component={ListPokemonScreen}
        options={{
          title: "Lista Pokemon",
          headerStyle: {
            backgroundColor: "#FF0000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="ReadPokemonScreen"
        component={ReadPokemonScreen}
        options={{
          title: "Vista Pokemon",
          headerStyle: {
            backgroundColor: "#FF0000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
