import { StyleSheet, Dimensions } from "react-native"

export default StyleSheet.create({
    
 
    container: {
        backgroundColor: '#f1f1f1',
        // margin: 10,
        // padding:20,
        borderRadius: 10,
    },
    main_title : {
        textAlign:"center",
        padding:20,
        fontSize: 25,
        color: "black",
    },
    banner : {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 4,
    },
    card_container : {
        backgroundColor:"navy",
        margin: 20,
        marginTop: 30,
        paddingBottom: 10,
        borderRadius: 10,
    },
    image: {
        height: Dimensions.get('window').height / 4,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    inner_container: {
        padding:5,
        paddingLeft: 15,
        paddingRight: 15,
        
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: "white",
    },
    description: {
        marginTop: 3,
        color: "white",
    },
    author: {
        fontStyle: 'italic',
        textAlign: 'right',
        color: "white",
    },
})