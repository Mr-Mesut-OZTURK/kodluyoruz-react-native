import React from "react";
import { SafeAreaView } from "react-native"
import styles from "./card/Card.style"
import Card from './card/Card'

function CardApp() {

  return (
    <SafeAreaView style={styles.container}>

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