import { View, Text } from 'react-native'
import { styles } from '../../assets/styles/style'



export default function Homepage() {
    return (
        <View style={styles.container}>
            <View style={styles.red} />
            <View style={styles.green} />
            <View style={styles.blue} />
        </View>

    )
}