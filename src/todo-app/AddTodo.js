import React, {useState} from 'react'
import { View, TextInput, Button } from 'react-native'

import styles from './AddTodo.style'


const AddTodo = ({ text, setText, addTodoItem }) => {

    const [active, setActive] = useState(true);

    const handleFocus = () => {
        console.log("focus")
        setActive(true);
    }
    const handleBlur = () => {
        console.log("blur")
        setActive(false);
    }

    return (
        <View style={styles.add_container}>
            <TextInput 
                style={styles.add_input}
                value={text}
                onChangeText={setText}
                placeholder="Ara..."
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <Button 
                title="Add"
                onPress={addTodoItem}
                color={active?"#FFA500":"#808080"}
            />
        </View>
    )
}

export default AddTodo
