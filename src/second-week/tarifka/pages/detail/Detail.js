import React from 'react'
import { View, Text, Button, Pressable, Image, ScrollView, Linking } from 'react-native'
import styles from './Detail.style'

import useFetch from '../../hooks/usefetch'
import LottieView from 'lottie-react-native'
import OpenURLButton from '../../components/urlbutton'


const Products = ({ navigation, route }) => {

    const { id } = route.params

    const url_meal_details = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    const { loading, error, data } = useFetch(url_meal_details)

    // console.log(data)


    if (loading) {
        return <LottieView source={require('../../assets/loading.json')} autoPlay loop />
    }

    if (error) {
        return <LottieView source={require('../../assets/error.json')} autoPlay loop />
    }

    return (
        <View style={styles.container}>

                <View style={styles.top_container}>
                    <Pressable onPress={() => navigation.goBack()} >
                        <Text style={styles.header_text}>Meals</Text>
                    </Pressable>
                    <Text style={styles.header_text}>Detail</Text>
                </View>

            <ScrollView>

                <Image style={styles.image} source={{ uri: data.meals[0].strMealThumb }} />

                <View style={styles.middle_container}>
                    <Text style={styles.body_title}>{data.meals[0].strMeal}</Text>
                    <Text style={styles.body_country}>{data.meals[0].strArea}</Text>
                </View>

                <View style={styles.body_container}>

                    <Text style={styles.body_info}>{data.meals[0].strInstructions}</Text>
                    <OpenURLButton color="red" url={data.meals[0].strYoutube}>Watch on YouTube</OpenURLButton>

                </View>

            </ScrollView>
        </View>
    )
}

export default Products
