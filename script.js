/* =========================================================
   NEXORA STORE
   Vanilla JavaScript
========================================================= */


/* ================= DATA ================= */

const products = [

    {
        id: 1,
        name: "NEXORA TITAN X",
        brand: "NEXORA",
        category: "pc",
        price: 18990000,
        oldPrice: 21490000,
        discount: 12,
        rating: 5,
        reviews: 128,
        popular: 100,
        isNew: true,
        image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=1000&q=90",
        specs: ["RTX 5070", "Ryzen 7", "32GB", "1TB NVMe"],
        description: "Премиальная игровая система NEXORA TITAN X для игр, стриминга и профессиональных задач.",
        details: {
            CPU: "AMD Ryzen 7 7800X3D",
            GPU: "NVIDIA RTX 5070",
            RAM: "32GB DDR5",
            SSD: "1TB NVMe",
            PSU: "850W Gold",
            Cooling: "Liquid Cooling"
        }
    },

    {
        id: 2,
        name: "NEXORA VOID PRO",
        brand: "NEXORA",
        category: "pc",
        price: 24990000,
        oldPrice: 27990000,
        discount: 11,
        rating: 5,
        reviews: 96,
        popular: 98,
        isNew: true,
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1000&q=90",
        specs: ["RTX 5080", "i7", "64GB", "2TB NVMe"],
        description: "Экстремальная производительность для 4K gaming и профессионального контента.",
        details: {
            CPU: "Intel Core i7-14700K",
            GPU: "NVIDIA RTX 5080",
            RAM: "64GB DDR5",
            SSD: "2TB NVMe",
            PSU: "1000W Gold",
            Cooling: "360mm Liquid"
        }
    },

    {
        id: 3,
        name: "ASUS ROG STRIX G16",
        brand: "ASUS",
        category: "laptop",
        price: 15990000,
        oldPrice: 17990000,
        discount: 11,
        rating: 5,
        reviews: 84,
        popular: 94,
        isNew: true,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1000&q=90",
        specs: ["RTX 4070", "i9", "32GB", "1TB"],
        description: "Мощный игровой ноутбук с высокой частотой обновления дисплея.",
        details: {
            CPU: "Intel Core i9",
            GPU: "RTX 4070",
            RAM: "32GB",
            SSD: "1TB NVMe",
            Display: "16 inch QHD",
            Refresh: "240Hz"
        }
    },

    {
        id: 4,
        name: "LENOVO LEGION 7",
        brand: "LENOVO",
        category: "laptop",
        price: 13990000,
        oldPrice: 15490000,
        discount: 10,
        rating: 4.9,
        reviews: 71,
        popular: 91,
        isNew: false,
        image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=1000&q=90",
        specs: ["RTX 4060", "Ryzen 7", "16GB", "1TB"],
        description: "Сбалансированный игровой ноутбук Legion для игр и работы.",
        details: {
            CPU: "Ryzen 7",
            GPU: "RTX 4060",
            RAM: "16GB",
            SSD: "1TB",
            Display: "16 inch",
            Refresh: "165Hz"
        }
    },

    {
        id: 5,
        name: "MSI RTX 5070 GAMING",
        brand: "MSI",
        category: "gpu",
        price: 10500000,
        oldPrice: 11900000,
        discount: 12,
        rating: 4.9,
        reviews: 66,
        popular: 93,
        isNew: true,
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=1000&q=90",
        specs: ["RTX 5070", "12GB", "GDDR7", "DLSS"],
        description: "Современная видеокарта для высоких настроек графики и 4K gaming.",
        details: {
            GPU: "RTX 5070",
            Memory: "12GB GDDR7",
            Interface: "PCIe 5.0",
            RayTracing: "Yes"
        }
    },

    {
        id: 6,
        name: "ASUS ROG RTX 4080",
        brand: "ASUS",
        category: "gpu",
        price: 15990000,
        oldPrice: 17490000,
        discount: 9,
        rating: 4.8,
        reviews: 54,
        popular: 88,
        isNew: false,
        image: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=1000&q=90",
        specs: ["RTX 4080", "16GB", "GDDR6X", "DLSS"],
        description: "Мощная видеокарта для требовательного gaming и создания контента.",
        details: {
            GPU: "RTX 4080",
            Memory: "16GB GDDR6X",
            Interface: "PCIe 4.0",
            Cooling: "Triple Fan"
        }
    },

    {
        id: 7,
        name: "NEXORA ULTRAWIDE 34",
        brand: "NEXORA",
        category: "monitor",
        price: 6490000,
        oldPrice: 7490000,
        discount: 13,
        rating: 4.9,
        reviews: 112,
        popular: 97,
        isNew: true,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1000&q=90",
        specs: ["34\"", "UWQHD", "165Hz", "1ms"],
        description: "Премиальный ультраширокий игровой монитор с высокой частотой обновления.",
        details: {
            Display: "34 inch",
            Resolution: "3440×1440",
            Refresh: "165Hz",
            Response: "1ms",
            Panel: "IPS"
        }
    },

    {
        id: 8,
        name: "SAMSUNG ODYSSEY G7",
        brand: "SAMSUNG",
        category: "monitor",
        price: 7990000,
        oldPrice: 8990000,
        discount: 11,
        rating: 4.9,
        reviews: 143,
        popular: 96,
        isNew: false,
        image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?auto=format&fit=crop&w=1000&q=90",
        specs: ["32\"", "4K", "240Hz", "1ms"],
        description: "Флагманский игровой монитор для максимальной плавности.",
        details: {
            Display: "32 inch",
            Resolution: "4K",
            Refresh: "240Hz",
            Response: "1ms",
            HDR: "HDR600"
        }
    },

    {
        id: 9,
        name: "RAZER BLACKWIDOW V4",
        brand: "RAZER",
        category: "peripheral",
        price: 1890000,
        oldPrice: 2190000,
        discount: 14,
        rating: 4.8,
        reviews: 201,
        popular: 89,
        isNew: false,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1000&q=90",
        specs: ["Mechanical", "RGB", "USB", "Gaming"],
        description: "Механическая игровая клавиатура с быстрыми переключателями.",
        details: {
            Type: "Mechanical",
            Switches: "Green",
            Lighting: "RGB",
            Connection: "USB"
        }
    },

    {
        id: 10,
        name: "LOGITECH G PRO X",
        brand: "LOGITECH",
        category: "peripheral",
        price: 1190000,
        oldPrice: 1390000,
        discount: 14,
        rating: 4.9,
        reviews: 324,
        popular: 95,
        isNew: true,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1000&q=90",
        specs: ["Wireless", "25K DPI", "RGB", "Pro"],
        description: "Профессиональная беспроводная игровая мышь.",
        details: {
            Sensor: "HERO 25K",
            DPI: "25,600",
            Connection: "Wireless",
            Battery: "70h"
        }
    },

    {
        id: 11,
        name: "CORSAIR VENGEANCE 32GB",
        brand: "CORSAIR",
        category: "ram",
        price: 1900000,
        oldPrice: 2200000,
        discount: 14,
        rating: 4.8,
        reviews: 83,
        popular: 82,
        isNew: false,
        image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=1000&q=90",
        specs: ["32GB", "DDR5", "6000MHz", "RGB"],
        description: "Быстрая DDR5 память для современных игровых систем.",
        details: {
            Capacity: "32GB",
            Type: "DDR5",
            Speed: "6000MHz",
            Lighting: "RGB"
        }
    },

    {
        id: 12,
        name: "SAMSUNG 990 PRO 2TB",
        brand: "SAMSUNG",
        category: "ssd",
        price: 1700000,
        oldPrice: 2050000,
        discount: 17,
        rating: 4.9,
        reviews: 188,
        popular: 90,
        isNew: false,
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1000&q=90",
        specs: ["2TB", "NVMe", "PCIe 4.0", "7450MB/s"],
        description: "Высокопроизводительный NVMe SSD для gaming и работы.",
        details: {
            Capacity: "2TB",
            Interface: "PCIe 4.0",
            Read: "7450MB/s",
            Form: "M.2"
        }
    }

];


