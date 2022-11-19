import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { 
  Alert, 
  ImageBackground, 
  StyleSheet, 
  Text, 
  Keyboard,
  TouchableWithoutFeedback,
  View } from 'react-native';
import Header from './components/header';
import Form from './components/form';
import Output from './components/output';

export default function App() {

  const img1 = require("./components/img/pg2.jpg");

  const [name, setName] = useState('');
  const [url, setUrl] = useState([]);


  const callApi = () =>{
    axios.get('https://api.genderize.io/?name=' + name).then(function(value){
      setUrl([
        value.data['name'],
        value.data['gender'],
        value.data['probability'],
        value.data['count']
      ])
    }).catch(function(error){
      Alert.alert(error)
    })
  }

  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
      <ImageBackground style={styles.container} source={img1} resizeMode="cover">
        <View style={styles.content}>
          <Header />
          <View style={styles.form}>
            <Form setName={setName} callApi={callApi}/>
          </View>
          <Output url={url}/>
          <StatusBar style="auto" />
        </View>    
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    flex:1,
  },
  form:{
    flex:1,
  }
});
