
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Botao from '../../components/botao';
import {soma, diminui, div, multi} from '../../scripts/functions'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'black'
    },
    display_container: {
      backgroundColor: '#f0f0f0',
      padding: 10,
      borderRadius: 10,
      margin: 10,
      width: '80%',
      height: '10%',
      alignItems: 'flex-start'
    },
    display_text: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'right',
    },
    fileira:{
      flexDirection:'row',
      justifyContent:'space-between'
    }
  });



const Calculadora2 = () => {
    const [number, onChangeText] = useState('')
    const [number2, onChangeText2] = useState('')
    const [resultado, setResultado] = useState('')
    const [operacao, setOperacao] = useState('')
    const [isNumber2, setIsNumber2] = useState(false)

    const handleSetNumber = (tag, tipo) => {
        if(tipo == 'n'){
            if(!isNumber2){
                onChangeText(number + tag)
            } else {
                onChangeText2(number2 + tag)
            }
        } else if (!number){
            console.log('numero 1 nao inserido')
        } else {
            setIsNumber2(true)
            setOperacao(tag)
        }
    }

    const handleCalculate = () => {
        switch(operacao) {
            case '+':
                soma(setResultado, number, number2)
                break
            case '-':
                diminui(setResultado, number, number2)
                break
            case '*':
                multi(setResultado, number, number2)
                break
            case '/':
                div(setResultado, number, number2)
                break
        }
        return true
    }

    const handleReset = () => {
        onChangeText('')
        onChangeText2('')
        setResultado('')
        setOperacao('')
        setIsNumber2(false)
    }

  return (
    <View style={styles.container}>
        <View style={styles.display_container}>
            <Text style={styles.display_text}>{resultado?resultado:(number2?number2:number) }</Text>
        </View>
        <View style={styles.fileira}>
            <Botao tag="7" tipo="n" onPress={() => handleSetNumber('7', 'n')}/>
            <Botao tag="8" tipo="n" onPress={() => handleSetNumber('8', 'n')}/>
            <Botao tag="9" tipo="n" onPress={() => handleSetNumber('9', 'n')}/>
            <Botao tag="+" tipo="o" onPress={() => handleSetNumber('+', 'o')}/>
        </View>
        <View style={styles.fileira}>
            <Botao tag="4" tipo="n" onPress={() => handleSetNumber('4', 'n')}/>
            <Botao tag="5" tipo="n" onPress={() => handleSetNumber('5', 'n')}/>
            <Botao tag="6" tipo="n" onPress={() => handleSetNumber('6', 'n')}/>
            <Botao tag="-" tipo="o" onPress={() => handleSetNumber('-', 'o')}/>
        </View>
        <View style={styles.fileira}>
            <Botao tag="1" tipo="n" onPress={() => handleSetNumber('1', 'n')}/>
            <Botao tag="2" tipo="n" onPress={() => handleSetNumber('2', 'n')}/>
            <Botao tag="3" tipo="n" onPress={() => handleSetNumber('3', 'n')}/>
            <Botao tag="*" tipo="o" onPress={() => handleSetNumber('*', 'o')}/>
        </View>
        <View style={styles.fileira}>
            <Botao tag="=" tipo="o" onPress={() => handleCalculate()}/>
            <Botao tag="0" tipo="n" onPress={() => handleSetNumber('0', 'n')}/>
            <Botao tag="res" tipo="o" onPress={() => handleReset()}/>
            <Botao tag="/" tipo="o" onPress={() => handleSetNumber('/', 'o')}/>
        </View>
    </View>
  );
};

export default Calculadora2;