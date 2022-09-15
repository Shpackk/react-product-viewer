import { useEffect, useState } from "react"
import { fetchSingleGroup } from "../services/fetchData"


const useSingleProduct = (productName: any) => {
    const [product, setProduct] = useState<any>()

    useEffect(() => {
        const rawData = fetchSingleGroup(productName)
        const singleProduct = rawData.filter(product => product.name === productName)
        setProduct(singleProduct)
    }, [productName])

    return { product }
}

export { useSingleProduct }