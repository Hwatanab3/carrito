function products(products) {
    const db = [...products]

    function printProducts() {
        const productsDOM = document.querySelector('.products__container')
        let htmlProduct = ''

        for (const product of db) {
            htmlProduct += `
            <article class="product">
                    <div class="product__image">
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    <div class="product__content">
                        <button type="button" class="product__btn add--to--cart" data-id="${product.id}">
                            <i class="fa-solid fa-cart-arrow-down"></i>
                        </button>
                        <span class="product__price">${product.price} oros</span>
                        <span class="product__stock">Disponible ${product.rating.count}</span>
                        <h3 class="product__title">${product.title}</h3>
                    </div>
                </article>
                `
        }

        productsDOM.innerHTML = htmlProduct
    }
    printProducts()

    return {
        db,
        printProducts
    }
}



export default products

