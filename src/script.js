const root = document.getElementById("root");

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
          <div class="relative z-0 bg-white p-2 rounded-2xl py-4">
            <img
              src="${product.image}"
              alt="${product.title}"
              class="mx-auto w-62 h-72"
            />
            <div class="absolute top-2 right-2 bg-white p-2 rounded-md">
              <img
                src="${product.image}"
                alt=""
                class="w-8 h-12 object-contain rounded"
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
          <div class="relative z-0 bg-white p-2 rounded-2xl py-4">
            <img
              src="${product.image}"
              alt="${product.title}"
              class="mx-auto w-62 h-72"
            />
            <div class="absolute top-2 right-2 bg-white p-2 rounded-md">
              <img
                src="${product.image}"
                alt=""
                class="w-8 h-12 object-contain rounded"
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
          <div class="relative z-0 bg-white p-2 rounded-2xl py-4">
            <img
              src="${product.image}"
              alt="${product.title}"
              class="mx-auto w-62 h-72"
            />
            <div class="absolute top-2 right-2 bg-white p-2 rounded-md">
              <img
                src="${product.image}"
                alt=""
                class="w-8 h-12 object-contain rounded"
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
          <div class="relative z-0 bg-white p-2 rounded-2xl py-4">
            <img
              src="${product.image}"
              alt="${product.title}"
              class="mx-auto w-62 h-72"
            />
            <div class="absolute top-2 right-2 bg-white p-1 rounded-md">
              <img
                src="${product.image}"
                alt=""
                class="w-8 h-12 object-contain rounded"
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

//Men Page
function aClick(event) {
  event.preventDefault();
  const href = event.target.getAttribute("href");
  history.pushState({}, "", href);
  checkState();
}

function renderMenPage() {
  root.innerHTML = `
   <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 my-6 max-w-screen-xl mx-auto">
      <div
        class="relative animate-pulse bg-gray-100 rounded-4xl p-4 pt-6 w-full h-auto shadow-xs"
      >
        <div class="relative z-0">
          <div class="bg-slate-300 h-96 rounded-xl"></div>
          <div
            class="absolute h-16 w-12 top-2 right-2 bg-slate-200 rounded-md"
          ></div>
        </div>
        <div class="mt-8">
          <p class="bg-slate-300 w-40 h-8 rounded-lg"></p>
          <p class="bg-slate-300 w-32 h-8 rounded-lg mt-2"></p>
        </div>
        <div class="absolute -bottom-18 -right-2 bg-slate-300 p-4 rounded-3xl">
          <button
            class="w-12 h-12 md:w-16 md:h-16 md:text-2xl rounded-2xl bg-slate-200 text-white text-2xl flex items-center justify-center shadow-lg"
          ></button>
        </div>
      </div>
       <div
        class="relative animate-pulse bg-gray-100 rounded-4xl p-4 pt-6 w-full h-auto shadow-xs"
      >
        <div class="relative z-0">
          <div class="bg-slate-300 h-96 rounded-xl"></div>
          <div
            class="absolute h-16 w-12 top-2 right-2 bg-slate-200 rounded-md"
          ></div>
        </div>
        <div class="mt-8">
          <p class="bg-slate-300 w-40 h-8 rounded-lg"></p>
          <p class="bg-slate-300 w-32 h-8 rounded-lg mt-2"></p>
        </div>
        <div class="absolute -bottom-18 -right-2 bg-slate-300 p-4 rounded-3xl">
          <button
            class="w-12 h-12 md:w-16 md:h-16 md:text-2xl rounded-2xl bg-slate-200 text-white text-2xl flex items-center justify-center shadow-lg"
          ></button>
        </div>
      </div>
       <div
        class="relative animate-pulse bg-gray-100 rounded-4xl p-4 pt-6 w-full h-auto shadow-xs"
      >
        <div class="relative z-0">
          <div class="bg-slate-300 h-96 rounded-xl"></div>
          <div
            class="absolute h-16 w-12 top-2 right-2 bg-slate-200 rounded-md"
          ></div>
        </div>
        <div class="mt-8">
          <p class="bg-slate-300 w-40 h-8 rounded-lg"></p>
          <p class="bg-slate-300 w-32 h-8 rounded-lg mt-2"></p>
        </div>
        <div class="absolute -bottom-18 -right-2 bg-slate-300 p-4 rounded-3xl">
          <button
            class="w-12 h-12 md:w-16 md:h-16 md:text-2xl rounded-2xl bg-slate-200 text-white text-2xl flex items-center justify-center shadow-lg"
          ></button>
        </div>
      </div>
    </div>
  `;
  fetch("https://fakestoreapi.com/products/category/men's clothing")
    .then((response) => response.json())
    .then((products) => renderMenData(products))
    .catch((err) =>
      Toastify({
        text: "Failed to fetch data",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #fff8e1, #c5a46d)",
          color: "#333",
        },
        onClick: function () {},
      }).showToast()
    );

  function renderMenData(data) {
    const template = data
      .map((item) => {
        return `<div
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
          <div class="relative z-0 bg-white p-2 rounded-2xl py-4">
            <img
              src="${item.image}"
              alt="${item.title}"
              class="mx-auto w-62 h-72"
            />
            <div class="absolute top-2 right-2 bg-white p-2 rounded-md">
              <img
                src="${item.image}"
                alt=""
                class="w-8 h-12 object-contain rounded"
              />
            </div>
          </div>

          <!-- Text -->
          <div class="mt-8 font-Quicksand">
            <p class="text-xl text-brn-300 font-semibold leading-tight">
              ${item.title}
            </p>
            <p class="text-xl font-semibold text-neutral-700 mt-1">$ ${item.price}</p>
          </div>

          <!-- Cart Button -->
          <div class="absolute -bottom-18 -right-2 bg-white p-4 rounded-3xl">
            <button
              class="w-12 h-12 md:w-16 md:h-16 md:text-2xl rounded-2xl bg-brn-500 text-white text-2xl flex items-center justify-center shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>`;
      })
      .join("");
    const header = `
      
    <div
      class="w-full h-72 text-center bg-neutral-900 text-4xl md:text-7xl flex items-center justify-center text-white font-extrabold uppercase font-Quicksand">
      <h1>Men's Wear</h1>
    </div>
    <div
          class="grid grid-cols-1 my-6 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-xl mx-auto"
        >${template}</div>
      `;
    root.innerHTML = header;
  }
}

