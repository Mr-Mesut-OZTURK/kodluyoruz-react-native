import React from 'react'
import { View, Text, Image } from "react-native"

import styles from "./Card.style"


const Card = ({data}) => {
    return (
        <View style={styles.card_container}>
            <Image 
                source={{uri : data.imageUrl}}
                style={styles.image}
            />
           <View style={styles.inner_container}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.description}>{data.description}</Text>
                <Text style={styles.author}>{data.author}</Text>
           </View>
        </View>
    )
}

export default Card
