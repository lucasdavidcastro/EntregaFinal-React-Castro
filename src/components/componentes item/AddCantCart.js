import { useContext } from "react"
import { listCartContext } from "../componentes item/ProviderContextoListCart";

const AddCantCart = ({id, quantity}) => {

    const { removeOne, addOne } = useContext(listCartContext)

    return (
        <div className="addCantCart">
            <div className="cantreload">
                <button id="quitar" onClick={() => removeOne(id)}>-</button>
                <span className="cantTxt"> {quantity} unidades</span>
                <button id="aumentar" onClick={() => addOne(id)}>+</button>
            </div>
        </div>
    )
}

export default AddCantCart; 
