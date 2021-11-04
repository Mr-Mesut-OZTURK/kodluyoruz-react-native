import React from "react";

import { SafeAreaView, Button } from "react-native"

import styles from "./card/Card.style"
import Card from './card/Card'


function CardApp({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>

      <Button
        title="Go To Card App"
        onPress={() => navigation.goBack()}
      />

      <Card
        title="mesut"
        text="merhaba dünya"
      />
      <Card
        title="yakup"
        text="merhaba izmir"
      />
      <Card
        title="halid"
        text="merhaba corede"
      />

    </SafeAreaView>
  )

}

export default CardApp