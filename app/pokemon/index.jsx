import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, ImageBackground, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default PokemonScreen = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const [opponentPokemon, setOpponentPokemon] = useState('');
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [pokemonImg, setPokemonImg] = useState('')

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/type')
      .then(response => response.json())
      .then(data => setTypes(data.results))
      .catch(error => console.error('Error fetching Pokémon types:', error));
  }, []);

  useEffect(() => {
    if (selectedType) {
      fetch(`https://pokeapi.co/api/v2/type/${selectedType}`)
        .then(response => response.json())
        .then(data => setPokemons(data.pokemon))
        .catch(error => console.error('Error fetching Pokémon by type:', error));
    }
  }, [selectedType]);

  useEffect(() => {
    if (selectedPokemon) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
        .then(response => response.json())
        .then(data => setPokemonImg(data))
        .catch(error => console.error('Error fetching Pokémon by type:', error));
    }
  }, [selectedPokemon]);

  const handleBattle = () => {
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    setOpponentPokemon(pokemons[randomIndex].name);
  };

  return (
    <SafeAreaView >
      <ImageBackground
        source={{ uri: 'https://preview.redd.it/pok%C3%A9mon-starting-screen-mockup-aseprite-490x270-mouse-v0-3y9gp6yxiita1.png?width=1080&crop=smart&auto=webp&s=1d9c3aa0e6f57ad9a25e01ce19a7b8e35ccb8bf4' }}
        style={styles.bgImage}
      >
        <View style={styles.container}>
          <View style={styles.pickerContainer}>
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
                <Picker.Item key={index} label={pokemon.pokemon.name} value={pokemon.pokemon.name} />
              ))}
            </Picker>
          </View>
          {pokemonImg? <Image
            style={styles.image}
            source={{ uri: pokemonImg.sprites.back_default }}
          />:''}
        </View>
      </ImageBackground>
    </SafeAreaView>
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
    backgroundColor: 'white',
  },
  result: {
    fontSize: 18,
    marginTop: 20,
  },
  bgImage: {
    height: '100%'
  },
  pickerContainer: {
    marginTop: 300
  },
  image: {
    width: 150,
    height: 150,
  },
});

