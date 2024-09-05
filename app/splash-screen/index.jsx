
import React, {useState} from 'react';
import { View, StyleSheet, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const SplashScreen = ({navigation}) => {
    const image = 'https://img.icons8.com/?size=512&id=oFJj30TOI1Ha&format=png'
    const image2 = require('../../assets/images/logo_disney.png')
  return (
    <View style={styles.container}>
    <LinearGradient
        colors={['#000000', '#1f469a']}
        style={styles.background}
        start={[0,0]}
        end={[1,1]}
      />
    <Image
        style={styles.image}
        source={image}
    />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width:100,
    height:100
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%'
  },
});

export default App;