/* ================= CATEGORIES ================= */

const categories = [

    ["01", "Gaming PC", "Мощные готовые системы", "▣", "pc"],
    ["02", "Gaming Laptop", "Производительность везде", "▱", "laptop"],
    ["03", "Мониторы", "Высокая частота", "▤", "monitor"],
    ["04", "Видеокарты", "Максимум FPS", "◈", "gpu"],
    ["05", "Процессоры", "Чистая мощность", "◉", "cpu"],
    ["06", "RAM", "Быстрая память", "▥", "ram"],
    ["07", "SSD", "Скорость загрузки", "▰", "ssd"],
    ["08", "Клавиатуры", "Точный контроль", "⌨", "peripheral"],
    ["09", "Мыши", "Точность движения", "◉", "peripheral"],
    ["10", "Гарнитуры", "Погружение", "◖", "peripheral"]

];


/* ================= REVIEWS ================= */

const reviews = [

    {
        name: "Александр",
        product: "NEXORA TITAN X",
        text: "Сборка просто зверь. Все игры идут на максимальных настройках. Отдельно понравилось качество самой сборки.",
        avatar: "А"
    },

    {
        name: "Дмитрий",
        product: "ASUS ROG STRIX G16",
        text: "Очень мощный ноутбук. Экран отличный, охлаждение работает хорошо. NEXORA помогли подобрать конфигурацию.",
        avatar: "Д"
    },

    {
        name: "Максим",
        product: "RTX 5070 GAMING",
        text: "Заказал видеокарту. Доставка быстрая, упаковка отличная. Карта работает идеально.",
        avatar: "М"
    },

    {
        name: "Илья",
        product: "SAMSUNG ODYSSEY",
        text: "Монитор полностью изменил мой gaming setup. 240Hz реально ощущаются.",
        avatar: "И"
    },

    {
        name: "Роман",
        product: "LOGITECH G PRO X",
        text: "Отличная мышь. Очень лёгкая и точная. Для соревновательных игр самое то.",
        avatar: "Р"
    },

    {
        name: "Егор",
        product: "NEXORA VOID PRO",
        text: "Брал готовую сборку. Производительность невероятная. Сервис тоже на уровне.",
        avatar: "Е"
    }

];


