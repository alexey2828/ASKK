import React, { useState, useEffect } from 'react';
//import Modal from 'react-native-modal';
import { Text, View, Image, TouchableHighlight, Picker, Button, DatePickerAndroid } from 'react-native';
//import {Picker} from '@react-native-community/picker';
import { styles } from './componentsScreenItems.styles';
//import { AddBtn } from '../buttons/addBtn';
import { State } from '../states/state';
import { useHttp } from '../../hooks/useHttp'

type ListMember = {
  name: string;
  id: string;
  '@id': string;
}

interface IListMembers {
  'hydra:member': ListMember[] | null;
  'hydra:totalItems': number;
}

const initListMembers: IListMembers = {
  'hydra:member': [],
  'hydra:totalItems': 0,
}

export const –°omponentsScreenItems: React.FC = () => {
  const { response, loading } = useHttp<IListMembers>({
    url: 'http://206.81.28.17:81/api/normative-documents?page=1'
  });
  //   url: 'http://159.89.213.194:81/api/normative-documents?page=1',

  //const apilink = 'http://206.81.28.17:81/api/normative-documents?page=7';
  const [members, setMembers] = useState<IListMembers>(initListMembers);

  useEffect(() => {
    if (response) {
      setMembers(response)
      //console.log(response)
    }
  }, [response]);

  return (
    <View>

      <View style={{ flex: 1, padding: 0 }}>
        <Text style={{ color: '#ffffff' }}>
          {!loading && members['hydra:totalItems']}
          {/*loading && 'load'*/}
          {/*!loading && JSON.stringify(members['hydra:member'])*/}
        </Text>
        <View style={{ flex: 1, padding: 0 }}>
          {loading ? (<Image source={{ uri: 'https://cutewallpaper.org/21/loading-gif-transparent-background/Top-30-Barik-GIFs-Find-the-best-GIF-on-Gfycat.gif' }} style={{ width: 100, height: 150 }} />) : (
            (members['hydra:member']) ? (
              members['hydra:member'].map(member => {
                return (
                  <View key={member.id} style={styles.cardContainer}>
                    <Image source={{ uri: 'https://cdn.discordapp.com/attachments/466314747281801228/821008043902107738/unknown.png' }}
                      style={styles.Ico} />
                    <View style={{ marginLeft: 20, }}>
                      <TouchableHighlight key={2}>

                        <View style={{ backgroundColor: '#121212', margin: 15 }}>
                          <Picker>
                            <Picker.Item label={member.name} color="#ffffff" value={member.name} />
                            <Picker.Item label={member.name} color="black" value={member.name} ></Picker.Item>
                            <Picker.Item label={member.id} color="red" value={member.id} />
                          </Picker>
                        </View>

                      </TouchableHighlight>
                      <View style={styles.stateItemContainer}>
                        <View><Text style={styles.stateItem}>–ü–į—Ä—ā—Ė—Ź: 1234567</Text></View>
                        <Text style={styles.stateItem}>–ú—Ė—Ā—Ü–Ķ: 1234567</Text>
                        <State />
                      </View>

                    </View>
                  </View>
                )
              })
            ) : null
          )
          }
        </View>

      </View>

      {/*      <Modal isVisible={isModalVisible1}>
        <View style={{ flex: 1 }}>
          <View style={styles.addItemContainer}>
            <Text style={styles.title}>–Ē–ĺ–ī–į—ā–ł</Text>
            <View style={styles.itemList}></View>
            <ScrollView style={{margin: 10, height: 200, backgroundColor: '#121212'}}>
              <View style={{margin: 10}}>
                <Text style={{color:'#ffffff', fontSize: 16, marginTop: 5}}>–Ě–į–∑–≤–į –ļ–ĺ–ľ–Ņ–ĺ–Ĺ–Ķ–Ĺ—ā—É: –ö–ĺ–ľ–Ņ–ĺ–Ĺ–Ķ–Ĺ—ā 1</Text>
                <Text style={{color:'#ffffff', fontSize: 16, marginTop: 5}}>–Ě–ĺ–ľ–Ķ—Ä –Ĺ–ĺ—Ä–ľ–į—ā–ł–≤–Ĺ–ĺ–≥–ĺ –ī–ĺ–ļ—É–ľ–Ķ–Ĺ—ā–į: ‚ĄĖ53</Text>
                <Text style={{color:'#ffffff', fontSize: 16, marginTop: 5}}>–ú—Ė—Ā—Ü–Ķ–∑–Ĺ–į—Ö–ĺ–ī–∂–Ķ–Ĺ–Ĺ—Ź: –ö–ĺ—Ä–Ņ—É—Ā 1</Text>
                <Text style={{color:'#ffffff', fontSize: 16, marginTop: 5}}>–Ü–ī–Ķ–Ĺ—ā–ł—Ą—Ė–ļ–į—ā–ĺ—Ä: ‚ĄĖ8597</Text>
                <Text style={{color:'#ffffff', fontSize: 16, marginTop: 5}}>–°–ļ–Ľ–į–ī–ł, –≤ —Ź–ļ–ł—Ö –∑–į—Ā—ā–ĺ—Ā–ĺ–≤—É—Ē—ā—Ć—Ā—Ź:</Text>
                <Text style={{color:'#ffffff', fontSize: 16, marginTop: 5}}>–ü–į—Ä—ā—Ė—Ź: </Text>
                <Text style={{color:'#ffffff', fontSize: 16, marginTop: 5}}>–ź–Ĺ–į–Ľ—Ė–∑–ł: </Text>
                <Text style={{color:'#ffffff', fontSize: 16, marginTop: 5}}>–ú—Ė—Ā—Ü–Ķ —É –Ņ–į—Ä—ā—Ė—ó: </Text>
              </View>
            </ScrollView>
            <View style={{ display: 'flex', flexDirection: 'row', alignSelf: 'flex-end'}}>
              <View><TouchableHighlight onPress={toggleModal1}><Text style={{color: '#ffffff', margin: 15, fontSize: 20, textAlign: 'right'}}>–Ě–į–∑–į–ī</Text></TouchableHighlight></View>
              <View><TouchableHighlight onPress={toggleModal1}><AddBtn/></TouchableHighlight></View>
            </View>
          </View>
        </View>
      </Modal>

      <Modal isVisible={isModalVisible2}>
        <View style={{ flex: 1 }}>
          <View style={styles.addItemContainer}>
            <Text style={styles.title}>–Ē–ĺ–ī–į—ādddd222</Text>
            <View style={styles.itemList}></View>
            <ScrollView style={{margin: 10, height: 200, backgroundColor: '#121212'}}>
              <View style={{margin: 10}}>
                <Text style={{color:'#ffffff', fontSize: 16, marginTop: 5}}>–Ě–į–∑–≤–į –ļ–ĺ–ľ–Ņ–ĺ–Ĺ–Ķ–Ĺ—ā—É: –ö–ĺ–ľ–Ņ–ĺ–Ĺ–Ķ–Ĺ—ā 1</Text>
                <Text style={{color:'#ffffff', fontSize: 16, marginTop: 5}}>–Ě–ĺ–ľ–Ķ—Ä –Ĺ–ĺ—Ä–ľ–į—ā–ł–≤–Ĺ–ĺ–≥–ĺ –ī–ĺ–ļ—É–ľ–Ķ–Ĺ—ā–į: ‚ĄĖ53</Text>
                <Text style={{color:'#ffffff', fontSize: 16, marginTop: 5}}>–ú—Ė—Ā—Ü–Ķ–∑–Ĺ–į—Ö–ĺ–ī–∂–Ķ–Ĺ–Ĺ—Ź: –ö–ĺ—Ä–Ņ—É—Ā 1</Text>
                <Text style={{color:'#ffffff', fontSize: 16, marginTop: 5}}>–Ü–ī–Ķ–Ĺ—ā–ł—Ą—Ė–ļ–į—ā–ĺ—Ä: ‚ĄĖ8597</Text>
                <Text style={{color:'#ffffff', fontSize: 16, marginTop: 5}}>–°–ļ–Ľ–į–ī–ł, –≤ —Ź–ļ–ł—Ö –∑–į—Ā—ā–ĺ—Ā–ĺ–≤—É—Ē—ā—Ć—Ā—Ź:</Text>
                <Text style={{color:'#ffffff', fontSize: 16, marginTop: 5}}>–ü–į—Ä—ā—Ė—Ź: </Text>
                <Text style={{color:'#ffffff', fontSize: 16, marginTop: 5}}>–ź–Ĺ–į–Ľ—Ė–∑–ł: </Text>
                <Text style={{color:'#ffffff', fontSize: 16, marginTop: 5}}>–ú—Ė—Ā—Ü–Ķ —É –Ņ–į—Ä—ā—Ė—ó: </Text>
              </View>
            </ScrollView>
            <View style={{ display: 'flex', flexDirection: 'row', alignSelf: 'flex-end'}}>
              <View><TouchableHighlight onPress={toggleModal2}><Text style={{color: '#ffffff', margin: 15, fontSize: 20, textAlign: 'right'}}>–Ě–į–∑–į–ī</Text></TouchableHighlight></View>
              <View><TouchableHighlight onPress={toggleModal2}><AddBtn/></TouchableHighlight></View>
            </View>
          </View>
        </View>
      </Modal>*/}


    </View>
  );
}


