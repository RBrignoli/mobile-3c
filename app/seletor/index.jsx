import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
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


export default Seletor = () => {
    const [pokemon, setPokemon] = useState('');
    const [lista_pokemons, setListaPokemons] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then(response => response.json())
            .then(dados => setListaPokemons(dados.results))
    }, [])
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Selecione um Pokémon</Text>
            <Picker
                selectedValue={pokemon}
                style={styles.picker}
                onValueChange={(itemValue) => setPokemon(itemValue)}
            >
                <Picker.Item label="Selecione um Pokémon" />
                {lista_pokemons.map((item, index) => (
                    <Picker.Item key={index} label={item.name} value={item.url} />
                ))}
            </Picker>
            {pokemon?<Text>Voce selecionou {pokemon}</Text>:''}
        </View>
    );
};


