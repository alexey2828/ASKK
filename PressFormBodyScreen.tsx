import React from 'react';
import { NavBar } from './src/NavBar';
import { Header } from './src/Header';
import { PressFormBodyScreenItem } from './src/components/componentsScreenItems/pressFormBodyScreenItem';
import { StyleSheet, View, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',

  },
});

export const PressFormBodyScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View>
          <PressFormBodyScreenItem/>
        </View>
      </ScrollView>
      <NavBar />
    </View>
  );
};

 
