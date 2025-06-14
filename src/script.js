// category Dropdown
const categoryDropdown = document.getElementById("categoryDropdown");
fetch("https://fakestoreapi.com/products/categories")
  .then((response) => response.json())
  .then((categories) => renderCategories(categories))
  .catch((err) => console.log(err));

function renderCategories(categories) {
  const template = categories
    .map(
      (category) => `
    <a href="#" class="text-[#816255] hover:text-[#321f17] font-semibold border-b border-[#c3b4adbf]">
      ${category}
    </a>
  `
    )
    .join("");
  categoryDropdown.innerHTML = template;
}

// toggleMenu
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("-translate-x-full");
}

// Men Products
const menProducts = document.getElementById("men-products");
fetch("https://fakestoreapi.com/products/category/men's clothing")
  .then((response) => response.json())
  .then((products) => renderMenProducts(products.slice(1, 4)))
  .catch((err) => errorToast.showToast());

function renderMenProducts(products) {
  const template = products
    .map((product) => {
      return `
     <div
          class="relative group bg-gray-100 rounded-4xl p-4 pt-6 w-full h-auto shadow-xs"
        >
          <div
            class="absolute left-3 top-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          >
            <div class="flex flex-col gap-3">
              <button
                class="w-10 h-10 rounded-full bg-white text-gray-700 hover:bg-rose-500 hover:text-white text-lg shadow"
              >
                <i class="fa-regular fa-heart"></i>
              </button>
              <button
                class="w-10 h-10 rounded-full bg-white text-gray-700 hover:text-brn-200 text-lg shadow"
              >
                <i class="fa-regular fa-eye"></i>
              </button>
            </div>
          </div>

          <!-- Main Image -->
          <div class="relative z-0">
            <img
              src="${product.image}"
              alt="${product.title}"
              class="mx-auto"
            />
            <div class="absolute top-2 right-2 bg-white px-2 rounded-md">
              <img
                src="${product.image}"
                alt=""
                class="w-8 h-12 object-cover rounded"
              />
            </div>
          </div>

          <!-- Text -->
          <div class="mt-8 font-Quicksand">
            <p class="text-xl text-brn-300 font-semibold leading-tight">
              ${product.title}
            </p>
            <p class="text-xl font-semibold text-neutral-700 mt-1">$ ${product.price}</p>
          </div>

          <!-- Cart Button -->
          <div class="absolute -bottom-18 -right-2 bg-white p-4 rounded-3xl">
            <button
              class="w-12 h-12 md:w-16 md:h-16 md:text-2xl rounded-2xl bg-brn-500 text-white text-2xl flex items-center justify-center shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>

     `;
    })
    .join("");

  menProducts.innerHTML = template;
}

// Women Products
const womenProducts = document.getElementById("women-products");
fetch("https://fakestoreapi.com/products/category/women's clothing")
  .then((response) => response.json())
  .then((products) => renderWomenProducts(products.slice(0, 3)))
  .catch((err) => errorToast.showToast());

function renderWomenProducts(products) {
  const template = products
    .map((product) => {
      return `
 <div
          class="relative group bg-gray-100 rounded-4xl p-4 pt-6 w-full h-auto shadow-xs"
        >
          <div
            class="absolute left-3 top-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          >
            <div class="flex flex-col gap-3">
              <button
                class="w-10 h-10 rounded-full bg-white text-gray-700 hover:bg-rose-500 hover:text-white text-lg shadow"
              >
                <i class="fa-regular fa-heart"></i>
              </button>
              <button
                class="w-10 h-10 rounded-full bg-white text-gray-700 hover:text-brn-200 text-lg shadow"
              >
                <i class="fa-regular fa-eye"></i>
              </button>
            </div>
          </div>

          <!-- Main Image -->
          <div class="relative z-0">
            <img
              src="${product.image}"
              alt="${product.title}"
              class="mx-auto"
            />
            <div class="absolute top-2 right-2 bg-white px-2 rounded-md">
              <img
                src="${product.image}"
                alt=""
                class="w-8 h-12 object-cover rounded"
              />
            </div>
          </div>

          <!-- Text -->
          <div class="mt-8 font-Quicksand">
            <p class="text-xl text-brn-300 font-semibold leading-tight">
              ${product.title}
            </p>
            <p class="text-xl font-semibold text-neutral-700 mt-1">$ ${product.price}</p>
          </div>

          <!-- Cart Button -->
          <div class="absolute -bottom-18 -right-2 bg-white p-4 rounded-3xl">
            <button
              class="w-12 h-12 md:w-16 md:h-16 md:text-2xl rounded-2xl bg-brn-500 text-white text-2xl flex items-center justify-center shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
`;
    })
    .join("");
  womenProducts.innerHTML = template;
}