function renderWomenPage() {
  root.innerHTML = `
   <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 my-6 max-w-screen-xl mx-auto">
      <div
        class="relative animate-pulse bg-gray-100 rounded-4xl p-4 pt-6 w-full h-auto shadow-xs"
      >
        <div class="relative z-0">
          <div class="bg-slate-300 h-96 rounded-xl"></div>
          <div
            class="absolute h-16 w-12 top-2 right-2 bg-slate-200 rounded-md"
          ></div>
        </div>
        <div class="mt-8">
          <p class="bg-slate-300 w-40 h-8 rounded-lg"></p>
          <p class="bg-slate-300 w-32 h-8 rounded-lg mt-2"></p>
        </div>
        <div class="absolute -bottom-18 -right-2 bg-slate-300 p-4 rounded-3xl">
          <button
            class="w-12 h-12 md:w-16 md:h-16 md:text-2xl rounded-2xl bg-slate-200 text-white text-2xl flex items-center justify-center shadow-lg"
          ></button>
        </div>
      </div>
       <div
        class="relative animate-pulse bg-gray-100 rounded-4xl p-4 pt-6 w-full h-auto shadow-xs"
      >
        <div class="relative z-0">
          <div class="bg-slate-300 h-96 rounded-xl"></div>
          <div
            class="absolute h-16 w-12 top-2 right-2 bg-slate-200 rounded-md"
          ></div>
        </div>
        <div class="mt-8">
          <p class="bg-slate-300 w-40 h-8 rounded-lg"></p>
          <p class="bg-slate-300 w-32 h-8 rounded-lg mt-2"></p>
        </div>
        <div class="absolute -bottom-18 -right-2 bg-slate-300 p-4 rounded-3xl">
          <button
            class="w-12 h-12 md:w-16 md:h-16 md:text-2xl rounded-2xl bg-slate-200 text-white text-2xl flex items-center justify-center shadow-lg"
          ></button>
        </div>
      </div>
       <div
        class="relative animate-pulse bg-gray-100 rounded-4xl p-4 pt-6 w-full h-auto shadow-xs"
      >
        <div class="relative z-0">
          <div class="bg-slate-300 h-96 rounded-xl"></div>
          <div
            class="absolute h-16 w-12 top-2 right-2 bg-slate-200 rounded-md"
          ></div>
        </div>
        <div class="mt-8">
          <p class="bg-slate-300 w-40 h-8 rounded-lg"></p>
          <p class="bg-slate-300 w-32 h-8 rounded-lg mt-2"></p>
        </div>
        <div class="absolute -bottom-18 -right-2 bg-slate-300 p-4 rounded-3xl">
          <button
            class="w-12 h-12 md:w-16 md:h-16 md:text-2xl rounded-2xl bg-slate-200 text-white text-2xl flex items-center justify-center shadow-lg"
          ></button>
        </div>
      </div>
    </div>
  `;
  fetch("https://fakestoreapi.com/products/category/women's clothing")
    .then((response) => response.json())
    .then((products) => renderWomenData(products))
    .catch((err) =>
      Toastify({
        text: "Failed to fetch data",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #fff8e1, #c5a46d)",
          color: "#333",
        },
        onClick: function () {},
      }).showToast()
    );
  function renderWomenData(data) {
    const template = data
      .map((item) => {
        return `<div
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
          <div class="relative z-0 bg-white p-2 rounded-2xl py-4">
            <img
              src="${item.image}"
              alt="${item.title}"
              class="mx-auto w-62 h-72"
            />
            <div class="absolute top-2 right-2 bg-white p-2 rounded-md">
              <img
                src="${item.image}"
                alt=""
                class="w-8 h-12 object-contain rounded"
              />
            </div>
          </div>

          <!-- Text -->
          <div class="mt-8 font-Quicksand">
            <p class="text-xl text-brn-300 font-semibold leading-tight">
              ${item.title}
            </p>
            <p class="text-xl font-semibold text-neutral-700 mt-1">$ ${item.price}</p>
          </div>

          <!-- Cart Button -->
          <div class="absolute -bottom-18 -right-2 bg-white p-4 rounded-3xl">
            <button
              class="w-12 h-12 md:w-16 md:h-16 md:text-2xl rounded-2xl bg-brn-500 text-white text-2xl flex items-center justify-center shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>`;
      })
      .join("");
    const header = `
      
    <div
      class="w-full h-72 text-center bg-neutral-900 text-4xl md:text-7xl flex items-center justify-center text-white font-extrabold uppercase font-Quicksand">
      <h1>Women's Wear</h1>
    </div>
    <div
          class="grid grid-cols-1 my-6 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-xl mx-auto"
        >${template}</div>
      `;
    root.innerHTML = header;
  }
}

