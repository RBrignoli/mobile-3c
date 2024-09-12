
import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';

const SplashScreen = () => {
  const image = 'https://tacabrasilfa.com.br/wp-content/uploads/2022/10/icone-istepos-futebol-americano-400x403.png'
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#000000', '#1f469a']}
        style={styles.background}
        start={[0, 0]}
        end={[1, 1]}
      />

      <Link href="/pokemon">
        <Image
          style={styles.image}
          source={{uri: image}}
        /></Link>
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
    width: 100,
    height: 150
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%'
  },
});

export default SplashScreen;