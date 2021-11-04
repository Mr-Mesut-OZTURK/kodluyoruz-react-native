import { StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
    card_container : {
        backgroundColor: '#7DA453',
        marginBottom: 10,
        borderRadius: 5,
        padding: 5,
        paddingLeft:15,
    },
    card_container_deactive : {
        backgroundColor: '#37474F',
        marginBottom: 10,
        borderRadius: 5,
        padding: 5,
        paddingLeft:15,
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid',
        textDecorationColor: "black",
    },
    card_text : {
        color: 'white',
        fontSize:18,
    }
})