import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    loader:{
        flex: 1,
    },
    error: {
        flex: 1,
        backgroundColor: '#7e0101',
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        lineHeight: Dimensions.get('window').height/4*3,
    },
    seperator: {
        height: 20,
    },
    container: {
        paddingBottom:100
    },
    header: {
        marginBottom: 10,
        backgroundColor: '#70005d',
        padding: 20,
    },
    header_text:{
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        marginBottom:10,
    },
    header_input: {
        padding:5,
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: '#ccc',
        borderRadius:5,
    },
    list: {
        padding:40,
        paddingTop:0,
        // paddingBottom:150,
    }
})