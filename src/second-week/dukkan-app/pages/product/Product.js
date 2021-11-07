import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TextInput, ActivityIndicator } from 'react-native'
import styles from './Product.style'
import ProductCard from '../../components/productcard'

import LottieView from 'lottie-react-native'

import Config from 'react-native-config'
// import URL_FAKE_STORE_API

import useFetch from '../../components/useFetch'

const Product = ({navigation}) => {

    const [search, setSearch] = useState("")
    const [data, setData] = useState([])
    

    const {error, loading, products} = useFetch('https://fakestoreapi.com/products')

    useEffect(() => {
        setData(products)
    },[products])
    
    useEffect(() => {

        search === "" ? setData(products) : setData(products.filter(item =>{
            return item.title.toLocaleLowerCase().search(search.toLocaleLowerCase())!== -1
        }))

    }, [search])

    const handleSelect = (id) => {
        console.log(id)
        navigation.navigate('Detail', {id})
    }
   

    const renderProducts = ({ item }) => (<ProductCard product={item} onSelect={handleSelect} />)

    const itemSeparator = () => <View style={styles.seperator} />

    if (loading) {
        return <LottieView source={require('../../assets/loading.json')} autoPlay loop/>
    }

    if (error){
        return <LottieView source={require('../../assets/error.json')} autoPlay loop/>
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                {/* <Text style={styles.header_text}>Dukkan</Text> */}
                <TextInput style={styles.header_input} onChangeText={setSearch}/>
            </View>

            <FlatList
                style={styles.list}
                ItemSeparatorComponent={itemSeparator}
                data={data}
                renderItem={renderProducts}
            />

        </View>
    )
}


export default Product
