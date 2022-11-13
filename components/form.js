import { useState } from "react";
import { Text, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

const Form = ({ callApi, setName }) => {

    //const [name, setName] = useState('');
    

    return ( 
        <View style={styles.contener}>
            <TextInput 
                placeholder="eg John"
                style={styles.input}
               onChangeText={(val)=>setName(val)} 
            />
            <TouchableOpacity>
                <Text onPress={callApi} style={styles.button}>Check</Text>
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
    }
})
 
export default Form;