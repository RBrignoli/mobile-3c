import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PokemonBattleScreen = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const [opponentPokemon, setOpponentPokemon] = useState('');
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/type')
      .then(response => response.json())
      .then(data => setTypes(data.results))
      .catch(error => console.error('Error fetching Pokémon types:', error));
  }, []);

  // useEffect(() => {
  //   fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
  //     .then(response => response.json())
  //     .then(data => setPokemons(data.results))
  //     .catch(error => console.error('Error fetching Pokémon:', error));
  // }, []);


  useEffect(() => {
    if (selectedType) {
      fetch(`https://pokeapi.co/api/v2/type/${selectedType}`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          const pokemonList = data.pokemon.map(p => p.pokemon);
          setPokemons(pokemonList);
        })
        .catch(error => console.error('Error fetching Pokémon by type:', error));
    }
  }, [selectedType]);

  const handleBattle = () => {
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    setOpponentPokemon(pokemons[randomIndex].name);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha um Pokémon</Text>
      <Picker
        selectedValue={selectedType}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedType(itemValue)}
      >
        <Picker.Item label="Selecione um Tipo" value="" />
        {types.map((type, index) => (
          <Picker.Item key={index} label={type.name} value={type.name} />
        ))}
      </Picker>
      <Picker
        selectedValue={selectedPokemon}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedPokemon(itemValue)}
      >
        <Picker.Item label="Selecione um Pokémon" value="" />
        {pokemons.map((pokemon, index) => (
          <Picker.Item key={index} label={pokemon.name} value={pokemon.name} />
        ))}
      </Picker>
      <Button title="Batalhar" onPress={handleBattle} />
      {opponentPokemon ? (
        <Text style={styles.result}>
          Oponente: {opponentPokemon}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  picker: {
    width: 200,
    height: 50,
    marginBottom: 20,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default PokemonBattleScreen;
