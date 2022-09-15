import { useParams } from "react-router-dom"
import { useSingleProduct } from '../hooks/useSingleProduct'

function GroupProducts() {
    const {group} = useParams<string>()
    const {product} = useSingleProduct(group)
    return (
        <div>{JSON.stringify(product, null, 2)}</div>
    )
}

export { GroupProducts }