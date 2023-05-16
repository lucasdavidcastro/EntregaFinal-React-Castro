import brand from '../img/brand.svg'
import { Link } from "react-router-dom"

const Brand = () => {
    return(
        <Link to="/">
         <img src={brand} alt="tienda trc" title='tienda trc'></img>
         </Link>
    )
}

export default Brand;