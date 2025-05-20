import React, { useEffect, useState } from 'react'

const UseFecth = (url, option) => {
    const [fecthData, setfecthData] = useState(null)
    const [error, setError] = useState(null)



    const FecthApi = async () => {

        try {
            const response = await fetch(url, option).then((val) => val.json());
            setfecthData(response)
            return response
        } catch {
            setError('Error')
        }

    }
    // const FecthApi = () => {
    //     const data = fetch(url, option);
    //     const response = data.json()
    //     setfecthData(response)
    // }

    useEffect(() => {
        FecthApi()
    }, [])

    return { fecthData, error, FecthApi }
}

export default UseFecth