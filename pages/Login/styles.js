import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5EBE0',
    }, 
    container2:{
      backgroundColor: '#E2D8CE',
      alignItems: 'center',
      justifyContent: 'center',
      height: 200,
      width: 400,
      borderRadius: 10,
    },
    imput: {
      marginTop: 10,
      width: 300,
      backgroundColor: '#fff',
      fontSize: 14,
      borderRadius: 3,
      height: 40,
      padding: 10
    },
    botao: {
      width: 250,
      height: 40,
      backgroundColor: '#D6CCC2',
      marginTop: 15,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: "center"
    },
    botaoText: {
      fontSize: 14,
      color: '#fff'
    }
  })

export default styles