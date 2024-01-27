import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../../styles/Footer'; 

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Icon name="home" size={30} color="#a6a6a6" type="material" onPress={() => console.log('Ação 1')} />
      <Icon name="wallet" size={30} color="#a6a6a6" type="material" onPress={() => console.log('Ação 2')} />
      <Icon name="calculator" size={30} color="#a6a6a6" type="material" onPress={() => console.log('Ação 3')} />
      <Icon name="chart-pie" size={30} color="#a6a6a6" type="material" onPress={() => console.log('Ação 4')} />
      <Icon name="account" size={30} color="#a6a6a6" type="material" onPress={() => console.log('Ação 5')} />
  </View>
  );
}
