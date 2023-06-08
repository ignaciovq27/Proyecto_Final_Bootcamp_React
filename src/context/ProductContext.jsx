//components
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';

export const ContextProduct = createContext();

// 3) crear initialStateProduct para inicializar el array de productos guardados
// ¡ SE CREA SIEMPRE FUERA DEL PRODUCTCONTEXT !
const initialStateProduct = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products")) //si el producto de la key "product" existe, se transforma el STRINGJSON a array
    : []; //si no existen productos creados, el estado inicial de producto es "null" o []

const initialStateAccessories = localStorage.getItem("accessories")
    ? JSON.parse(localStorage.getItem("accessories"))
    : [];

const initialStateMiniatures = localStorage.getItem("miniatures")
    ? JSON.parse(localStorage.getItem("miniatures"))
    : [];


export function ProductContext({ children }) {

    // 1) array para enlistar productos de json.
    const [products, setProducts] = useState(initialStateProduct)
    const [accessories, setAccessories] = useState(initialStateAccessories)
    const [miniatures, setMiniatures] = useState(initialStateMiniatures)

    // 2) Realizar llamada al json para obtener info de productos.
    const getProductsData = async () => {
        try {
            // Consulta a la API.
            const url = "/products.json"
            const response = await fetch(url)
            const productsData = await response.json()
            setProducts(productsData)
        }
        catch (error) {
            console.log(error)
        }
    }

    const getAccessoriesData = async () => {
        try {
            // Consulta a la API.
            const url = "/accessories.json"
            const response = await fetch(url)
            const accessoriesData = await response.json()
            setAccessories(accessoriesData)
        }
        catch (error) {
            console.log(error)
        }
    }

    const getMiniaturesData = async () => {
        try {
            // Consulta a la API.
            const url = "/miniatures.json"
            const response = await fetch(url)
            const miniaturesData = await response.json()
            setMiniatures(miniaturesData)
        }
        catch (error) {
            console.log(error)
        }
    }

    // 4) utilizar useEffect para comprobar si el array de productos del local storage esta o no vacio.
    useEffect(() => {
        if (products.length === 0) {
            getProductsData() // si está vacio, solo llama a los productos de products.json
        }
    }, [])

    useEffect(() => {
        if (accessories.length === 0) {
            getAccessoriesData()
        }
    }, [])

    useEffect(() => {
        if (miniatures.length === 0) {
            getMiniaturesData()
        }
    }, [])

    // 5) En caso contrario, se usa useEffect para comprobar la información de productos del localStorage y usarlos como un nuevo array de productos.
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products)) // se transforma el JSON guardado en array.
    }, [products]) // al estar pendiente de "products", cada vez que se añada un nuevo producto se guardará en el localStorage.

    useEffect(() => {
        localStorage.setItem("accessories", JSON.stringify(accessories))
    }, [accessories])

    useEffect(() => {
        localStorage.setItem("miniatures", JSON.stringify(miniatures))
    }, [miniatures])

    // 6) añadir producto desde "mis publicaciones" del usuario
    const createProduct = newProduct => {
        setProducts([newProduct, ...products])
    }

    // 7) borrar producto desde "mis publicaciones" del usuario
    const deleteProduct = id => {
        const newProducts = products.filter(product => product.id !== id)
        setProducts(newProducts)
    }

    // 8) editar producto desde "mis publicaciones" del usuario
    const editProduct = newProduct => {
        const newProducts = products.map(product => {
            if (product.id === newProduct.id) {
                return newProduct;
            }
            return product;
        });
        newProducts.sort(sortById); // Ordenar por ID antes de actualizar los productos
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

    // {
    // id: "",
    // title: "",
    // category: "",
    // price: "",
    // img: "",
    // user: "",
    // quantity: "",
    // description: "",
    // }

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
        accessories,
        miniatures,
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