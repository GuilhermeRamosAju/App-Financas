import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from '../../../styles/InicioStyles.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Footer from '../../components/Footer';



export default function Inicio() {
  const [isVisible, setIsVisible] = useState(false);
  const hideSensitiveContent = (text) => {
    return isVisible ? text : '*******';
  };
  const areasData = [
    {
      title: 'Meus Cartões',
      explanation: 'Você ainda não tem nenhum cartão cadastrado',
      clickableText: 'Adicionar Cartão',
    },
    {
      title: 'Minhas Contas',
      explanation: 'Você ainda não tem nenhuma conta cadastrada',
      clickableText: 'Adicionar Contas',
    },
    {
      title: 'Recomendações com Inteligência Artificial',
      explanation: 'Assine o premium para obter essa função',
      clickableText: 'Assinar',
    },
  ];

  return (
    <>
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <View style={styles.menuProfile}>
          <Icon name="menu" size={30} onPress={() => console.log('Abrir menu')} />
          <Icon name="account-circle-outline" size={45} onPress={() => console.log('Abrir Perfil')} />
          <View>
            <Text style={styles.welcomeText}>Oi,</Text>
            <Text style={styles.welcomeText}>bem-vindo!</Text>
          </View>
        </View>
        <View style={styles.menuIcons}>
          <Icon
          name={isVisible ? 'eye-outline' : 'eye-off-outline'}
          type="material"
          size={30}
          onPress={() => setIsVisible(!isVisible)}
        />
          <Icon name="bell-outline" size={30} type="material" onPress={() => console.log('Abrir Notificações')} />
        </View>
      </View>

      {/* Áreas de Informação */}
      <View style={styles.infoArea}>
        <View style={styles.infoRow}>
          {/* Área 1 */}
          <View style={styles.infoItem}>
            <Icon name="currency-usd" size={25} color="#EE6565"/>
            <View style={styles.infoText}>
            <Text>A Pagar</Text>
            <Text>{hideSensitiveContent('R$ 0,00')}</Text>
            </View>
          </View>

          {/* Área 2 */}
          <View style={styles.infoItem}>
            <Icon name="currency-usd" size={25} color="#00C950"/>
            <View style={styles.infoText}>
              <Text>Receita</Text>
              <Text>{hideSensitiveContent('R$ 0,00')}</Text>
            </View>
          </View>
        </View>

        <View style={styles.infoRow}>
          {/* Área 3 */}
          <View style={styles.infoItem}>
            <Icon name="check-bold" size={25} color="#137AC5"/>
            <View style={styles.infoText}>
              <Text>Despesas Pagas</Text>
              <Text>{hideSensitiveContent('R$ 0,00')}</Text>
            </View>
          </View>

          {/* Área 4 */}
          <View style={styles.infoItem}>
            <Icon name="plus-minus" size={25} color="#4C4C4C"/>
            <View style={styles.infoText}>
              <Text>Saldo Atual</Text>
              <Text>{hideSensitiveContent('R$ 0,00')}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Área Assinatura Premium */}
      <View style={styles.premiumArea}>
        <View>
          <Text>Assine o Premium</Text>
          <Text>R$9,90/mensal</Text>
        </View>
        <Text style={styles.choosePlan}>Escolha o plano</Text>
      </View>

      {/* Áreas Iguais */}
      {areasData.map((area, index) => (
      <View key={index} style={styles.equalArea}>
        <Text style={styles.areaTitle}>{area.title}</Text>
        <Text style={styles.areaText}>{area.explanation}</Text>
        <View style={styles.clickableArea}>
          <Text style={styles.clickableText}>{area.clickableText}</Text>
        </View>
        {index === 2 && (
          <View style={styles.highlight}>
            <Text style={styles.highlightLabel}>Premium</Text>
          </View>
        )}
      </View>
      ))}
    </View> 
      {/* Rodapé */}
    <Footer/>
    </>
  );
}