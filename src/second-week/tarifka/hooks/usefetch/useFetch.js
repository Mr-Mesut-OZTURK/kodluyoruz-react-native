import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (url) => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const { data: productData } = await axios.get(url)
            // console.log(productData.categories)
            setData(productData)
            setLoading(false)
            setError(false)
        } catch (err) {
            setLoading(false)
            setError(true)
        }
    }


    return ({
        loading,
        error,
        data,
    })
}

export default useFetch;
