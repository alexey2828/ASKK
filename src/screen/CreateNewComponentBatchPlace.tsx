/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TouchableHighlight, TextInput } from 'react-native';
import { UseHttpLatest } from '../hooks/useHttp';
import { IHydraGet } from '../interface/api-platform';
import { IСomponents } from '../interface/Сomponents';
import { Button } from 'react-native';
import { apiComponentsUrl, apiComponentsUrlShort } from '../const/urls'
import { CNstyles } from '../styleComponents/screensStyles/screenStyle.styles'
import { Loader } from '../temp/component-ui/loader/Loader';
import { useNavigation } from '@react-navigation/native';
import { OpenModalFromQrCode } from '../temp/infrastructure/open-modal-from-qr-code/open-modal-from-qr-code';
import { ETitleMessage } from '../const/title/message';

export const CreateComponent: React.FC = () => {

  const navigation = useNavigation();

  const { data, updateResponse, isLoading } = UseHttpLatest<IHydraGet<IСomponents>>();
  const [url, setUrl] = useState(apiComponentsUrlShort);

  const [plaseInParty, setplaseInParty] = useState('none');

  const [name, setName] = useState('');

  useEffect(() => {
    const url = apiComponentsUrlShort + '?name=' + name;
    setUrl(url)
  }, [name])

  useEffect(() => {
    updateResponse({ url })
  }, [url]);

  async function componentDidMount(): Promise<void> {
    console.log(plaseInParty);
    try {
      await fetch(apiComponentsUrl, {
        method: 'POST',
        headers: {
          'Accet': 'application/ld+json',
          'Content-type': 'application/ld+json'
        },
        body: JSON.stringify({
          name: plaseInParty,
          normativeDocumentId: '96c1912a-ecfd-4dd5-8051-d598c1343fa0',
          issuerId: '3fa85f64-5717-4562-b3fc-2c963f66afa6'
        })
      });
    } catch(e){
      console.log(e);
    }
    console.log('done');
    navigation.navigate('Loader');
  } 

  return (
    <View style={CNstyles.mainCNcontainerc}>
      <Text style={{color: '#ffffff'}} >Додати компонент на склад будівлі</Text>
      <View style={CNstyles.CNcontainerc}>
        <TextInput placeholderTextColor = "#a1a1a1" onChangeText = {(val): void => setplaseInParty(val)} style={CNstyles.CNtextInputc} placeholder="Место В Партии"></TextInput>
        <TextInput
          placeholder="Назва компонента"
          placeholderTextColor = "#a1a1a1"
          maxLength={100}
          value={name}
          onChangeText={(text): void => setName(text)}
          style={CNstyles.CNtextInputc}
        />
        <View style={{ margin: -13, marginTop: 40, position: 'absolute' }}>
          <OpenModalFromQrCode/>
        </View>
        <Text>
          {name &&       
        <View style={{height: 200, width: 325, backgroundColor: '#323232',}}>
          <ScrollView >
            {isLoading ? (<Loader/>)
              : (data?.['hydra:member'] && 
          (data?.['hydra:member'].length) ? (
            data?.['hydra:member'].map(member => {
              return (
                <TouchableHighlight onPress={(): void => {setName(member.name)}}>
                  <Text style={{ color: '#a1a1a1', margin: 10 }}>{member.name} - {member.normativeDocument}</Text>
                </TouchableHighlight>
              )
            })
                ) : <Text style={{ color: 'red' }}>{ETitleMessage.noDataSearch}</Text>
              )}
          </ScrollView>
          <Button title="Надіслати" onPress={componentDidMount}/>
        </View>}
        </Text>
       
      </View>
    </View>
  );
};