// Jewelry Products
const jewelryCollection = document.getElementById("jewelry-collection");
fetch("https://fakestoreapi.com/products/category/jewelery")
  .then((response) => response.json())
  .then((products) => renderJewelryProducts(products.slice(0, 3)))
  .catch((err) => errorToast.showToast());

function renderJewelryProducts(products) {
  const template = products
    .map((product) => {
      return `
   <div
          class="relative group bg-gray-100 rounded-4xl p-4 pt-6 w-full h-auto shadow-xs"
        >
          <div
            class="absolute left-3 top-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          >
            <div class="flex flex-col gap-3">
              <button
                class="w-10 h-10 rounded-full bg-white text-gray-700 hover:bg-rose-500 hover:text-white text-lg shadow"
              >
                <i class="fa-regular fa-heart"></i>
              </button>
              <button
                class="w-10 h-10 rounded-full bg-white text-gray-700 hover:text-brn-200 text-lg shadow"
              >
                <i class="fa-regular fa-eye"></i>
              </button>
            </div>
          </div>

          <!-- Main Image -->
          <div class="relative z-0">
            <img
              src="${product.image}"
              alt="${product.title}"
              class="mx-auto"
            />
            <div class="absolute top-2 right-2 bg-white px-2 rounded-md">
              <img
                src="${product.image}"
                alt=""
                class="w-8 h-12 object-cover rounded"
              />
            </div>
          </div>

          <!-- Text -->
          <div class="mt-8 font-Quicksand">
            <p class="text-xl text-brn-300 font-semibold leading-tight">
              ${product.title}
            </p>
            <p class="text-xl font-semibold text-neutral-700 mt-1">$ ${product.price}</p>
          </div>

          <!-- Cart Button -->
          <div class="absolute -bottom-18 -right-2 bg-white p-4 rounded-3xl">
            <button
              class="w-12 h-12 md:w-16 md:h-16 md:text-2xl rounded-2xl bg-brn-500 text-white text-2xl flex items-center justify-center shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      `;
    })
    .join("");
  jewelryCollection.innerHTML = template;
}

// Electronics Products
const electronicsProducts = document.getElementById("electronics-products");
fetch("https://fakestoreapi.com/products/category/electronics")
  .then((response) => response.json())
  .then((products) => renderElectronicsProducts(products.slice(0, 3)))
  .catch((err) => errorToast.showToast());

function renderElectronicsProducts(products) {
  const template = products
    .map((product) => {
      return `
   <div
          class="relative group bg-gray-100 rounded-4xl p-4 pt-6 w-full h-auto shadow-xs"
        >
          <div
            class="absolute left-3 top-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          >
            <div class="flex flex-col gap-3">
              <button
                class="w-10 h-10 rounded-full bg-white text-gray-700 hover:bg-rose-500 hover:text-white text-lg shadow"
              >
                <i class="fa-regular fa-heart"></i>
              </button>
              <button
                class="w-10 h-10 rounded-full bg-white text-gray-700 hover:text-brn-200 text-lg shadow"
              >
                <i class="fa-regular fa-eye"></i>
              </button>
            </div>
          </div>

          <!-- Main Image -->
          <div class="relative z-0">
            <img
              src="${product.image}"
              alt="${product.title}"
              class="mx-auto"
            />
            <div class="absolute top-2 right-2 bg-white px-2 rounded-md">
              <img
                src="${product.image}"
                alt=""
                class="w-8 h-12 object-cover rounded"
              />
            </div>
          </div>

          <!-- Text -->
          <div class="mt-8 font-Quicksand">
            <p class="text-xl text-brn-300 font-semibold leading-tight">
              ${product.title}
            </p>
            <p class="text-xl font-semibold text-neutral-700 mt-1">$ ${product.price}</p>
          </div>

          <!-- Cart Button -->
          <div class="absolute -bottom-18 -right-2 bg-white p-4 rounded-3xl">
            <button
              class="w-12 h-12 md:w-16 md:h-16 md:text-2xl rounded-2xl bg-brn-500 text-white text-2xl flex items-center justify-center shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      `;
    })
    .join("");
  electronicsProducts.innerHTML = template;
}
