import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import styles from './ProductCard.style'

const ProductCard = ({ product, onSelect }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onSelect(product.id)}>

            <Image style={styles.image} source={{ uri: product.image }} />

            <View style={styles.inner_container} >
                <Text style={styles.title} >{product.title}</Text>
                <Text style={styles.price} >{product.price}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default ProductCard
