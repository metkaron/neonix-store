// ==========================================
// NEONIX — STORE ENGINE
// ==========================================

const products = [

    {
        id: 1,
        name: "iPhone 15 Pro",
        category: "smartphones",
        categoryName: "Смартфоны",
        price: 899,
        oldPrice: 999,
        badge: "PRO",
        rating: 4.9,
        reviews: 245,
        stock: 12,

        images: {
            Black:
                "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1000&q=90",

            Silver:
                "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?auto=format&fit=crop&w=1000&q=90",

            Blue:
                "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=1000&q=90"
        },

        description:
            "Флагманский смартфон с титановым корпусом, мощным процессором и профессиональной камерой.",

        specs: {
            screen: '6.1" OLED',
            cpu: "A17 Pro",
            camera: "48 MP"
        },

        memories: {
            128: 899,
            256: 999,
            512: 1199
        }
    },


    {
        id: 2,
        name: "Galaxy S24 Ultra",
        category: "smartphones",
        categoryName: "Смартфоны",
        price: 999,
        oldPrice: 1099,
        badge: "TOP",
        rating: 4.8,
        reviews: 189,
        stock: 8,

        images: {
            Black:
                "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1000&q=90",

            Silver:
                "https://images.unsplash.com/photo-1707234222208-87c5d2c67d3d?auto=format&fit=crop&w=1000&q=90",

            Blue:
                "https://images.unsplash.com/photo-1707234222208-87c5d2c67d3d?auto=format&fit=crop&w=1000&q=90"
        },

        description:
            "Премиальный смартфон с огромным AMOLED-дисплеем и продвинутой камерой.",

        specs: {
            screen: '6.8" AMOLED',
            cpu: "Snapdragon 8 Gen 3",
            camera: "200 MP"
        },

        memories: {
            256: 999,
            512: 1099,
            1024: 1299
        }
    },


    {
        id: 3,
        name: "Gaming Phone X",
        category: "smartphones",
        categoryName: "Смартфоны",
        price: 699,
        oldPrice: 799,
        badge: "GAMING",
        rating: 4.9,
        reviews: 128,
        stock: 15,

        images: {
            Black:
                "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1000&q=90",

            Silver:
                "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1000&q=90",

            Blue:
                "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1000&q=90"
        },

        description:
            "Игровой смартфон с высокой производительностью и быстрым экраном.",

        specs: {
            screen: '6.7" AMOLED',
            cpu: "Snapdragon 8",
            camera: "50 MP"
        },

        memories: {
            128: 699,
            256: 799,
            512: 899
        }
    },


    {
        id: 4,
        name: "MacBook Pro M3",
        category: "laptops",
        categoryName: "Ноутбуки",
        price: 1499,
        oldPrice: 1699,
        badge: "PRO",
        rating: 5.0,
        reviews: 94,
        stock: 7,

        images: {
            Black:
                "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=90",

            Silver:
                "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1000&q=90",

            Blue:
                "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=90"
        },

        description:
            "Мощный ноутбук для программирования, монтажа, работы и творчества.",

        specs: {
            screen: '14" Liquid Retina',
            cpu: "Apple M3",
            camera: "1080p"
        }
    },


    {
        id: 5,
        name: "ROG Gaming Laptop",
        category: "laptops",
        categoryName: "Ноутбуки",
        price: 1399,
        oldPrice: 1599,
        badge: "GAMING",
        rating: 4.8,
        reviews: 76,
        stock: 5,

        images: {
            Black:
                "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=1000&q=90",

            Silver:
                "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1000&q=90",

            Blue:
                "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=1000&q=90"
        },

        description:
            "Производительный игровой ноутбук для современных игр.",

        specs: {
            screen: '15.6" 240Hz',
            cpu: "Intel Core i9",
            camera: "1080p"
        }
    },


    {
        id: 6,
        name: "RTX Gaming PC",
        category: "gaming",
        categoryName: "Gaming",
        price: 1799,
        oldPrice: 1999,
        badge: "ULTRA",
        rating: 4.9,
        reviews: 51,
        stock: 4,

        images: {
            Black:
                "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=1000&q=90",

            Silver:
                "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1000&q=90",

            Blue:
                "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=1000&q=90"
        },

        description:
            "Мощный игровой компьютер для современных AAA-игр."
    },


    {
        id: 7,
        name: "Mechanical RGB Keyboard",
        category: "gaming",
        categoryName: "Gaming",
        price: 119,
        oldPrice: 149,
        badge: "RGB",
        rating: 4.8,
        reviews: 312,
        stock: 22,

        images: {
            Black:
                "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1000&q=90",

            Silver:
                "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=1000&q=90",

            Blue:
                "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1000&q=90"
        },

        description:
            "Механическая клавиатура с RGB-подсветкой."
    },


    {
        id: 8,
        name: "Gaming Mouse Pro",
        category: "gaming",
        categoryName: "Gaming",
        price: 79,
        oldPrice: 99,
        badge: "FAST",
        rating: 4.7,
        reviews: 421,
        stock: 31,

        images: {
            Black:
                "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1000&q=90",

            Silver:
                "https://images.unsplash.com/photo-1563297007-0686b7003af7?auto=format&fit=crop&w=1000&q=90",

            Blue:
                "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1000&q=90"
        },

        description:
            "Лёгкая игровая мышь с точным сенсором."
    },


    {
        id: 9,
        name: "HyperX Headset",
        category: "audio",
        categoryName: "Аудио",
        price: 129,
        oldPrice: 159,
        badge: "5.1",
        rating: 4.9,
        reviews: 278,
        stock: 18,

        images: {
            Black:
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=90",

            Silver:
                "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=90",

            Blue:
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=90"
        },

        description:
            "Игровая гарнитура с объёмным звуком."
    },


    {
        id: 10,
        name: "Sony WH-1000XM5",
        category: "audio",
        categoryName: "Аудио",
        price: 329,
        oldPrice: 379,
        badge: "PRO",
        rating: 4.9,
        reviews: 342,
        stock: 11,

        images: {
            Black:
                "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=90",

            Silver:
                "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1000&q=90",

            Blue:
                "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=90"
        },

        description:
            "Премиальные беспроводные наушники с шумоподавлением."
    },


    {
        id: 11,
        name: "Alienware 240Hz",
        category: "monitors",
        categoryName: "Мониторы",
        price: 449,
        oldPrice: 499,
        badge: "240HZ",
        rating: 4.9,
        reviews: 83,
        stock: 6,

        images: {
            Black:
                "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1000&q=90",

            Silver:
                "https://images.unsplash.com/photo-1616763355548-1b606f439f86?auto=format&fit=crop&w=1000&q=90",

            Blue:
                "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1000&q=90"
        },

        description:
            "Игровой монитор с частотой обновления 240 Гц."
    },


    {
        id: 12,
        name: "UltraWide Gaming",
        category: "monitors",
        categoryName: "Мониторы",
        price: 599,
        oldPrice: 699,
        badge: "ULTRA",
        rating: 4.8,
        reviews: 61,
        stock: 9,

        images: {
            Black:
                "https://images.unsplash.com/photo-1616763355548-1b606f439f86?auto=format&fit=crop&w=1000&q=90",

            Silver:
                "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1000&q=90",

            Blue:
                "https://images.unsplash.com/photo-1616763355548-1b606f439f86?auto=format&fit=crop&w=1000&q=90"
        },

        description:
            "Большой ультраширокий монитор для игр и работы."
    }

];


