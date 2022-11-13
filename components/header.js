import { View, Text, StyleSheet } from "react-native";

const Header = () => {
    return ( 
        <View style={styles.header}>
            <Text style={styles.text}>Genderize</Text>
        </View>
     );
}
 
const styles = StyleSheet.create({
    header: {
        padding: 10,
        backgroundColor:'#000'
    },
    text: {
        color:'#fff',
        marginVertical:25,
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
    },
})

export default Header;