import { StyleSheet, Dimensions } from 'react-native'


export default StyleSheet.create({
    container: {
        flex: 1,
    },
    top_container:{
        flexDirection: 'row',
        padding:10,
    },
    header_text:{
        color:'#FFA500',
        fontSize:20,
        textAlign:'center',
        marginBottom:10,
        flex: 1,
    },

    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/5*2,
        // backgroundColor:'red',
    },

    // middle
    middle_container:{
        backgroundColor:'#eee',
        paddingLeft:10,
        padding: 5,
        borderBottomWidth:1,
        borderBottomColor: "#999",
    },
    body_title: {
        color:'#A52A2A',
        fontSize:25,
    },
    body_country: {
        color:'#A52A2A',
        fontSize:18,
    },

    // body
    body_container: {
        backgroundColor:'#eee',
        padding:10,
        flex: 1,
    },
    body_info: {
        color:'#2e2e2e',
        marginBottom:10,
    },
    youtube_button: {
        marginBottom:10,
        backgroundColor: 'red',
        color:'#333'
    },

})