import React from 'react'
import { View, Text, Button, FlatList, Pressable } from 'react-native'

import useFetch from '../../hooks/usefetch'
import LottieView from 'lottie-react-native'

import styles from './Meals.style'
import MealCard from '../../components/mealcard'

const Meals = ({ navigation, route }) => {

    const { category } = route.params
    const url_meals = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    const { loading, error, data } = useFetch(url_meals)

    const handleSelect = (id) => {
        navigation.navigate('Detail', { id })
    }

    const renderMeals = ({ item }) => (<MealCard data={item} onSelect={ handleSelect }/>)

    if (loading) {
        return <LottieView source={require('../../assets/loading.json')} autoPlay loop />
    }

    if (error) {
        return <LottieView source={require('../../assets/error.json')} autoPlay loop />
    }

    return (
        <View>

            <View style={styles.top_container}>

                <Pressable onPress={() => navigation.goBack()} resizeMode="cover" >
                    <Text style={styles.header_text}>Categories</Text>
                </Pressable>
                <Text style={styles.header_text}>Meals</Text>

            </View>

            <FlatList
                style={styles.list}
                data={data.meals}
                renderItem={renderMeals}
                contentContainerStyle={{ paddingBottom: 100 }}
            />

        </View>
    )
}

export default Meals
