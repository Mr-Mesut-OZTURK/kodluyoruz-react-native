import React, { useState } from 'react'
import { TouchableHighlight, Text } from 'react-native'

import styles from './Card.style'

const Card = ({todo, handleLongPress }) => {
    const [status, setstatus] = useState(true)

    const handlePress = () => {
        setstatus(!status)
    }

    return (
        <TouchableHighlight 
            style={status?styles.card_container:styles.card_container_deactive} 
            onPress={handlePress}
            onLongPress={() => handleLongPress(todo)}
        >
            <Text style={styles.card_text}>{todo}</Text>
        </TouchableHighlight>
    )
}

export default Card
