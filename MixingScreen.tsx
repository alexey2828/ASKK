import React from 'react';
import { NavBar } from './src/NavBar';
import { Header } from './src/Header';
import { ComponentsScreenMixingItems } from './src/components/componentsScreenItems/componentsScreenMixingItems';
import { StyleSheet, View, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',

  },
});

export const MixingScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View>
          <ComponentsScreenMixingItems/>
        </View>
      </ScrollView>
      <NavBar />
    </View>
  );
};

 
