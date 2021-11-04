import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    card_container : {
        flex : 1,
        flexDirection:'row',
        padding : 10,
    },
    card_image : {
        width : 100,
        height : 100,
        borderRadius:50,
    },
    card_info_container :{
        flex : 1,
        justifyContent : 'center',
        padding : 10,
    },
    card_title :{
        fontWeight: 'bold',
        color: 'black',
        fontSize: 25,
    },
    card_inner_container :{
        flexDirection:'row',
    },
    card_artist :{
        marginRight: 10,
        color: 'black',
        fontSize: 16,
    },
    card_year :{},
    card_isSold :{
        position: 'absolute',
        right: 10,
        borderColor: 'red',
        borderWidth: 2,
        padding: 10,
        paddingBottom: 5,
        textAlign: 'center',
        color: 'red'

    },
})