/* ================= STATE ================= */

let cart = JSON.parse(localStorage.getItem("nexoraCart")) || [];

let currentProducts = [...products];

let visibleProducts = 8;

let currentCategory = "all";

let modalProduct = null;

let modalQuantity = 1;

let reviewIndex = 0;


/* ================= DOM ================= */

const productsGrid = document.getElementById("productsGrid");
const dealsGrid = document.getElementById("dealsGrid");
const categoriesGrid = document.getElementById("categoriesGrid");

const cartElement = document.querySelector(".cart");
const cartOverlay = document.getElementById("cartOverlay");
const cartItems = document.getElementById("cartItems");

const cartEmpty = document.getElementById("cartEmpty");
const cartFooter = document.getElementById("cartFooter");

const cartCount = document.getElementById("cartCount");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartTotal = document.getElementById("cartTotal");

const toast = document.getElementById("toast");

const productModal = document.getElementById("productModal");

const searchOverlay = document.getElementById("searchOverlay");

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");


/* ================= FORMAT ================= */

function formatPrice(value) {

    return new Intl.NumberFormat("ru-RU").format(value) + " сум";

}


/* ================= CATEGORIES ================= */

function renderCategories() {

    categoriesGrid.innerHTML = categories.map(category => {

        const [number, name, description, icon, type] = category;

        return `

            <article
                class="category-card"
                data-category="${type}"
            >

                <div>

                    <span class="category-number">
                        ${number}
                    </span>

                    <div class="category-icon">
                        ${icon}
                    </div>

                </div>

                <div>

                    <h3>${name}</h3>

                    <p>${description}</p>

                </div>

                <span class="category-arrow">
                    ↗
                </span>

            </article>

        `;

    }).join("");

}


/* ================= PRODUCT CARD ================= */

