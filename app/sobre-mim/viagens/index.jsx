import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import Header from '../../../components/header';

const viagens = [
  { id: '1', title: 'Buenos Aires', year: 2023, image: 'https://avatars.githubusercontent.com/u/68694403?v=4' },
  { id: '2', title: 'Rio de janeiro', year: 2022, image: 'https://avatars.githubusercontent.com/u/68694403?v=4' },
  { id: '3', title: 'lugar nenhum', year: 2020, image: 'https://avatars.githubusercontent.com/u/68694403?v=4' },
];

const TelaViagens = () => {
  return (
    <View style={styles.container}>
      <Header title="<- Viagens" voltarPara="/sobre-mim" />
      <FlatList
        data={viagens}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title} - {item.year}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default TelaViagens;