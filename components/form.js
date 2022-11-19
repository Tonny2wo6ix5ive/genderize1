import { useState } from "react";
import { 
    Text, 
    StyleSheet, 
    TextInput, 
    TouchableOpacity, 
    View,
 } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Form = ({ callApi, setName }) => {   

    return ( 
        <View style={styles.contener}>
            <TextInput 
                placeholder="eg John"
                style={styles.input}
               onChangeText={(val)=>setName(val)} 
            />
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text onPress={callApi} style={styles.text}>Check</Text>
                    <AntDesign name="search1" size={24} color="black" />
                </View>
            </TouchableOpacity>
        </View>
     );
}

const styles = StyleSheet.create({
    input:{
        backgroundColor:'white',
        paddingHorizontal:6,
        paddingVertical:4,
        marginBottom: 30,
        height:50,
        borderRadius:10,
        textAlign: 'center',
    },
    contener:{
        marginHorizontal:15,
        marginTop:30,
    },
    button: {
        borderRadius:10,
        backgroundColor:'orange',
        textAlign:'center',
        padding:15,
        flexDirection:'row',
        justifyContent:"center"
    },
    text:{
        marginRight:10,
        fontWeight:'bold',
        fontSize:20,
    }
})
 
export default Form;