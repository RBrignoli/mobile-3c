import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router';




const App = () => {
  const [number, onChangeText] = useState('')
  const [number2, onChangeText2] = useState('')
  const [resultado, setResultado] = useState('')
  const navigation = useNavigation();


  const soma = function () {
    setResultado(Number(number) + Number(number2))
    return number
  }
  const diminui = function () {
    setResultado(Number(number) - Number(number2))
    return number
  }
  const multi = function () {
    setResultado(Number(number) * Number(number2))
    return number
  }
  const div = function () {
    setResultado(Number(number) / Number(number2))
    return number
  }

  return (
    <View style={styles.container}>
      <Text>CALCULADORA</Text>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={onChangeText}
          value={number}
          placeholder='Insira o numero aqui'
          keyboardType='numeric'
        />
        <TextInput
          onChangeText={onChangeText2}
          value={number2}
          placeholder='Insira o numero aqui'
          keyboardType='numeric'
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title='+'
          onPress={() => soma()}
        />
        <Button
          title='-'
          onPress={() => diminui()}
        />
        <Button
          title='x'
          onPress={() => multi()}
        />
        <Button
          title='/'
          onPress={() => div()}
        />
      </View>

      <Text>o valor é {resultado}</Text>
      <View>
        <Link href="/calculadora2">Calculadora 2</Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',

  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10

  }
});

export default App;