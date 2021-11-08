import { StyleSheet, Dimensions} from 'react-native'


export default StyleSheet.create({
    container: {
        margin: 10,
        overflow: 'hidden',
        borderRadius:20,
    },
    image: {
        width:Dimensions.get('window').width-20,
        height:150,
        resizeMode: 'contain',
        borderRadius:20,
        justifyContent: 'flex-end',
    },
    text: {
        color: "white",
        fontSize: 25,
        lineHeight: 50,
        fontWeight: "bold",
        textAlign: "right",
        backgroundColor: "#00000065",
        // overflow: "hidden",
        paddingLeft: 20,
        paddingRight: 30,
    },
})