// ==========================================
// STATE
// ==========================================

let cart =
    JSON.parse(
        localStorage.getItem(
            "neonix_cart"
        ) || "[]"
    );

let favorites =
    JSON.parse(
        localStorage.getItem(
            "neonix_favorites"
        ) || "[]"
    );

let currentCategory = "all";

let selectedProduct = null;

let selectedMemory = null;

let selectedColor = "Black";

let modalQuantity = 1;


// ==========================================
// HELPERS
// ==========================================

function productById(id) {

    return products.find(
        product =>
            product.id === Number(id)
    );
}


function money(value) {

    return "$" +
        Number(value)
            .toLocaleString(
                "en-US"
            );

}


function saveData() {

    localStorage.setItem(
        "neonix_cart",
        JSON.stringify(cart)
    );

    localStorage.setItem(
        "neonix_favorites",
        JSON.stringify(favorites)
    );

}


function showToast(text) {

    const toast =
        document.getElementById(
            "toast"
        );

    if (!toast) return;

    toast.textContent = text;

    toast.classList.add(
        "active"
    );

    clearTimeout(
        window.toastTimer
    );

    window.toastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "active"
            );

        }, 2300);

}


// ==========================================
// COUNTERS
// ==========================================

function updateCounters() {

    const cartCount =
        document.getElementById(
            "cartCount"
        );

    const favoritesCount =
        document.getElementById(
            "favoritesCount"
        );


    const count =
        cart.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );


    if (cartCount) {

        cartCount.textContent =
            count;

    }


    if (favoritesCount) {

        favoritesCount.textContent =
            favorites.length;

    }

}


