async function getProducts() {
    // return window.fetch('https://fakestoreapi.com/products')
    //     .then((res) => res.json())
    //     .then((data) => data)
    //     .catch((err) => { console.log(err) })


    try {
        const res = await window.fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}


export default getProducts

