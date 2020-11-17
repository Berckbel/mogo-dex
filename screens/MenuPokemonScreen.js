import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView, Image, Button } from "react-native";

export default function MenuPokemonScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.title}>
        <Text style={{fontWeight:"bold", fontSize:25, alignContent: "center"}}>BIENVENDO A LA MOGO-DEX</Text>
      </View>
      <View>
        <Image
          style={styles.image}
          source={
            require('../assets/images/Pikachu.png')
          }
        />
      </View>
      <View style={styles.box}>
        <Button
          onPress={() => props.navigation.navigate("ListPokemonScreen")}
          title="Explorar!!!"
        />
      </View>
      <View style={styles.box}>
        <Button
          onPress={() => props.navigation.navigate("SearchPokemonScreen")}
          title="Buscar Pokemon"
          color="red"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },

  box: {
    marginTop: 20,
    marginBottom: 10,
  },
  image: {
    flex: 1,
    padding: 25,
    resizeMode: "cover",
    height: 300,
    width: 300,
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 101,
    fontWeight: "bold",
    alignItems: "center",
    
  },
});
