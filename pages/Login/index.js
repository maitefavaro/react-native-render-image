import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from './styles'

const Login = ({navigation}) => {
    return (
      <View style={styles.container}>
  
        <TextInput style={styles.imput}
          placeholder="Digite seu usuário"
        />

        <TextInput style={styles.imput}
          placeholder="Digite sua senha"
          secureTextEntry={true}
        />

        <TouchableOpacity 
        style={styles.botao}
        onPress={ ()=> navigation.navigate('Home')} 
        >
          <Text style={styles.botaoText}>Entrar</Text>
        </TouchableOpacity>

      </View>
    )
}

export default Login