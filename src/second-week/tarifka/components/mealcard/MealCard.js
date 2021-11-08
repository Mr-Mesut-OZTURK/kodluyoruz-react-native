import React from 'react'
import { Image, Text, TouchableOpacity, ImageBackground } from 'react-native'
import styles from './MealCard.style'

const MealCard = ({ data, onSelect }) => {


    return (
        <TouchableOpacity style={styles.container} onPress={() => onSelect(data.idMeal)}>

            {/* <Image source={{ uri: data.strCategoryThumb }} style={styles.image} />
            <Text style={styles.text}>{data.strCategory}</Text> */}

            <ImageBackground source={{ uri: data.strMealThumb }} resizeMode="cover" style={styles.image}>
                <Text ellipsizeMode="tail" numberOfLines={1} style={styles.text}>{data.strMeal}</Text>
            </ImageBackground>

        </TouchableOpacity>
    )
}

export default MealCard
