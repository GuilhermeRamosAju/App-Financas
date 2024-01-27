import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {styles} from '../../../styles/Cadastro'


export default function Cadastro() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crie uma conta</Text>
      <TextInput placeholder="Nome" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Senha" secureTextEntry style={styles.input} />
      <TouchableOpacity onPress={() => navigation.navigate('Inicio')} style={styles.button}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Criar Conta</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>ou entrar com</Text>

      <View>
      <TouchableOpacity onPress={() => console.log('Entrar com Apple pressionado')} style={styles.loginWith}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Entrar com Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Entrar com Google pressionado')} style={styles.loginWith}>

        <Text style={{ color: 'white', textAlign: 'center' }}>Entrar com Google</Text>
      </TouchableOpacity>
      </View>

      <Text style={styles.underlineText}>Já tenho uma conta</Text>
    </View>
  )
}