// ==========================================
// PRODUCT CARD
// ==========================================

function productCard(product) {

    const liked =
        favorites.includes(
            product.id
        );


    return `

        <article
            class="product-card"
            data-product-id="${product.id}">

            <div class="product-image">

                <span class="product-badge">
                    ${product.badge}
                </span>

                <button
                    class="favorite-product ${
                        liked
                            ? "active"
                            : ""
                    }"
                    data-favorite="${product.id}">

                    ${
                        liked
                            ? "♥"
                            : "♡"
                    }

                </button>

                <img
                    src="${product.images.Black}"
                    alt="${product.name}"
                    loading="lazy">

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${product.categoryName}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <div class="product-rating">

                    ★ ${product.rating}

                    <small>
                        (${product.reviews})
                    </small>

                </div>

                <p class="product-description">
                    ${product.description}
                </p>

                <div class="product-bottom">

                    <div>

                        <span class="product-price">
                            ${money(product.price)}
                        </span>

                        <del>
                            ${money(product.oldPrice)}
                        </del>

                    </div>


                    <button
                        class="product-add"
                        data-add="${product.id}">

                        +

                    </button>

                </div>

            </div>

        </article>

    `;

}


// ==========================================
// RENDER PRODUCTS
// ==========================================

function renderProducts(
    customList = null
) {

    const container =
        document.getElementById(
            "products"
        );

    if (!container) return;


    let list;


    if (customList) {

        list =
            [...customList];

    } else {

        list =
            currentCategory === "all"
                ? [...products]
                : products.filter(
                    product =>
                        product.category ===
                        currentCategory
                );

    }


    const sort =
        document.getElementById(
            "sortProducts"
        )?.value;


    if (sort === "cheap") {

        list.sort(
            (a, b) =>
                a.price - b.price
        );

    }


    if (sort === "expensive") {

        list.sort(
            (a, b) =>
                b.price - a.price
        );

    }


    if (!list.length) {

        container.innerHTML = `

            <div class="empty-state">

                <strong>
                    НИЧЕГО НЕ НАЙДЕНО
                </strong>

                Попробуй другой запрос.

            </div>

        `;

        return;

    }


    container.innerHTML =
        list
            .map(productCard)
            .join("");

}


// ==========================================
// NEW PRODUCTS
// ==========================================

function renderNewProducts() {

    const container =
        document.getElementById(
            "newProducts"
        );

    if (!container) return;


    container.innerHTML =
        products
            .slice(0, 4)
            .map(productCard)
            .join("");

}


// ==========================================
// CATEGORY
// ==========================================

document
    .querySelectorAll(
        ".category-card"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        ".category-card"
                    )
                    .forEach(item => {

                        item.classList.remove(
                            "active"
                        );

                    });


                button.classList.add(
                    "active"
                );


                currentCategory =
                    button.dataset.category;


                renderProducts();


                document
                    .getElementById(
                        "catalog"
                    )
                    ?.scrollIntoView({
                        behavior:
                            "smooth"
                    });

            }
        );

    });


// ==========================================
// SORT
// ==========================================

document
    .getElementById(
        "sortProducts"
    )
    ?.addEventListener(
        "change",
        () => renderProducts()
    );


// ==========================================
// PRODUCT CLICKS
// ==========================================

