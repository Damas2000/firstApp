import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'

export default function CoursesScreen() {
    const courses =[
        {name:'React Native',id:1},
        {name:'react Js',id:2},
        {name:'c#',id:3},
        {name:'Kotlin',id:4},
        {name:'FullStack Web Developer',id:5},
  
    ]
    const names = [
      {name:'betül bölük ',id:1},
      {name:'Muahmmet Ali Baz ',id:2},
      {name:'Emir Yavuz ',id:3},
      {name:'Kayahan Yılmaz ',id:4},
    ]
    return (
        <><><Text style={styles.Header}>Öğrenim Becerilerim :</Text><FlatList data={courses}
    
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <Text style={styles.content}>{item.name}</Text>;
          } } /></><><Text style={styles.Header}>Arkadaşlarım:</Text><FlatList data={names}
    
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return <Text style={styles.content}>{item.name}</Text>;
            } } /></></>
            
      );
}

const styles = StyleSheet.create({
    content:{
        fontSize:20,
        backgroundColor:'grey',
        color:'blue',
        marginVertical:10,
        padding:20,
    
    
      },
      Header:{
        fontSize:25,
        padding:20,
      }
})