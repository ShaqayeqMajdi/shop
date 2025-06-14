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
