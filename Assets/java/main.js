import loader from "./components/loader.js"
import showMenu from "./components/showMenu.js"
import showCart from "./components/showCart.js"
import products from "./components/products.js"
import getProducts from "./helpers/getProducts.js"
import cart from "./components/cart.js"



// UI Elements

// Ocultar loader
loader()

// MOSTRAR MENU
showMenu()

// MOSTRAR CARRITO
showCart()

// END UI Elements

// PRODUCTS
const { db, printProducts } = products(await getProducts())

// CARRITO
cart(db, printProducts)