function renderJewelryPage() {
  root.innerHTML = `
   <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 my-6 max-w-screen-xl mx-auto">
      <div
        class="relative animate-pulse bg-gray-100 rounded-4xl p-4 pt-6 w-full h-auto shadow-xs"
      >
        <div class="relative z-0">
          <div class="bg-slate-300 h-96 rounded-xl"></div>
          <div
            class="absolute h-16 w-12 top-2 right-2 bg-slate-200 rounded-md"
          ></div>
        </div>
        <div class="mt-8">
          <p class="bg-slate-300 w-40 h-8 rounded-lg"></p>
          <p class="bg-slate-300 w-32 h-8 rounded-lg mt-2"></p>
        </div>
        <div class="absolute -bottom-18 -right-2 bg-slate-300 p-4 rounded-3xl">
          <button
            class="w-12 h-12 md:w-16 md:h-16 md:text-2xl rounded-2xl bg-slate-200 text-white text-2xl flex items-center justify-center shadow-lg"
          ></button>
        </div>
      </div>
       <div
        class="relative animate-pulse bg-gray-100 rounded-4xl p-4 pt-6 w-full h-auto shadow-xs"
      >
        <div class="relative z-0">
          <div class="bg-slate-300 h-96 rounded-xl"></div>
          <div
            class="absolute h-16 w-12 top-2 right-2 bg-slate-200 rounded-md"
          ></div>
        </div>
        <div class="mt-8">
          <p class="bg-slate-300 w-40 h-8 rounded-lg"></p>
          <p class="bg-slate-300 w-32 h-8 rounded-lg mt-2"></p>
        </div>
        <div class="absolute -bottom-18 -right-2 bg-slate-300 p-4 rounded-3xl">
          <button
            class="w-12 h-12 md:w-16 md:h-16 md:text-2xl rounded-2xl bg-slate-200 text-white text-2xl flex items-center justify-center shadow-lg"
          ></button>
        </div>
      </div>
       <div
        class="relative animate-pulse bg-gray-100 rounded-4xl p-4 pt-6 w-full h-auto shadow-xs"
      >
        <div class="relative z-0">
          <div class="bg-slate-300 h-96 rounded-xl"></div>
          <div
            class="absolute h-16 w-12 top-2 right-2 bg-slate-200 rounded-md"
          ></div>
        </div>
        <div class="mt-8">
          <p class="bg-slate-300 w-40 h-8 rounded-lg"></p>
          <p class="bg-slate-300 w-32 h-8 rounded-lg mt-2"></p>
        </div>
        <div class="absolute -bottom-18 -right-2 bg-slate-300 p-4 rounded-3xl">
          <button
            class="w-12 h-12 md:w-16 md:h-16 md:text-2xl rounded-2xl bg-slate-200 text-white text-2xl flex items-center justify-center shadow-lg"
          ></button>
        </div>
      </div>
    </div>
  `;
  fetch("https://fakestoreapi.com/products/category/jewelery")
    .then((response) => response.json())
    .then((products) => renderJewelryData(products))
    .catch((err) =>
      Toastify({
        text: "Failed to fetch data",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #fff8e1, #c5a46d)",
          color: "#333",
        },
        onClick: function () {},
      }).showToast()
    );
  function renderJewelryData(data) {
    const template = data
      .map((item) => {
        return `<div
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
          <div class="relative z-0 bg-white p-2 rounded-2xl py-4">
            <img
              src="${item.image}"
              alt="${item.title}"
              class="mx-auto w-62 h-72"
            />
            <div class="absolute top-2 right-2 bg-white p-2 rounded-md">
              <img
                src="${item.image}"
                alt=""
                class="w-8 h-12 object-contain rounded"
              />
            </div>
          </div>

          <!-- Text -->
          <div class="mt-8 font-Quicksand">
            <p class="text-xl text-brn-300 font-semibold leading-tight">
              ${item.title}
            </p>
            <p class="text-xl font-semibold text-neutral-700 mt-1">$ ${item.price}</p>
          </div>

          <!-- Cart Button -->
          <div class="absolute -bottom-18 -right-2 bg-white p-4 rounded-3xl">
            <button
              class="w-12 h-12 md:w-16 md:h-16 md:text-2xl rounded-2xl bg-brn-500 text-white text-2xl flex items-center justify-center shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>`;
      })
      .join("");
    const header = `
      
    <div
      class="w-full h-72 text-center bg-neutral-900 text-4xl md:text-7xl flex items-center justify-center text-white font-extrabold uppercase font-Quicksand">
      <h1>Jewelry</h1>
    </div>
    <div
          class="grid grid-cols-1 my-6 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-xl mx-auto"
        >${template}</div>
      `;
    root.innerHTML = header;
  }
}

