import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Style'

const Card = ({ product }) => {
    return (
        <View style={styles.card_container}>
            <Image
                style={styles.image}
                source={{ uri: product.imgURL }}
            />

            <View style={styles.inner_container}>
                <Text style={styles.card_title}>{product.title}</Text>
                <Text style={styles.card_price}>{product.price}</Text>
                {
                    product.inStock?(<Text style={styles.inStock}>STOKTA YOK</Text>):null
                }
            </View>
        </View>
    )
}

export default Card
