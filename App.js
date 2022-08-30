import React from  'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
//import 143 from './assets/img/143.png';

const Pokemon = () => {
  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontsize: 45,
            alignSelf: "center",
            color: "green",
          }}
        >
          Snorlax Berrice 
        </Text>
        <Image
           src = 'C:\Users\CAMARGO\Desktop\APW\APW\assets\img\143.png'
          //source={{url:'143.png'}}
          style={{ width: 200, height: 210, alignSelf: "center"}}
        />
      </View>

      <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            padding: 5,
            margin: 15,
          }}
          defaultValue="Digite Aqui!"
        />

    </ScrollView>
  );
}

export default Pokemon