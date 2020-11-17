import React, { useState } from "react";
import { StyleSheet, View, Image, Alert } from "react-native";
import { ScrollView, TextInput, Button } from "react-native";

export default function SearchPokemonScreen(props) {
  const [pokemon, setPokemon] = useState("nombre_pokemon");
  const [url] = useState("https://pokeapi.co/api/v2/pokemon/");

  const handleChangeText = (poke_name) => {

    setPokemon(poke_name.toLowerCase().trim());
  };

  const goToReadPokemon = () => {
    props.navigation.navigate("ReadPokemonScreen", {
      poke_name: pokemon,
    });
  };

  const searchPokemon = () => {
    const url_input = url + pokemon;
    fetch(url_input).then((res) => {
      if (res.ok && pokemon) {
        goToReadPokemon();
      } else {
        createButtonAlert();
      }
    });
  };

  const createButtonAlert = () =>
    Alert.alert(
      "Pokemon No Encontrado",
      "Presiona OK para continuar",
      [
        { text: "OK"}
      ],
      { cancelable: false }
    );

  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={
            require('../assets/images/WhoIsThatPokemon.jpg')
          }
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Nombre Pokemon"
          maxLength={11}
          onChangeText={(poke_name) => handleChangeText(poke_name)}
        />
      </View>
      <View style={styles.box}>
        <Button
          onPress={() => searchPokemon()}
          title="Buscar Pokemon!"
          loading
        />
      </View>
      <View style={styles.box}>
        <Button
          onPress={() => props.navigation.navigate("MenuPokemonScreen")}
          title="Menu inicio"
          color="red"
          loading
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

  inputGroup: {
    flex: 10,
    padding: 10,
    marginBottom: 15,
    borderBottomWidth: 5,
    borderBottomColor: "#cccccc",
  },
  image: {
    flex: 1,
    padding: 25,
    resizeMode: "cover",
    height: 300,
    width: 385,
    marginTop: 20,
    marginBottom: 10,
  },
  box: {
    marginTop: 20,
    marginBottom: 10,
  },
});
