import React, { useState, useEffect } from 'react';

import { Alert, Modal, StyleSheet, Text, Pressable, View, Image } from 'react-native';

type ListMember = {
name: string;
id: string;
}

type ListMembers = {
members: ListMember[];
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  }
});


export const ListScreen: React.FC = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<ListMembers>({ members: [] });

  useEffect(() => {
    const setDataFromFetch = async () => {
      setLoading(true);
      const dataFetch = await (await fetch('http://159.89.213.194:81/api/normative-documents?page=1')).json();
      const members: ListMember[] = dataFetch['hydra:member'];
      setLoading(false);
      setData({ ...data, members });

    }
    setDataFromFetch();
  }, []);

  //data.members.map((members) => console.log(members.id));
  //data.members.map((members) =>  );

  //const ddd = {modalVisible2: 'dddd',  setModalVisible2: 'dddddd'};
  const [modalVisible2, setModalVisible2] = useState(false);
  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (<Image source={{ uri: 'https://i.pinimg.com/originals/8d/e8/7c/8de87c042a100c8528e58916dd45c043.gif' }} style={{width: 100, height: 150}}/>) : (
        data.members.map(member => {
        
          return (   
          // eslint-disable-next-line react/jsx-key
            <View style={styles.centeredView}>
              <Modal
                transparent={true}
                visible={modalVisible2}
                key={member.id}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  setModalVisible2(!modalVisible2);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.modalText}>{member.id}</Text>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible2(!modalVisible2)}
                    >
                      <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable
                key={member.id}
                style={[styles.button, styles.buttonOpen]}
                //onPress={() => setModalVisible2(true)}`${member.id}`
                onPress={() => setModalVisible2(true)}
              >
                <Text style={styles.textStyle}>{member.name}</Text>
              </Pressable>
            </View>
          )
        })
      )
      }
    </View>
  );
};
