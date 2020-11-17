import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text, ActivityIndicator, Button } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

export default function ListPokemonScreen(props) {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [result, setResult] = useState([]);
  const [link, setLink] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const result_res = res;
        setResult(result_res.results);
        setLink({
          next: result_res.next,
          previous: result_res.previous,
        });
        setLoading(false);
      });
  }, []);

  const handleListRigth = () => {
    if (link.next) {
      setLoading(true);
      fetch(link.next)
        .then((res) => res.json())
        .then((res) => {
          const result_res = res;
          setResult(result_res.results);
          setLink({
            next: result_res.next,
            previous: result_res.previous,
          });
          setLoading(false);
        });
    }
  };

  const handleListLeft = () => {
    if (link.previous) {
      setLoading(true);
      fetch(link.previous)
        .then((res) => res.json())
        .then((res) => {
          const result_res = res;
          setResult(result_res.results);
          setLink({
            next: result_res.next,
            previous: result_res.previous,
          });
          setLoading(false);
        });
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cargando Pokemons</Text>
        <ActivityIndicator size="large" color="#9e9e9e" />
      </View>
    );
  } else {
    return (
      <ScrollView>
        {result.map((pokemon) => {
          return (
            <ListItem
              key={pokemon.name}
              bottomDivider
              onPress={() =>
                props.navigation.navigate("ReadPokemonScreen", {
                  poke_name: pokemon.name,
                })
              }
            >
              <ListItem.Chevron />
              <Avatar
                source={{
                  uri: 'https://images-na.ssl-images-amazon.com/images/I/619FF-ONnuL._AC_SL1100_.jpg'
                }}
                rounded
              />
              <ListItem.Content>
                <ListItem.Title>{pokemon.name}</ListItem.Title>
                <ListItem.Subtitle>
                  {"Ir Detalles: " + pokemon.name}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          );
        })}
        <Button
          title="Siguente"
          color="red"
          onPress={() => handleListRigth()}
          loading
        />
        <Button title="Anterior" onPress={() => handleListLeft()} loading />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
  },
});
