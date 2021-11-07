import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#ccc',
        // padding: 10,
        flexDirection: 'row',
    },
    image: {
        width:100,
        minHeight:100,
        backgroundColor: 'white',
        resizeMode: 'contain'
    },
    inner_container: {
        flex: 1,
        marginLeft: 10,
        padding: 10,
    },
    title: {
        color: 'black',
        fontSize: 18,
        flex: 1,
    },
    price: {
        textAlign: 'right',
        color: '#21c900',
    }
})