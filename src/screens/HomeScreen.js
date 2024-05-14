import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  
  return (
    <View style={{flex :1,alignItems:'center',
      justifyContent:'center'}} >
        <Text>Ana Ekran</Text>
        <Button
        title='Bilgilerim'
        onPress={() =>navigation.navigate('Bilgilerim')}
        />
         <Button
        title='kurs bilgilerim'
        onPress={() =>navigation.navigate('Kurs bilgilerim')}
        />

    </View>
  );
}

const styles = StyleSheet.create({})