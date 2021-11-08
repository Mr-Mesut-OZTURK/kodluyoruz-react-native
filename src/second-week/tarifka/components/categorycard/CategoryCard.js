import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import styles from './CategoryCard.style'

const CategoryCard = ({ data, onSelect }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onSelect(data.strCategory)}>

            <Image source={{ uri: data.strCategoryThumb }} style={styles.image} />
            <Text style={styles.text}>{data.strCategory}</Text>

        </TouchableOpacity>
    )
}

export default CategoryCard
