import React from 'react'
import { SafeAreaView, View, Text, FlatList, ScrollView, Image } from "react-native"
import styles from "./card/Card.style"
import Card from "./card/Card"

import news_data from './news.json'
import banner_data from './newsbanner.json'

const NewsApp = () => {
    // console.log(news_data)
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.main_title}>News App</Text>



            <FlatList

                ListHeaderComponent={
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {
                            banner_data.map((item)=>(
                                <Image
                                    style={styles.banner}
                                    source={{uri:item.imageUrl}}
                                />
                            ))
                        }
                    </ScrollView>
                }

                keyExtractor={item =>item.u_id.toString()}
                data={news_data}
                renderItem={({item})=>(<Card data={item}/>)}
            />
            
         
        </SafeAreaView>
    )
}

export default NewsApp