document.addEventListener(
    "click",
    event => {

        const add =
            event.target.closest(
                "[data-add]"
            );


        const favorite =
            event.target.closest(
                "[data-favorite]"
            );


        const card =
            event.target.closest(
                ".product-card"
            );


        if (add) {

            addToCart(
                Number(
                    add.dataset.add
                )
            );

            return;

        }


        if (favorite) {

            toggleFavorite(
                Number(
                    favorite.dataset
                        .favorite
                )
            );

            return;

        }


        if (
            card &&
            !event.target.closest(
                "button"
            )
        ) {

            openProduct(
                Number(
                    card.dataset
                        .productId
                )
            );

        }

    }
);


// ==========================================
// ADD CART
// ==========================================

function addToCart(id) {

    const product =
        productById(id);

    if (!product) return;


    const existing =
        cart.find(
            item =>
                item.id === id &&
                !item.selectedMemory
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            id,

            quantity: 1

        });

    }


    saveData();

    updateCounters();

    renderCart();

    showToast(
        `${product.name} добавлен в корзину`
    );

}


// ==========================================
// CART TOTAL
// ==========================================

function getCartTotal() {

    return cart.reduce(
        (sum, item) => {

            const product =
                productById(
                    item.id
                );


            if (!product) {
                return sum;
            }


            const itemPrice =
                item.selectedPrice ||
                product.price;


            return sum +
                itemPrice *
                item.quantity;

        },
        0
    );

}


// ==========================================
// CART
// ==========================================

function renderCart() {

    const container =
        document.getElementById(
            "cartItems"
        );

    const total =
        document.getElementById(
            "cartTotal"
        );


    if (!container) return;


    if (!cart.length) {

        container.innerHTML = `

            <div class="empty-state">

                <strong>
                    КОРЗИНА ПУСТА
                </strong>

                Добавь товары из каталога.

            </div>

        `;

        if (total) {

            total.textContent =
                "$0";

        }

        return;

    }


    container.innerHTML =
        cart
            .map(
                (item, index) => {

                    const product =
                        productById(
                            item.id
                        );


                    if (!product) {
                        return "";
                    }


                    const itemPrice =
                        item.selectedPrice ||
                        product.price;


                    return `

                        <div class="cart-item">

                            <div class="cart-item-image">

                                <img
                                    src="${
                                        product
                                            .images[
                                                item.selectedColor ||
                                                "Black"
                                            ]
                                    }"
                                    alt="${product.name}">

                            </div>


                            <div class="cart-item-info">

                                <h3>
                                    ${product.name}
                                </h3>


                                ${
                                    item.selectedMemory
                                        ? `
                                            <small>
                                                ${
                                                    item.selectedMemory
                                                } GB
                                                ·
                                                ${
                                                    item.selectedColor ||
                                                    "Black"
                                                }
                                            </small>
                                        `
                                        : ""
                                }


                                <span class="cart-item-price">

                                    ${money(
                                        itemPrice *
                                        item.quantity
                                    )}

                                </span>


                                <div class="cart-quantity">

                                    <button
                                        data-minus="${index}">
                                        −
                                    </button>

                                    <span>
                                        ${item.quantity}
                                    </span>

                                    <button
                                        data-plus="${index}">
                                        +
                                    </button>

                                </div>

                            </div>


                            <button
                                class="remove-cart"
                                data-remove="${index}">

                                ×

                            </button>

                        </div>

                    `;

                }
            )
            .join("");


    if (total) {

        total.textContent =
            money(
                getCartTotal()
            );

    }

}


// ==========================================
// CART CONTROLS
// ==========================================

document
    .getElementById(
        "cartItems"
    )
    ?.addEventListener(
        "click",
        event => {

            const plus =
                event.target.closest(
                    "[data-plus]"
                );


            const minus =
                event.target.closest(
                    "[data-minus]"
                );


            const remove =
                event.target.closest(
                    "[data-remove]"
                );


            if (plus) {

                changeQuantity(
                    Number(
                        plus.dataset.plus
                    ),
                    1
                );

            }


            if (minus) {

                changeQuantity(
                    Number(
                        minus.dataset.minus
                    ),
                    -1
                );

            }


            if (remove) {

                cart.splice(
                    Number(
                        remove.dataset.remove
                    ),
                    1
                );


                saveData();

                updateCounters();

                renderCart();

            }

        }
    );


