import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (url) => {

    const [error, setError] = useState('')
    const [loading, setloading] = useState(true)
    const [products, setProducts] = useState([])


    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const { data } = await axios.get(url)
            setloading(false)
            setProducts(data)
        } catch (err) {
            setloading(false)
            setError(err)
        }
    }


    return ({
        error,
        loading,
        products,
    })

}

export default useFetch
