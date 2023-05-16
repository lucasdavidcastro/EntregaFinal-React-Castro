import { useContext } from "react";
import { listCartContext } from "../componentes item/ProviderContextoListCart";
import cart from "../../img/cart-white.svg"

const ButtonAddCart = ( {id, svg} ) => {
    
    let {addProduct } = useContext(listCartContext)

    const handlerClick = () => { 
        addProduct(id)
    }
    
    return(
        <button id="addCart" onClick={handlerClick}>
            <img src={cart} alt="add"></img>
        </button>
    )
}

export default ButtonAddCart;