function changeQuantity(
    index,
    amount
) {

    if (!cart[index]) return;


    cart[index].quantity +=
        amount;


    if (
        cart[index].quantity <= 0
    ) {

        cart.splice(
            index,
            1
        );

    }


    saveData();

    updateCounters();

    renderCart();

}


// ==========================================
// CART OPEN
// ==========================================

function openCart() {

    document
        .getElementById(
            "overlay"
        )
        ?.classList.add(
            "active"
        );


    document
        .getElementById(
            "cartDrawer"
        )
        ?.classList.add(
            "active"
        );

}


function closeCart() {

    document
        .getElementById(
            "overlay"
        )
        ?.classList.remove(
            "active"
        );


    document
        .getElementById(
            "cartDrawer"
        )
        ?.classList.remove(
            "active"
        );

}


document
    .getElementById(
        "cartButton"
    )
    ?.addEventListener(
        "click",
        openCart
    );


document
    .getElementById(
        "closeCart"
    )
    ?.addEventListener(
        "click",
        closeCart
    );


document
    .getElementById(
        "overlay"
    )
    ?.addEventListener(
        "click",
        closeCart
    );


// ==========================================
// FAVORITES
// ==========================================

function toggleFavorite(id) {

    if (
        favorites.includes(id)
    ) {

        favorites =
            favorites.filter(
                item =>
                    item !== id
            );

        showToast(
            "Удалено из избранного"
        );

    } else {

        favorites.push(id);

        showToast(
            "Добавлено в избранное ♥"
        );

    }


    saveData();

    updateCounters();

    renderProducts();

    renderNewProducts();

    renderFavorites();

}


function renderFavorites() {

    const container =
        document.getElementById(
            "favoritesList"
        );

    if (!container) return;


    const list =
        products.filter(
            product =>
                favorites.includes(
                    product.id
                )
        );


    if (!list.length) {

        container.innerHTML = `

            <div class="empty-state">

                <strong>
                    ИЗБРАННОЕ ПУСТО
                </strong>

                Нажми ♡ на товаре.

            </div>

        `;

        return;

    }


    container.innerHTML =
        list
            .map(
                product => `

                    <div class="favorite-item">

                        <img
                            src="${product.images.Black}"
                            alt="${product.name}">

                        <div>

                            <h3>
                                ${product.name}
                            </h3>

                            <strong>
                                ${money(product.price)}
                            </strong>

                        </div>


                        <button
                            class="remove-cart"
                            data-favorite-remove="${product.id}">

                            ×

                        </button>

                    </div>

                `
            )
            .join("");

}


document
    .getElementById(
        "favoritesButton"
    )
    ?.addEventListener(
        "click",
        () => {

            renderFavorites();

            openModal(
                "favoritesModal"
            );

        }
    );


document
    .getElementById(
        "favoritesList"
    )
    ?.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    "[data-favorite-remove]"
                );


            if (!button) return;


            toggleFavorite(
                Number(
                    button.dataset
                        .favoriteRemove
                )
            );

        }
    );


// ==========================================
// PRODUCT MODAL
// ==========================================

function openProduct(id) {

    const product =
        productById(id);

    if (!product) return;


    selectedProduct =
        product;


    selectedColor =
        "Black";


    selectedMemory =
        product.memories
            ? Object.keys(
                product.memories
            )[0]
            : null;


    modalQuantity = 1;


    document.getElementById(
        "modalCategory"
    ).textContent =
        product.categoryName;


    document.getElementById(
        "modalName"
    ).textContent =
        product.name;


    document.getElementById(
        "modalDescription"
    ).textContent =
        product.description;


    document.getElementById(
        "modalReviews"
    ).textContent =
        `${product.rating} / 5 · ${product.reviews} отзывов`;


    document.getElementById(
        "modalStock"
    ).textContent =
        `${product.stock} шт.`;


    document.getElementById(
        "specScreen"
    ).textContent =
        product.specs?.screen ||
        "—";


    document.getElementById(
        "specCpu"
    ).textContent =
        product.specs?.cpu ||
        "—";


    document.getElementById(
        "specCamera"
    ).textContent =
        product.specs?.camera ||
        "—";


    document.getElementById(
        "modalOldPrice"
    ).textContent =
        money(
            product.oldPrice
        );


    document.getElementById(
        "modalQuantity"
    ).textContent =
        "1";


    updateProductImage();

    updateModalPrice();

    updateColorButtons();

    updateMemoryButtons();


    openModal(
        "productModal"
    );

}


