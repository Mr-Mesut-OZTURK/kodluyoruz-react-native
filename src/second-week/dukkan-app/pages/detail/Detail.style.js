import { StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
        backgroundColor: 'white',
    },
    inner_container: {
        marginTop: 10,
        flex: 1,
        backgroundColor: '#9c8d00',
        padding: 10,
        marginBottom: 10,
        justifyContent: 'space-between'
    },
    image: {
        width: Dimensions.get('window').width-20,
        height: Dimensions.get('window').height/5*2,
        resizeMode: 'contain',
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
    description: {
        color: '#2b2e00'
    },
    price: {
        color: 'white',
        textAlign: 'right',
        fontStyle: 'italic',
    },
})