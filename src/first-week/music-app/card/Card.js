import React from 'react'
import { Text, View, Image } from 'react-native'
import styles from './Card.style'

const Card = ({ song }) => {
    return (
        <View style={styles.card_container}>

            <Image
                style={styles.card_image}
                source={{ uri: song.imageUrl }}
            />

            <View style={styles.card_info_container}>
                <Text style={styles.card_title}>{song.title}</Text>

                <View style={styles.card_inner_container}>
                    <Text style={styles.card_artist}>{song.artist}</Text>
                    <Text style={styles.card_year}>{song.year}</Text>
                    {song.isSoldOut &&<Text style={styles.card_isSold}>TÜKENDİ</Text>}
                </View>
            </View>

        </View>
    )
}

export default Card
