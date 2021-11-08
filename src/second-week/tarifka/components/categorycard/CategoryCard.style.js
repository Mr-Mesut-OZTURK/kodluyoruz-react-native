import { StyleSheet, Dimensions} from 'react-native'


export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ECEFF1',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        margin: 5,
        borderWidth: 1,
        borderColor: '#aaa'
        // padding: 10,
    },
    image: {
        width:100,
        height:100,
        resizeMode: 'contain',
    },
    text: {
        marginLeft: 10,
        fontSize:20,
        color: 'black'

    },
})