function createProductCard(product) {

    const oldPrice = product.oldPrice
        ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>`
        : "";

    const discount = product.discount
        ? `<span class="discount">-${product.discount}%</span>`
        : "";

    return `

        <article class="product-card">

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                ${discount}

                <button
                    class="product-favorite"
                    data-favorite="${product.id}"
                    aria-label="Добавить в избранное"
                >
                    ♡
                </button>

            </div>


            <div class="product-info">

                <span class="product-brand">
                    ${product.brand}
                </span>

                <h3 class="product-name">
                    ${product.name}
                </h3>

                <div class="rating">
                    ★ ${product.rating}
                    <span style="color:#686d65">
                        (${product.reviews})
                    </span>
                </div>

                <div class="product-specs">

                    ${product.specs.map(spec =>
                        `<span>${spec}</span>`
                    ).join("")}

                </div>


                <div class="price-row">

                    <div>

                        <strong class="price">
                            ${formatPrice(product.price)}
                        </strong>

                        ${oldPrice}

                    </div>

                    <button
                        class="add-product"
                        data-add="${product.id}"
                        title="Добавить в корзину"
                    >
                        +
                    </button>

                </div>


                <button
                    class="product-details"
                    data-details="${product.id}"
                >
                    Подробнее →
                </button>

            </div>

        </article>

    `;

}


/* ================= PRODUCTS ================= */

function renderProducts() {

    let list = [...currentProducts];

    if (currentCategory !== "all") {

        list = list.filter(product =>
            product.category === currentCategory
        );

    }

    list = list.slice(0, visibleProducts);

    if (!list.length) {

        productsGrid.innerHTML = `
            <div style="
                grid-column:1/-1;
                padding:80px 20px;
                text-align:center;
                color:#858b80;
            ">
                Товары не найдены.
            </div>
        `;

        return;
    }

    productsGrid.innerHTML =
        list.map(createProductCard).join("");

}


/* ================= SORT ================= */

function sortProducts(value) {

    let list = [...products];

    if (value === "popular") {

        list.sort((a,b) => b.popular - a.popular);

    }

    if (value === "new") {

        list.sort((a,b) => Number(b.isNew) - Number(a.isNew));

    }

    if (value === "cheap") {

        list.sort((a,b) => a.price - b.price);

    }

    if (value === "expensive") {

        list.sort((a,b) => b.price - a.price);

    }

    if (value === "discount") {

        list.sort((a,b) =>
            (b.discount || 0) - (a.discount || 0)
        );

    }

    if (value === "rating") {

        list.sort((a,b) => b.rating - a.rating);

    }

    currentProducts = list;

    visibleProducts = 8;

    renderProducts();

}


/* ================= DEALS ================= */

function renderDeals() {

    const deals = products
        .filter(product => product.discount)
        .sort((a,b) => b.discount - a.discount)
        .slice(0,4);

    dealsGrid.innerHTML =
        deals.map(createProductCard).join("");

}


/* ================= CART ================= */

function saveCart() {

    localStorage.setItem(
        "nexoraCart",
        JSON.stringify(cart)
    );

}


function addToCart(id, quantity = 1) {

    const product = products.find(
        item => item.id === id
    );

    if (!product) return;

    const existing = cart.find(
        item => item.id === id
    );

    if (existing) {

        existing.quantity += quantity;

    } else {

        cart.push({
            id: product.id,
            quantity
        });

    }

    saveCart();

    renderCart();

    showToast(`${product.name} добавлен в корзину`);

}


function removeFromCart(id) {

    cart = cart.filter(
        item => item.id !== id
    );

    saveCart();

    renderCart();

}


function changeQuantity(id, amount) {

    const item = cart.find(
        item => item.id === id
    );

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {

        removeFromCart(id);

        return;

    }

    saveCart();

    renderCart();

}


function getCartCount() {

    return cart.reduce(
        (sum,item) => sum + item.quantity,
        0
    );

}


function getCartTotal() {

    return cart.reduce((sum,item) => {

        const product = products.find(
            p => p.id === item.id
        );

        return sum +
            (product ? product.price * item.quantity : 0);

    },0);

}


function renderCart() {

    const count = getCartCount();

    const total = getCartTotal();

    cartCount.textContent = count;

    cartSubtotal.textContent =
        formatPrice(total);

    cartTotal.textContent =
        formatPrice(total);


    if (!cart.length) {

        cartItems.innerHTML = "";

        cartEmpty.classList.add("active");

        cartFooter.style.display = "none";

        return;

    }


    cartEmpty.classList.remove("active");

    cartFooter.style.display = "block";


    cartItems.innerHTML = cart.map(item => {

        const product = products.find(
            p => p.id === item.id
        );

        if (!product) return "";

        return `

            <div class="cart-item">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div>

                    <div class="cart-item-name">
                        ${product.name}
                    </div>

                    <div class="cart-item-price">
                        ${formatPrice(product.price)}
                    </div>

                    <div class="cart-quantity">

                        <button
                            data-cart-minus="${product.id}"
                        >
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            data-cart-plus="${product.id}"
                        >
                            +
                        </button>

                    </div>

                </div>

                <button
                    class="remove-cart"
                    data-remove="${product.id}"
                >
                    ×
                </button>

            </div>

        `;

    }).join("");

}


/* ================= CART OPEN/CLOSE ================= */

function openCart() {

    cartElement.classList.add("active");

    cartOverlay.classList.add("active");

    document.body.classList.add("no-scroll");

}


function closeCart() {

    cartElement.classList.remove("active");

    cartOverlay.classList.remove("active");

    document.body.classList.remove("no-scroll");

}


/* ================= TOAST ================= */

let toastTimer;

function showToast(message) {

    toast.querySelector("p").textContent =
        message;

    toast.classList.add("active");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        toast.classList.remove("active");

    },3000);

}


/* ================= PRODUCT MODAL ================= */

function openProductModal(id) {

    const product = products.find(
        item => item.id === id
    );

    if (!product) return;

    modalProduct = product;

    modalQuantity = 1;

    document.getElementById("modalProductImage").src =
        product.image;

    document.getElementById("modalProductImage").alt =
        product.name;

    document.getElementById("modalBrand").textContent =
        product.brand;

    document.getElementById("modalName").textContent =
        product.name;

    document.getElementById("modalRating").textContent =
        `★ ${product.rating} / 5  •  ${product.reviews} отзывов`;

    document.getElementById("modalDescription").textContent =
        product.description;

    document.getElementById("modalPrice").textContent =
        formatPrice(product.price);

    document.getElementById("modalOldPrice").textContent =
        product.oldPrice
            ? formatPrice(product.oldPrice)
            : "";

    document.getElementById("modalQuantity").textContent =
        modalQuantity;


    const specs =
        document.getElementById("modalSpecs");

    specs.innerHTML =
        Object.entries(product.details).map(
            ([key,value]) => `

                <div class="modal-spec">

                    <small>${key}</small>

                    <strong>${value}</strong>

                </div>

            `
        ).join("");


    productModal.classList.add("active");

    document.body.classList.add("no-scroll");

}


function closeProductModal() {

    productModal.classList.remove("active");

    document.body.classList.remove("no-scroll");

    modalProduct = null;

}


/* ================= SEARCH ================= */

function openSearch() {

    searchOverlay.classList.add("active");

    document.body.classList.add("no-scroll");

    setTimeout(() => {

        searchInput.focus();

    },100);

}


function closeSearch() {

    searchOverlay.classList.remove("active");

    document.body.classList.remove("no-scroll");

    searchInput.value = "";

    searchResults.innerHTML = "";

}


function searchProducts(query) {

    const value = query
        .toLowerCase()
        .trim();

    if (!value) {

        searchResults.innerHTML = "";

        return;

    }


    const results = products.filter(product => {

        const text = [

            product.name,
            product.brand,
            product.category,
            product.specs.join(" ")

        ].join(" ").toLowerCase();

        return text.includes(value);

    }).slice(0,8);


    if (!results.length) {

        searchResults.innerHTML = `

            <div style="
                padding:30px 10px;
                color:#858b80;
                font-size:11px;
            ">
                Ничего не найдено.
            </div>

        `;

        return;

    }


    searchResults.innerHTML =
        results.map(product => `

            <div
                class="search-result"
                data-search-product="${product.id}"
            >

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div>

                    <strong>
                        ${product.name}
                    </strong>

                    <span>
                        ${formatPrice(product.price)}
                    </span>

                </div>

            </div>

        `).join("");

}


/* ================= BUILDER ================= */

const builderIds = [
    "buildCpu",
    "buildGpu",
    "buildRam",
    "buildSsd",
    "buildBoard",
    "buildPsu"
];


function calculateBuild() {

    let total = 0;

    let power = 0;


    builderIds.forEach(id => {

        const select =
            document.getElementById(id);

        const [name, price] =
            select.value.split("|");

        total += Number(price);

    });


    const gpu =
        document.getElementById("buildGpu")
            .value.split("|")[0];

    if (gpu.includes("5090")) power += 575;
    else if (gpu.includes("5080")) power += 360;
    else if (gpu.includes("5070")) power += 250;
    else power += 180;


    power += 220;


    document.getElementById("buildPrice")
        .textContent = formatPrice(total);

    document.getElementById("buildPower")
        .textContent = `${power}W`;

    return total;

}


function getBuildData() {

    return builderIds.map(id => {

        const [name, price] =
            document
                .getElementById(id)
                .value
                .split("|");

        return {
            name,
            price: Number(price)
        };

    });

}


/* ================= DEAL TIMER ================= */

let dealEnd =
    Date.now() + 1000 * 60 * 60 * 8;


function updateDealTimer() {

    const remaining =
        Math.max(0, dealEnd - Date.now());

    const hours =
        Math.floor(remaining / 3600000);

    const minutes =
        Math.floor(
            (remaining % 3600000) / 60000
        );

    const seconds =
        Math.floor(
            (remaining % 60000) / 1000
        );


    document.getElementById("dealTimer")
        .textContent =
        `${String(hours).padStart(2,"0")}:` +
        `${String(minutes).padStart(2,"0")}:` +
        `${String(seconds).padStart(2,"0")}`;


    if (remaining <= 0) {

        dealEnd =
            Date.now() + 1000 * 60 * 60 * 8;

    }

}


setInterval(updateDealTimer,1000);

updateDealTimer();


/* ================= REVIEWS ================= */

function renderReviews() {

    const visible = [];

    for (let i = 0; i < 3; i++) {

        visible.push(
            reviews[
                (reviewIndex + i) % reviews.length
            ]
        );

    }


    document.getElementById("reviewsSlider")
        .innerHTML =
        visible.map(review => `

            <article class="review-card">

                <div class="review-top">

                    <div class="avatar">
                        ${review.avatar}
                    </div>

                    <div class="review-stars">
                        ★★★★★
                    </div>

                </div>

                <p>
                    “${review.text}”
                </p>

                <div class="review-author">

                    <strong>
                        ${review.name}
                    </strong>

                    <span>
                        Купил: ${review.product}
                    </span>

                </div>

            </article>

        `).join("");

}


/* ================= EVENTS ================= */


/* Header */

window.addEventListener("scroll", () => {

    const header =
        document.getElementById("header");

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* Search */

document
    .getElementById("searchBtn")
    .addEventListener("click", openSearch);


document
    .getElementById("closeSearch")
    .addEventListener("click", closeSearch);


searchOverlay.addEventListener("click", event => {

    if (event.target === searchOverlay) {

        closeSearch();

    }

});


searchInput.addEventListener(
    "input",
    event => searchProducts(event.target.value)
);


/* Mobile menu */

document
    .getElementById("mobileMenuBtn")
    .addEventListener("click", () => {

        document
            .getElementById("mobileMenu")
            .classList.toggle("active");

    });


document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            document
                .getElementById("mobileMenu")
                .classList.remove("active");

        });

    });


/* Cart */

document
    .getElementById("cartBtn")
    .addEventListener("click", openCart);


document
    .getElementById("closeCart")
    .addEventListener("click", closeCart);


cartOverlay.addEventListener(
    "click",
    closeCart
);


document
    .getElementById("continueShopping")
    .addEventListener("click", () => {

        closeCart();

        document
            .getElementById("catalog")
            .scrollIntoView({
                behavior: "smooth"
            });

    });


/* Product buttons */

document.addEventListener("click", event => {

    const addButton =
        event.target.closest("[data-add]");

    if (addButton) {

        addToCart(
            Number(addButton.dataset.add)
        );

        return;

    }


    const detailButton =
        event.target.closest("[data-details]");

    if (detailButton) {

        openProductModal(
            Number(detailButton.dataset.details)
        );

        return;

    }


    const removeButton =
        event.target.closest("[data-remove]");

    if (removeButton) {

        removeFromCart(
            Number(removeButton.dataset.remove)
        );

        return;

    }


    const plusButton =
        event.target.closest("[data-cart-plus]");

    if (plusButton) {

        changeQuantity(
            Number(plusButton.dataset.cartPlus),
            1
        );

        return;

    }


    const minusButton =
        event.target.closest("[data-cart-minus]");

    if (minusButton) {

        changeQuantity(
            Number(minusButton.dataset.cartMinus),
            -1
        );

        return;

    }


    const searchProduct =
        event.target.closest("[data-search-product]");

    if (searchProduct) {

        closeSearch();

        openProductModal(
            Number(searchProduct.dataset.searchProduct)
        );

    }

});


/* Product modal */

document
    .getElementById("closeProduct")
    .addEventListener(
        "click",
        closeProductModal
    );


productModal.addEventListener(
    "click",
    event => {

        if (event.target === productModal) {

            closeProductModal();

        }

    }
);


document
    .getElementById("modalPlus")
    .addEventListener("click", () => {

        modalQuantity++;

        document
            .getElementById("modalQuantity")
            .textContent = modalQuantity;

    });


document
    .getElementById("modalMinus")
    .addEventListener("click", () => {

        if (modalQuantity > 1) {

            modalQuantity--;

        }

        document
            .getElementById("modalQuantity")
            .textContent = modalQuantity;

    });


document
    .getElementById("modalAdd")
    .addEventListener("click", () => {

        if (!modalProduct) return;

        addToCart(
            modalProduct.id,
            modalQuantity
        );

        closeProductModal();

    });


/* Category tabs */

document
    .getElementById("categoryTabs")
    .addEventListener("click", event => {

        const button =
            event.target.closest("button");

        if (!button) return;

        document
            .querySelectorAll(".category-tabs button")
            .forEach(btn =>
                btn.classList.remove("active")
            );

        button.classList.add("active");

        currentCategory =
            button.dataset.category;

        visibleProducts = 8;

        renderProducts();

    });


/* Sort */

document
    .getElementById("sortSelect")
    .addEventListener("change", event => {

        sortProducts(event.target.value);

    });


/* Load more */

document
    .getElementById("loadMoreBtn")
    .addEventListener("click", () => {

        visibleProducts += 4;

        renderProducts();

        if (
            visibleProducts >= currentProducts.length
        ) {

            document
                .getElementById("loadMoreBtn")
                .style.display = "none";

        }

    });


/* Builder */

builderIds.forEach(id => {

    document
        .getElementById(id)
        .addEventListener(
            "change",
            calculateBuild
        );

});


document
    .getElementById("addBuildBtn")
    .addEventListener("click", () => {

        const total = calculateBuild();

        const configuration =
            getBuildData();

        const existing =
            cart.find(item => item.id === "build");

        if (existing) {

            existing.quantity++;

        } else {

            cart.push({

                id: "build",

                quantity: 1,

                custom: true,

                price: total,

                configuration

            });

        }


        saveCart();

        renderCart();

        showToast(
            "Ваша сборка добавлена в корзину"
        );

    });


/* Reviews */

document
    .getElementById("nextReview")
    .addEventListener("click", () => {

        reviewIndex =
            (reviewIndex + 1) % reviews.length;

        renderReviews();

    });


document
    .getElementById("prevReview")
    .addEventListener("click", () => {

        reviewIndex =
            (reviewIndex - 1 + reviews.length)
            % reviews.length;

        renderReviews();

    });


/* Search result ESC */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") return;

        closeSearch();

        closeProductModal();

        closeCart();

    }
);


/* Checkout */

document
    .getElementById("checkoutBtn")
    .addEventListener("click", () => {

        if (!cart.length) return;

        alert(
            "Спасибо за заказ в NEXORA!\n\n" +
            "Следующий этап — подключение " +
            "реальной формы оформления заказа."
        );

    });


/* ================= INIT ================= */

renderCategories();

sortProducts("popular");

renderDeals();

renderCart();

calculateBuild();

renderReviews();

console.log(
    "NEXORA TECH / GAMING initialized."
);