import { StyleSheet, View, Text } from "react-native";

const Output = ({url}) => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.text}>Name: {url[0]}</Text>
            <Text style={styles.text}>Gender: {url[1]}</Text>
            <Text style={styles.text}>Probability: {url[2]}</Text>
            <Text style={styles.text}>Count: {url[3]}</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 200,
      margin:'auto',
      justifyContent:'center',
      marginHorizontal: 20,
    },
    text: {
        marginTop:10,
        fontSize:20,
        backgroundColor:'white',
        width: 320,
        padding: 10,
        
    }
  });
 
export default Output;