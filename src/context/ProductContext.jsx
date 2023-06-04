//components
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';

export const ContextProduct = createContext();


const initialStateProduct = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];


export function ProductContext({ children }) {

    const [products, setProducts] = useState(initialStateProduct)
   
    const getProductsData = async () => {
        try {
            const url = "/products.json"
            const response = await fetch(url)
            const productsData = await response.json()
            setProducts(productsData)
        }
        catch (error) {
        }
    }

    useEffect(() => {
        if (products.length === 0) {
            getProductsData()
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products)) // se transforma el JSON guardado en array.
    }, [products])

    const createProduct = newProduct => {
        setProducts([newProduct, ...products])
    }

    const deleteProduct = id => {
        const newProducts = products.filter(product => product.id !== id)
        setProducts(newProducts)
    }

    const editProduct = newProduct => {
        const newProducts = products.map(product => {
            if (product.id === newProduct.id) {
                return newProduct;
            }
            return product;
        });
        newProducts.sort(sortById);
        setProducts(newProducts);
    };
    function sortById(a, b) {
        if (a.id < b.id) {
            return -1;
        } else if (a.id > b.id) {
            return 1;
        } else {
            return 0;
        }
    }

    const [cartAmount, setCartAmount] = useState(0)
    const [productsCount, setProductsCount] = useState(0)
    const [cartItems, setCartItems] = useState([])

    function addProductToCart(id, img, user, title, price, quantity, cartQuantity) {
        const existingProduct = cartItems.find((product) => product.id === id);
        if (existingProduct) {
            const updatedCartItems = cartItems.map((product) => {
                if (product.id === id) {
                    return { ...product, cartQuantity };
                }
                return product;
            });
            setCartItems(updatedCartItems);
        } else {
            const newItem = { id, img, user, title, price, quantity, cartQuantity };
            setCartItems([...cartItems, newItem]);
        }
    }

    return <ContextProduct.Provider value={{
        products,
        createProduct,
        deleteProduct,
        editProduct,
        cartItems,
        setCartItems,
        cartAmount,
        setCartAmount,
        productsCount,
        setProductsCount,
        addProductToCart,
    }}>{children}</ContextProduct.Provider>
}