// ==========================================
// IMAGE
// ==========================================

function updateProductImage() {

    if (!selectedProduct) return;


    const image =
        document.querySelector(
            "#modalImage img"
        );


    if (!image) return;


    const newImage =
        selectedProduct.images[
            selectedColor
        ] ||
        selectedProduct.images.Black;


    image.style.opacity = "0";


    setTimeout(() => {

        image.src =
            newImage;

        image.onload = () => {

            image.style.opacity = "1";

        };

    }, 100);

}


// ==========================================
// PRICE
// ==========================================

function updateModalPrice() {

    if (!selectedProduct) return;


    let value =
        selectedProduct.price;


    if (
        selectedMemory &&
        selectedProduct.memories
    ) {

        value =
            selectedProduct
                .memories[
                    selectedMemory
                ];

    }


    document.getElementById(
        "modalPrice"
    ).textContent =
        money(value);

}


// ==========================================
// COLOR
// ==========================================

function updateColorButtons() {

    document
        .querySelectorAll(
            ".color-option"
        )
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.color ===
                selectedColor
            );

        });

}


document.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                ".color-option"
            );


        if (!button) return;


        if (!selectedProduct) return;


        selectedColor =
            button.dataset.color;


        updateColorButtons();

        updateProductImage();


        showToast(
            `Цвет: ${selectedColor}`
        );

    }
);


// ==========================================
// MEMORY
// ==========================================

function updateMemoryButtons() {

    document
        .querySelectorAll(
            ".memory-option"
        )
        .forEach(button => {

            const memory =
                button.dataset.memory;


            if (
                selectedProduct &&
                selectedProduct.memories &&
                selectedProduct.memories[
                    memory
                ]
            ) {

                button.style.display =
                    "inline-flex";

            } else {

                button.style.display =
                    "none";

            }


            button.classList.toggle(
                "active",
                memory ===
                String(
                    selectedMemory
                )
            );

        });

}


document.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                ".memory-option"
            );


        if (!button) return;


        if (!selectedProduct) return;


        selectedMemory =
            button.dataset.memory;


        updateMemoryButtons();

        updateModalPrice();


        showToast(
            `Память: ${selectedMemory} GB`
        );

    }
);


// ==========================================
// QUANTITY
// ==========================================

document
    .getElementById(
        "modalPlus"
    )
    ?.addEventListener(
        "click",
        () => {

            if (
                selectedProduct &&
                modalQuantity >=
                selectedProduct.stock
            ) {

                showToast(
                    "Больше нет на складе"
                );

                return;

            }


            modalQuantity++;


            document.getElementById(
                "modalQuantity"
            ).textContent =
                modalQuantity;

        }
    );


document
    .getElementById(
        "modalMinus"
    )
    ?.addEventListener(
        "click",
        () => {

            if (
                modalQuantity <= 1
            ) return;


            modalQuantity--;


            document.getElementById(
                "modalQuantity"
            ).textContent =
                modalQuantity;

        }
    );


// ==========================================
// ADD FROM MODAL
// ==========================================

document
    .getElementById(
        "modalAdd"
    )
    ?.addEventListener(
        "click",
        () => {

            if (!selectedProduct) return;


            const itemPrice =
                selectedMemory &&
                selectedProduct.memories
                    ? selectedProduct
                        .memories[
                            selectedMemory
                        ]
                    : selectedProduct.price;


            const existing =
                cart.find(
                    item =>
                        item.id ===
                            selectedProduct.id &&
                        item.selectedMemory ===
                            selectedMemory &&
                        item.selectedColor ===
                            selectedColor
                );


            if (existing) {

                existing.quantity +=
                    modalQuantity;

            } else {

                cart.push({

                    id:
                        selectedProduct.id,

                    quantity:
                        modalQuantity,

                    selectedPrice:
                        itemPrice,

                    selectedMemory:
                        selectedMemory,

                    selectedColor:
                        selectedColor

                });

            }


            saveData();

            updateCounters();

            renderCart();


            showToast(
                `${selectedProduct.name} добавлен в корзину`
            );


            closeModal(
                "productModal"
            );


            modalQuantity = 1;

        }
    );


