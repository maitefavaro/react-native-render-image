import { TouchableOpacity, View } from "react-native";
import styles from './styles'
import flor from '../../assets/flor-de-cerejeira.png'
import { useState } from "react";

export default function Home(){

    const [mostrarimg, setMostrarimg] = useState(false);
    var random1 = Math.floor(Math.random()*100)+1
    var random2 = Math.floor(Math.random()*100)+1

    return(
        <View style={styles.container}>
            <View>
                {mostrarimg? <img src={"https://picsum.photos/id/"+random1+"/"+random2+"?grayscale"} style={styles.foto}></img> : null}
            </View>
            <TouchableOpacity onPress={()=>setMostrarimg(!mostrarimg, random1.toString(), random2.toString())}>
                <img 
                src={flor} 
                style={styles.flor}/>
            </TouchableOpacity>
        </View>
    )
}