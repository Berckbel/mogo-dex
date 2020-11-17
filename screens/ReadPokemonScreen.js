import React, { useEffect, useState } from "react";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { Text, ActivityIndicator, Image } from "react-native";

export default function ReadPokemonScreen(props) {
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/" + props.route.params.poke_name
  );

  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const result = res;
        setResult(result);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loading}>
        <Text style={styles.title}>Cargando Pokemon</Text>
        <ActivityIndicator size="large" color="#9e9e9e" />
      </View>
    );
  } else {
    return (
      <ScrollView style={styles.container}>
        <View>
          <ImageBackground source={require('../assets/images/Display.png')} style={styles.display}>
          <Image
            style={styles.image}
            source={{
              uri: result.sprites.other['official-artwork'].front_default,
            }}
          />
          </ImageBackground>
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.title}>
            Nombre: <Text style={styles.text}>{result.name.toUpperCase()}</Text>
          </Text>
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.title}>
            Altura: <Text style={styles.text}>{result.height} cm</Text>
          </Text>
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.title}>
            Tipo:{" "}
            <Text style={styles.text}>
              {result.types[0].type.name.toUpperCase()}
            </Text>
          </Text>
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.title}>
            Habilidades:{" "}
            <Text style={styles.text}>
              {result.abilities.map((abilitie) => {
                return abilitie.ability.name + ". ";
              })}
            </Text>
          </Text>
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.title}>Estadisticas</Text>
          <Text style={styles.stats}>
            {result.stats.map((stat) => {
              return (
                stat.stat.name.toUpperCase() + " : " + stat.base_stat + " pts\n"
              );
            })}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    alignContent: "center",
  },
  loading: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputGroup: {
    flex: 1,
    padding: 1,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  image: {
    resizeMode: "contain",
    height: 300,
    width: 300,
  },
  display: {
    flex: 1,
    resizeMode: "contain",
    width: 385,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
  },
  text: {
    fontSize: 17,
    fontWeight: "normal",
  },
  stats: {
    fontStyle: "italic",
    fontSize: 15,
  },
});
