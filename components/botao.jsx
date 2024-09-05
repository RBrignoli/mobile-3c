import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';



export default Botao = function ({tag, tipo, onPress}) {
    return <Pressable 
        style={[styles.button, tipo === 'n' ? { backgroundColor: 'gray' } : { backgroundColor: 'yellow' },]}
        onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text>{tag}</Text>
      </View>
    </Pressable>
}

const styles = StyleSheet.create({
    button: {
      borderRadius: 50,
      padding: 10,
      margin: 5
    },
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 18,
    },
  });

