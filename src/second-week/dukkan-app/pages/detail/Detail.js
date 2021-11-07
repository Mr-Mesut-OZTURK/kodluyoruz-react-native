import React from 'react'
import { View, Text, Button, Image } from 'react-native'
import styles from './Detail.style'

import useFetch from '../../components/useFetch'

import LottieView from 'lottie-react-native'


const Detail = ({ navigation, route }) => {

    
    console.log(route)
    const { id } = route.params
    url = `https://fakestoreapi.com/products/${id}`

    const {error, loading, products} = useFetch(url)

    const handleGoBack = () => {
        navigation.goBack();
    }

    if (loading) {
        return <LottieView source={require('../../assets/loading.json')} autoPlay loop/>
    }

    if (error){
        return <LottieView source={require('../../assets/error.json')} autoPlay loop/>
    }

    return (
        <View style={styles.container}>

            <Image source={{uri:products.image}} style={styles.image}/>
            
            <View style={styles.inner_container}>
                <Text style={styles.title}>{products.title}</Text>
                <Text style={styles.description}>{products.description}</Text>
                <Text style={styles.price}>{products.price} $</Text>
            </View>

            <Button onPress={handleGoBack} title="Go Back" />

        </View>
    )
}

export default Detail


//output
// {
//     id:1,
//     title:'...',
//     price:'...',
//     category:'...',
//     description:'...',
//     image:'...'
// }