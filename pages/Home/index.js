import { TouchableOpacity, View } from "react-native";
import styles from './styles'
import flor from '../../assets/flor-de-cerejeira.png'

export default function Home(){
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <img 
                src={flor} 
                style={styles.flor}/>
            </TouchableOpacity>
        </View>
    )
}