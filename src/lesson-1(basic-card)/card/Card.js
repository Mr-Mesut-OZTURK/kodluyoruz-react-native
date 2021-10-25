import React from 'react'
import {View, Text, Button} from 'react-native';
import styles from './Card.style'

const Card = (props) => {
    return (
    <View style={styles.card_container}>
        <View style={styles.card_body}>
          <Text>{props.title}</Text>
          <Text>{props.text}</Text>
        </View>

        <Button title="gönder" style={{backgroundColor:"red"}}/>
    </View>
    )
}

export default Card
