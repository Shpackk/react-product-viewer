import { Link } from 'react-router-dom'
import '../App.css'

function ProductGroupCard(props: any) {
    const {group} = props
    return (
        <Link className='child' to={`/products/${group}`}>{group}</Link>
    )
}

export { ProductGroupCard }