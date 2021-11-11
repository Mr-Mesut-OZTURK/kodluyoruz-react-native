import React from 'react'
import { View, Text, Button, FlatList } from 'react-native'

import LottieView from 'lottie-react-native'
import useFetch from '../../hooks/usefetch'

import CategoryCard from '../../components/categorycard'

import styles from './Categories.style'



const Categories = ({ navigation }) => {

    const url_category = 'https://www.themealdb.com/api/json/v1/1/categories.php'

    const { loading, error, data } = useFetch(url_category)

    const handleSelect = (category) => {
        navigation.navigate('Meals', { category })
    }

    const renderMeals = ({ item }) => (<CategoryCard data={item} onSelect={handleSelect} />)

    if (loading) {
        return <LottieView source={require('../../assets/loading.json')} autoPlay loop />
    }

    if (error) {
        return <LottieView source={require('../../assets/error.json')} autoPlay loop />
    }

    return (
        <View style={styles.container}>

            <View style={styles.top_container}>
                <Text style={styles.header_text}>Categories</Text>
            </View>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                style={styles.list}
                data={data.categories}
                renderItem={renderMeals}
                contentContainerStyle={{ paddingBottom: 50 }}
            />

        </View>
    )
}

export default Categories
