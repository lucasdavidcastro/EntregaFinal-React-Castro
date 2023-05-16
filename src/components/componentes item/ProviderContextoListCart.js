import { useState } from "react";
import { createContext } from "react";
import productos from "../../utils/products";

export const listCartContext = createContext(null);

const ProviderContextoListCart = ({ children }) => {

    const [listCart, setListCart] = useState([]);

    const addProduct = (id) => {
        //producto a añadir al carrito
        const producAdd = productos.find(product => product.id === id)

        // mantendra productos en el carrito 
        const productsToMaintain = listCart.filter(product => product.id !== id)

        let add = true;
        for (let product of listCart) {
            if (product.id === id) {
                let quantity = product.quantity;

                if (quantity < producAdd.stock) {
                    const newQuantity = { ...product, quantity: quantity + 1 }
                    setListCart([...productsToMaintain, newQuantity])
                }

                add = false;
                break
            }
        }

        add && setListCart([...productsToMaintain, { ...producAdd, quantity: 1 }])
    }

    const clearCart = () => {
        setListCart([]);
    }

    const removeFromCart = (id) => {
        const updateList = listCart.filter(product => product.id !== id)
        setListCart(updateList);
    }

    const removeOne = (id) => {
        const productsToMaintain = listCart.filter(product => product.id !== id)
        const product = listCart.filter(product => product.id == id)
        const currentQuantity = product[0].quantity;
        const productWithNewQuantity = { ...product[0], quantity: currentQuantity - 1 }
        // en cero borra el item tambien
        if (productWithNewQuantity.quantity == 0) {
            removeFromCart(id);
        } else {
            setListCart([...productsToMaintain, productWithNewQuantity])
        }
    }

    const addOne = (id) => {
        // nota: agregar control de stock
        const productsToMaintain = listCart.filter(product => product.id !== id)
        const product = listCart.filter(product => product.id == id)
        const currentQuantity = product[0].quantity;
        const newQuantity = { ...product[0], quantity: currentQuantity + 1 }
        setListCart([...productsToMaintain, newQuantity])
    }

    return (
        <listCartContext.Provider value={{ removeFromCart, listCart, addProduct, clearCart, removeOne, addOne }}>
            {children}
        </listCartContext.Provider>
    );
}

export default ProviderContextoListCart
