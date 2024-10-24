import { StyleSheet, Dimensions, StatusBar } from 'react-native'

export const { height, width } = Dimensions.get('screen')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    red: {
        backgroundColor: 'red',
        height: width / 2,
        width: width / 2,
        borderRadius: width / 4
    },
    blue: {
        backgroundColor: 'blue',
        height: width / 2,
        width: width / 2,
        borderRadius: width / 4
    },
    green: {
        backgroundColor: 'green',
        height: width / 2,
        width: width / 2,
        borderRadius: width / 4
    }

})