// ==========================================
// MODAL
// ==========================================

function openModal(id) {

    document
        .getElementById(id)
        ?.classList.add(
            "active"
        );

}


function closeModal(id) {

    document
        .getElementById(id)
        ?.classList.remove(
            "active"
        );

}


document
    .querySelectorAll(
        "[data-close]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                closeModal(
                    button.dataset.close
                );

            }
        );

    });


document
    .querySelectorAll(
        ".modal"
    )
    .forEach(modal => {

        modal.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    modal
                ) {

                    modal.classList.remove(
                        "active"
                    );

                }

            }
        );

    });


// ==========================================
// SEARCH
// ==========================================

function openSearch() {

    const panel =
        document.getElementById(
            "searchPanel"
        );


    if (!panel) return;


    panel.classList.add(
        "active"
    );


    setTimeout(
        () => {

            document
                .getElementById(
                    "searchInput"
                )
                ?.focus();

        },
        100
    );

}


function closeSearch() {

    document
        .getElementById(
            "searchPanel"
        )
        ?.classList.remove(
            "active"
        );

}


document
    .getElementById(
        "searchButton"
    )
    ?.addEventListener(
        "click",
        openSearch
    );


document
    .getElementById(
        "openSearch"
    )
    ?.addEventListener(
        "click",
        openSearch
    );


document
    .getElementById(
        "closeSearch"
    )
    ?.addEventListener(
        "click",
        closeSearch
    );


// ==========================================
// SEARCH INPUT
// ==========================================

document
    .getElementById(
        "searchInput"
    )
    ?.addEventListener(
        "input",
        event => {

            const query =
                event.target.value
                    .toLowerCase()
                    .trim();


            const result =
                products.filter(
                    product =>
                        product.name
                            .toLowerCase()
                            .includes(
                                query
                            ) ||

                        product.categoryName
                            .toLowerCase()
                            .includes(
                                query
                            )
                );


            renderProducts(
                result
            );

        }
    );


// ==========================================
// RANDOM
// ==========================================

document
    .getElementById(
        "randomProduct"
    )
    ?.addEventListener(
        "click",
        () => {

            const product =
                products[
                    Math.floor(
                        Math.random() *
                        products.length
                    )
                ];


            openProduct(
                product.id
            );

        }
    );


// ==========================================
// HERO
// ==========================================

document
    .querySelector(
        "[data-hero-product]"
    )
    ?.addEventListener(
        "click",
        event => {

            addToCart(
                Number(
                    event.currentTarget
                        .dataset
                        .heroProduct
                )
            );

        }
    );


// ==========================================
// PROMO
// ==========================================

document
    .getElementById(
        "copyPromo"
    )
    ?.addEventListener(
        "click",
        async () => {

            try {

                await navigator
                    .clipboard
                    .writeText(
                        "NEONIX30"
                    );

                showToast(
                    "NEONIX30 скопирован"
                );

            } catch {

                showToast(
                    "Промокод: NEONIX30"
                );

            }

        }
    );


// ==========================================
// CHECKOUT
// ==========================================

document
    .getElementById(
        "checkoutButton"
    )
    ?.addEventListener(
        "click",
        () => {

            if (!cart.length) {

                showToast(
                    "Корзина пуста"
                );

                return;

            }


            document.getElementById(
                "checkoutTotal"
            ).textContent =
                money(
                    getCartTotal()
                );


            closeCart();

            openModal(
                "checkoutModal"
            );

        }
    );


// ==========================================
// ORDER
// ==========================================

