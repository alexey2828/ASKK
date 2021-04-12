import React from 'react';
import { NavBar } from './src/NavBar';
import { Header } from './src/Header';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import HoneywellScanner from 'react-native-honeywell-scanner';

HoneywellScanner.isCompatible

HoneywellScanner.startReader().then((claimed) => {
  console.log(claimed ? 'Barcode reader is claimed' : 'Barcode reader is busy');
});

HoneywellScanner.on('barcodeReadFail', () => {
  console.log('Barcode read failed');
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',

  },
});

HoneywellScanner.on('barcodeReadSuccess', event => {
  console.log('Received data', event);
});

export class QRScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />

        <ScrollView>
          <View>
            <Text style={{color: '#ffffff'}}>ddddddf</Text>
          </View>
        </ScrollView>
        <NavBar />
      </View>
    );
  }
}

 
