import React from 'react';
import { NavBar } from './src/NavBar';
import { Header } from './src/Header';
import { PressFormTZPScreenItem } from './src/components/componentsScreenItems/pressFormTZPScreenItem';
import { StyleSheet, View, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',

  },
});

export const PressFormTZPScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View>
          <PressFormTZPScreenItem/>
        </View>
      </ScrollView>
      <NavBar />
    </View>
  );
};

 