function renderMainPage() {
  const template = `
        <!-- Main Banner Section -->
      <section class="bg-neutral-950 w-full">
        <div
          class="max-w-screen-xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-10"
        >
          <!-- Text Left Side -->
          <div class="md:w-1/2 text-left">
            <img src="./assets/images/header/dots-lines-3.png" alt="dots" />
            <p
              class="text-sm text-gray-400 uppercase tracking-widest mb-4 mt-8"
            >
              <span
                class="inline-block w-5 h-[1px] bg-white mr-2 align-middle"
              ></span>
              Limited Addition
            </p>
            <h1
              class="text-4xl md:text-7xl font-Quicksand text-white font-light leading-tight"
            >
              A Watch for Every <br />
              Journey,
              <span class="text-brn-300 font-serif font-semibold md:text-7xl"
                >Every Occasion</span
              >
            </h1>
            <p
              class="text-base font-light font-Inter text-gray-500 mt-6 max-w-md mx-auto md:mx-0"
            >
              Lorem ipsum dolor sit amet consectetur. Aliquam turpis risus
              pellentesque leo vitae diam elementum. Nam pellentesque lectus et
              iaculis vitae rhoncus bibendum. Etiam.
            </p>

            <div
              class="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <button
                class="bg-white text-black px-6 py-3 rounded-md font-medium text-sm hover:bg-white/50 hover:backdrop-blur-md hover:text-black transition duration-300 ease-in-out"
              >
                Shop Now ➜
              </button>
              <button
                class="text-white px-6 py-3 rounded-md font-medium text-sm flex items-center justify-center gap-2 bg-gradient-to-r from-brn-300 via-brn-100 to-brn-200 bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-700 ease-in-out"
              >
                Add to Cart <i class="fas fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          <!-- Image Right Side -->
          <div class="md:w-1/2">
            <img
              src="./assets/images/header/hero-image.png"
              alt="Watch Banner"
              class="w-full h-full"
            />
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <div
        class="bg-[url('./assets/images/mainpage/features-bg.png')] bg-cover bg-center text-white p-6 rounded-4xl space-y-6 md:h-64 md:flex md:justify-between m-10 font-Quicksand"
      >
        <div
          class="flex flex-col items-start md:flex-row md:items-center md:w-1/3 space-y-4 md:space-y-0 md:space-x-4"
        >
          <div class="bg-brn-100 p-4 rounded-xl">
            <img src="./assets/images/mainpage/Return.png" alt="" />
          </div>
          <div>
            <h3 class="text-xl font-bold mb-1">Easy Returns</h3>
            <p class="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet conse ctetur.<br />
              Penatibus luctus nam feugiat tortor natoque<br />
              tortor mauris nec dictum.
            </p>
          </div>
        </div>
        <div
          class="flex flex-col items-start md:flex-row md:items-center md:w-1/3 space-y-4 md:space-y-0 md:space-x-4"
        >
          <div class="bg-brn-100 p-4 rounded-xl">
            <img src="./assets/images/mainpage/Delivery.png" alt="" />
          </div>
          <div>
            <h3 class="text-xl font-bold mb-1">Free Delivery</h3>
            <p class="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet conse ctetur.<br />
              Penatibus luctus nam feugiat tortor natoque<br />
              tortor mauris nec dictum.
            </p>
          </div>
        </div>

        <div
          class="flex flex-col items-start md:flex-row md:items-center md:w-1/3 space-y-4 md:space-y-0 md:space-x-4"
        >
          <div class="bg-brn-100 p-4 rounded-xl">
            <img src="./assets/images/mainpage/Deal.png" alt="" />
          </div>
          <div>
            <h3 class="text-xl font-bold mb-1">Quality Assurance</h3>
            <p class="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet conse ctetur.<br />
              Penatibus luctus nam feugiat tortor natoque<br />
              tortor mauris nec dictum.
            </p>
          </div>
        </div>
      </div>

      <!-- Featured Products -->
      <section
        class="md:px-4 py-6 px-6 lg:px-16 font-Inter max-w-screen-xl mx-auto"
      >
        <h2 class="md:text-4xl font-bold mb-9 text-2xl">Featured Watches</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
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
                src="./assets/images/mainpage/w-1.png"
                alt="Watch"
                class="mx-auto"
              />
              <div class="absolute top-2 right-2 bg-white px-2 rounded-md">
                <img
                  src="./assets/images/mainpage/w-3.png"
                  alt=""
                  class="w-8 h-12 object-cover rounded"
                />
              </div>
            </div>

            <!-- Text -->
            <div class="mt-8 font-Quicksand">
              <p class="text-xl text-brn-300 font-semibold leading-tight">
                CHV-M17G30-K9
              </p>
              <p class="text-xl font-semibold text-neutral-700 mt-1">$240</p>
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
                src="./assets/images/mainpage/w-2.png"
                alt="Watch"
                class="mx-auto"
              />
              <div class="absolute top-2 right-2 bg-white px-2 rounded-md">
                <img
                  src="./assets/images/mainpage/w-4.png"
                  alt=""
                  class="w-8 h-12 object-cover rounded"
                />
              </div>
            </div>

            <!-- Text -->
            <div class="mt-8 font-Quicksand">
              <p class="text-xl text-brn-300 font-semibold leading-tight">
                CHV-M17G30-K9
              </p>
              <p class="text-xl font-semibold text-neutral-700 mt-1">$240</p>
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
                src="./assets/images/mainpage/w-3.png"
                alt="Watch"
                class="mx-auto"
              />
              <div class="absolute top-2 right-2 bg-white px-2 rounded-md">
                <img
                  src="./assets/images/mainpage/w-1.png"
                  alt=""
                  class="w-8 h-12 object-cover rounded"
                />
              </div>
            </div>

            <!-- Text -->
            <div class="mt-8 font-Quicksand">
              <p class="text-xl text-brn-300 font-semibold leading-tight">
                CHV-M17G30-K9
              </p>
              <p class="text-xl font-semibold text-neutral-700 mt-1">$240</p>
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
        </div>
      </section>

      <div
        class="w-full h-600 bg-cover bg-no-repeat my-12"
        style="background-image: url('./assets/images/mainpage/banner.png')"
      ></div>

      <!-- Products Section 1 -->
      <section class="px-4 py-6 sm:px-6 lg:px-16 font-Quicksand">
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-screen-xl mx-auto"
        >
          <div
            class="relative bg-gray-200/50 rounded-3xl overflow-hidden p-6 h-80 shadow-lg"
          >
            <img
              src="./assets/images/mainpage/cp.png"
              alt="BG"
              class="absolute -top-2 w-full h-full object-cover opacity-50 pointer-events-none rounded-md"
            />
            <div class="relative z-10">
              <p class="md:text-xl text-base font-semibold my-4">
                Latest Collection
              </p>
              <h2 class="md:text-4xl text-xl font-bold mb-5">
                Elegance Redefined
              </h2>
              <p class="md:text-lg text-xs text-gray-600 mb-6">
                Lorem ipsum dolor sit amet consectetur.<br />
                Eu enim sit metus ac.
              </p>
              <a
                href="/women"
                onclick="aClick(event)"
                class="text-base hover:text-brn-300 hover:underline font-semibold text-black inline-flex items-center mt-10"
              >
                Shop Now <span class="ml-1">→</span>
              </a>
            </div>
            <img
              src="./assets/images/mainpage/women.png"
              alt="men"
              class="absolute bottom-0 right-4 w-56 z-0"
            />
          </div>
          <!-- Card 2 -->
          <div
            class="relative bg-gray-200/50 rounded-3xl overflow-hidden p-6 h-80 shadow-lg"
          >
            <img
              src="./assets/images/mainpage/cp.png"
              alt="BG"
              class="absolute -top-2 w-full h-full object-cover opacity-50 pointer-events-none rounded-md"
            />
            <div class="relative z-10">
              <p class="md:text-xl text-base font-semibold my-4">
                Latest Collection
              </p>
              <h2 class="md:text-4xl text-xl font-bold mb-5">Classic Modern</h2>
              <p class="md:text-lg text-xs text-gray-600 mb-6">
                Lorem ipsum dolor sit amet consectetur.<br />
                Eu enim sit metus ac.
              </p>
              <a
                href="/men"
                onclick="aClick(event)"
                class="text-base hover:text-brn-300 hover:underline font-semibold text-black inline-flex items-center mt-10"
              >
                Shop Now <span class="ml-1">→</span>
              </a>
            </div>
            <img
              src="./assets/images/mainpage/men.png"
              alt="men"
              class="absolute bottom-0 right-4 w-56 z-0"
            />
          </div>
        </div>
      </section>

      <!-- Men -->
      <section class="md:px-4 py-6 px-6 lg:px-16 font-Inter bg-gray-100/50">
        <h2 class="md:text-4xl font-bold mb-9 text-2xl max-w-screen-xl mx-auto">
          Men's Wear
        </h2>
        <div
          id="men-products"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-xl mx-auto"
        ></div>
        <div class="mt-10 text-center">
          <a
            href="#"
            class="inline-block text-brn-500 border-b-2 border-brn-500 hover:text-brn-200 hover:border-brn-200 transition duration-300"
          >
            Load more items →
          </a>
        </div>
      </section>

      <!--Women -->
      <section class="md:px-4 py-6 px-6 lg:px-16 font-Inter">
        <h2 class="md:text-4xl font-bold mb-9 text-2xl max-w-screen-xl mx-auto">
          Women's Wear
        </h2>
        <div
          id="women-products"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-xl mx-auto"
        ></div>
        <div class="mt-10 text-center">
          <a
            href="#"
            class="inline-block text-brn-500 border-b-2 border-brn-500 hover:text-brn-200 hover:border-brn-200 transition duration-300"
          >
            Load more items →
          </a>
        </div>
      </section>

      <!-- Mid-Page Banner Section -->
      <section
        class="bg-[url('./assets/images/mainpage/hero-banner.png')] bg-cover bg-center w-full"
      >
        <div
          class="max-w-screen-xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-10"
        >
          <!-- Text Left Side -->
          <div class="md:w-1/2 text-left">
            <p
              class="text-sm text-gray-200 uppercase tracking-widest mb-4 mt-8"
            >
              <span
                class="inline-block w-5 h-[1px] bg-white mr-2 align-middle"
              ></span>
              Waterproof Watch
            </p>
            <h1
              class="text-4xl md:text-7xl font-Quicksand text-white font-light leading-tight"
            >
              This will change your
              <span class="font-serif font-semibold md:text-7xl"
                >life forever!</span
              >
            </h1>
            <p
              class="text-base font-light font-Inter text-white mt-6 max-w-md mx-auto md:mx-0"
            >
              Lorem ipsum dolor sit amet consectetur. Aliquam turpis risus
              pellentesque leo vitae diam elementum. Nam pellentesque lectus et
              iaculis vitae rhoncus bibendum. Etiam.
            </p>

            <div
              class="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <button
                class="bg-white text-black px-6 py-3 rounded-md font-medium text-sm hover:bg-white/50 hover:backdrop-blur-md hover:text-black transition duration-300 ease-in-out"
              >
                Shop Now ➜
              </button>
              <button
                class="text-neutral-900 px-6 py-3 rounded-md font-medium text-sm flex items-center justify-center gap-2 bg-gradient-to-r from-white via-gray-300 to-gray-600 bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-700 ease-in-out"
              >
                Add to Cart <i class="fas fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Products Section 2 -->
      <section class="px-4 py-6 sm:px-6 lg:px-16 font-Quicksand">
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-screen-xl mx-auto"
        >
          <div
            class="relative bg-gray-200/50 rounded-3xl overflow-hidden p-6 h-80 shadow-lg"
          >
            <img
              src="./assets/images/mainpage/cp.png"
              alt="BG"
              class="absolute -top-2 w-full h-full object-cover opacity-50 pointer-events-none rounded-md"
            />
            <div class="relative z-10">
              <p class="md:text-xl text-base font-semibold my-4">
                Latest Collection
              </p>
              <h2 class="md:text-4xl text-xl font-bold mb-5">Jewelry</h2>
              <p class="md:text-lg text-xs text-gray-600 mb-6">
                Lorem ipsum dolor sit amet consectetur.<br />
                Eu enim sit metus ac.
              </p>
              <a
                href="/jewelry"
                onclick="aClick(event)"
                class="text-base hover:text-brn-300 hover:underline font-semibold text-black inline-flex items-center mt-10"
              >
                Shop Now <span class="ml-1">→</span>
              </a>
            </div>
            <img
              src="./assets/images/mainpage/Jewelry.png"
              alt="men"
              class="absolute bottom-10 right-4 w-56 z-0"
            />
          </div>
          <!-- Card 2 -->
          <div
            class="relative bg-gray-200/50 rounded-3xl overflow-hidden p-6 h-80 shadow-lg"
          >
            <img
              src="./assets/images/mainpage/cp.png"
              alt="BG"
              class="absolute -top-2 w-full h-full object-cover opacity-50 pointer-events-none rounded-md"
            />
            <div class="relative z-10">
              <p class="md:text-xl text-base font-semibold my-4">
                Latest Collection
              </p>
              <h2 class="md:text-4xl text-xl font-bold mb-5">Electronics</h2>
              <p class="md:text-lg text-xs text-gray-600 mb-6">
                Lorem ipsum dolor sit amet consectetur.<br />
                Eu enim sit metus ac.
              </p>
              <a
                href="/electronics"
                onclick="aClick(event)"
                class="text-base hover:text-brn-300 hover:underline font-semibold text-black inline-flex items-center mt-10"
              >
                Shop Now <span class="ml-1">→</span>
              </a>
            </div>
            <img
              src="./assets/images/mainpage/Electronics.png"
              alt="men"
              class="absolute bottom-16 right-4 w-60 z-0 h-48"
            />
          </div>
        </div>
      </section>

      <!-- Jewelry -->
      <section class="md:px-4 py-6 px-6 lg:px-16 font-Inter bg-gray-100/50">
        <h2 class="md:text-4xl font-bold mb-9 text-2xl max-w-screen-xl mx-auto">
          Jewelry
        </h2>
        <div
          id="jewelry-collection"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-xl mx-auto"
        ></div>
        <div class="mt-10 text-center">
          <a
            href="#"
            class="inline-block text-brn-500 border-b-2 border-brn-500 hover:text-brn-200 hover:border-brn-200 transition duration-300"
          >
            Load more items →
          </a>
        </div>
      </section>

      <!-- Electronics -->
      <section class="md:px-4 py-6 px-6 lg:px-16 font-Inter">
        <h2 class="md:text-4xl font-bold mb-9 text-2xl max-w-screen-xl mx-auto">
          Electronics
        </h2>
        <div
          id="electronics-products"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-xl mx-auto"
        ></div>
        <div class="mt-10 text-center">
          <a
            href="#"
            class="inline-block text-brn-500 border-b-2 border-brn-500 hover:text-brn-200 hover:border-brn-200 transition duration-300"
          >
            Load more items →
          </a>
        </div>
      </section>

      <!-- Articles -->
      <section
        class="md:px-4 py-6 px-6 lg:px-16 font-Inter max-w-screen-xl mx-auto"
      >
        <h2 class="md:text-4xl font-bold mb-9 text-2xl mt-4">
          Latest Articles
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          <div
            class="bg-gray-100 rounded-4xl overflow-hidden shadow-md transition duration-300"
          >
            <img
              src="./assets/images/mainpage/b-1.png"
              alt="Blog Image"
              class="w-full h-auto object-cover rounded-4xl"
            />
            <div class="p-4">
              <span
                class="text-sm text-gray-500 bg-white w-28 px-1 whitespace-nowrap flex items-center gap-1 mb-1"
              >
                Men's Watches
              </span>
              <h3 class="text-lg font-semibold text-gray-900">
                Icons of Time: The Most Iconic Watches of All Time
              </h3>
              <div class="flex justify-between text-sm text-gray-500 my-2">
                <span class="flex items-center gap-1"
                  ><img src="./assets/images/mainpage/image.png" alt="" />James
                  Smith</span
                >
                <a
                  href="#"
                  class="font-bold flex items-center gap-1 transition-colors duration-300 text-brn-500"
                >
                  Read More <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            class="bg-gray-100 rounded-4xl overflow-hidden shadow-md transition duration-300"
          >
            <img
              src="./assets/images/mainpage/b-2.png"
              alt="Blog Image"
              class="w-full h-auto object-cover rounded-4xl"
            />
            <div class="p-4">
              <span
                class="text-sm text-gray-500 bg-white w-28 px-1 whitespace-nowrap flex items-center gap-1 mb-1"
              >
                Men's Watches
              </span>
              <h3 class="text-lg font-semibold text-gray-900">
                Icons of Time: The Most Iconic Watches of All Time
              </h3>
              <div class="flex justify-between text-sm text-gray-500 my-2">
                <span class="flex items-center gap-1"
                  ><img src="./assets/images/mainpage/image.png" alt="" />James
                  Smith</span
                >
                <a
                  href="#"
                  class="font-bold flex items-center gap-1 transition-colors duration-300 text-brn-500"
                >
                  Read More <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            class="bg-gray-100 rounded-4xl overflow-hidden shadow-md transition duration-300"
          >
            <img
              src="./assets/images/mainpage/b-3.png"
              alt="Blog Image"
              class="w-full h-auto object-cover rounded-4xl"
            />
            <div class="p-4">
              <span
                class="text-sm text-gray-500 bg-white w-28 px-1 whitespace-nowrap flex items-center gap-1 mb-1"
              >
                Men's Watches
              </span>
              <h3 class="text-lg font-semibold text-gray-900">
                Icons of Time: The Most Iconic Watches of All Time
              </h3>
              <div class="flex justify-between text-sm text-gray-500 my-2">
                <span class="flex items-center gap-1"
                  ><img src="./assets/images/mainpage/image.png" alt="" />James
                  Smith</span
                >
                <a
                  href="#"
                  class="font-bold flex items-center gap-1 transition-colors duration-300 text-brn-500"
                >
                  Read More <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>`;
  root.innerHTML = template;
  renderMenProducts();
  renderWomenProducts();
  renderJewelryProducts();
}

function checkState() {
  const url = location.pathname;
  if (url === "/men") {
    renderMenPage();
  }
  if (url === "/women") {
    renderWomenPage();
  }
  if (url === "/jewelry") {
    renderJewelryPage();
  } else {
    renderMainPage();
  }
}

window.addEventListener("popstate", checkState);