document
    .getElementById(
        "checkoutForm"
    )
    ?.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            if (!cart.length) return;


            const number =
                "NX-" +
                Math.floor(
                    100000 +
                    Math.random() *
                    900000
                );


            const order = {

                number,

                total:
                    getCartTotal(),

                status: 0,

                date:
                    new Date()
                        .toLocaleString(
                            "ru-RU"
                        )

            };


            localStorage.setItem(
                "neonix_order",
                JSON.stringify(
                    order
                )
            );


            cart = [];


            saveData();

            updateCounters();

            renderCart();


            event.target.reset();


            closeModal(
                "checkoutModal"
            );


            showToast(
                `Заказ ${number} оформлен`
            );

        }
    );


// ==========================================
// ORDER STATUS
// ==========================================

function renderOrderStatus() {

    const container =
        document.getElementById(
            "orderStatus"
        );


    if (!container) return;


    const order =
        JSON.parse(
            localStorage.getItem(
                "neonix_order"
            ) || "null"
        );


    if (!order) {

        container.innerHTML = `

            <div class="empty-state">

                <strong>
                    ЗАКАЗОВ НЕТ
                </strong>

                Оформи заказ,
                чтобы отслеживать его.

            </div>

        `;

        return;

    }


    const steps = [

        "Заказ принят",

        "Сборка заказа",

        "Передан курьеру",

        "Доставлен"

    ];


    container.innerHTML = `

        <div class="order-box">

            <div class="order-number">

                <span>
                    ${order.number}
                </span>

                <strong>
                    ${money(order.total)}
                </strong>

            </div>


            ${steps.map(
                (step, index) => `

                    <div class="order-step">

                        <div class="
                            order-dot
                            ${
                                index <=
                                order.status
                                    ? "active"
                                    : ""
                            }
                        ">

                            ${
                                index <
                                order.status
                                    ? "✓"
                                    : index + 1
                            }

                        </div>


                        <div>

                            <strong>
                                ${step}
                            </strong>

                            <span>

                                ${
                                    index <=
                                    order.status
                                        ? "Выполнено"
                                        : "Ожидает"
                                }

                            </span>

                        </div>

                    </div>

                `
            ).join("")}

        </div>

    `;

}


// ==========================================
// ORDER BUTTON
// ==========================================

const headerActions =
    document.querySelector(
        ".header-actions"
    );


if (
    headerActions &&
    !document.getElementById(
        "orderButton"
    )
) {

    const button =
        document.createElement(
            "button"
        );


    button.id =
        "orderButton";

    button.className =
        "header-btn";

    button.textContent =
        "📦";

    button.title =
        "Статус заказа";


    headerActions.insertBefore(
        button,
        document.getElementById(
            "cartButton"
        )
    );


    button.addEventListener(
        "click",
        () => {

            renderOrderStatus();

            openModal(
                "orderModal"
            );

        }
    );

}


// ==========================================
// ESC
// ==========================================

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Escape"
        ) return;


        closeCart();

        closeSearch();


        document
            .querySelectorAll(
                ".modal"
            )
            .forEach(
                modal =>
                    modal.classList.remove(
                        "active"
                    )
            );

    }
);


// ==========================================
// START
// ==========================================

renderProducts();

renderNewProducts();

renderCart();

renderFavorites();

updateCounters();

// ==========================================
// THEME SWITCHER
// ==========================================

const themeButton =
    document.getElementById(
        "themeButton"
    );


// Загружаем сохранённую тему
const savedTheme =
    localStorage.getItem(
        "neonix_theme"
    );


if (savedTheme === "light") {

    document.body.classList.add(
        "light-theme"
    );

    if (themeButton) {

        themeButton.textContent =
            "🌙";

    }

}


// Переключение темы
themeButton?.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light-theme"
        );


        const isLight =
            document.body.classList.contains(
                "light-theme"
            );


        localStorage.setItem(
            "neonix_theme",
            isLight
                ? "light"
                : "dark"
        );


        themeButton.textContent =
            isLight
                ? "🌙"
                : "☀️";

    }
);


// ==========================================
// BACK TO TOP
// ==========================================

const backTop =
    document.getElementById(
        "backTop"
    );


window.addEventListener(
    "scroll",
    () => {

        if (!backTop) return;


        if (window.scrollY > 500) {

            backTop.classList.add(
                "visible"
            );

        } else {

            backTop.classList.remove(
                "visible"
            );

        }

    }
);


backTop?.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);