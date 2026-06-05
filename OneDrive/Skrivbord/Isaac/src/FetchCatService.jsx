import { Link } from 'react-router-dom' 

let allCats = [];
const catsPerPage = 10;
let currentPage = 1;
let cart = JSON.parse(localStorage.getItem("cart")) || [];

fetch("https://api.thecatapi.com/v1/breeds?limit=30")
    .then(response => response.json())
    .then(data => {
        allCats = data;
        displayCats();
    });

document.querySelectorAll(".pagination a").forEach((link, index) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(".pagination a.active").classList.remove("active");
        link.classList.add("active");
        currentPage = index + 1;
        displayCats();
    });
});

function displayCats(cats = allCats) {
    const start = (currentPage - 1) * catsPerPage;
    const end = start + catsPerPage;
    
    document.querySelector(".catgrid").innerHTML = "";  
    
    cats.slice(start, end).forEach(cat => {
        const div = document.createElement("div")
        const img = document.createElement("img")
        const name = document.createElement("h3")
        const origin = document.createElement("p")
        name.textContent = "Breed: " + cat.name
        origin.textContent = "Origin: " + cat.origin
        div.appendChild(name)
        div.appendChild(origin)
        img.src = "https://cdn2.thecatapi.com/images/" + cat.reference_image_id + ".jpg"
        img.onerror = () => div.remove();
        div.appendChild(img)

        const button = document.createElement("button")
        button.textContent = "Add to Cart"
        button.addEventListener("click", () => {addToCart(cat)})
        div.appendChild(button)

        document.querySelector(".catgrid").appendChild(div)
    })

}

function addToCart(cat) {
    if (cart.some(c => c.id === cat.id)) {
        alert(cat.name + " is already in your cart!");
        return;
    }
    cart.push(cat);
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
}

document.getElementById("searchBar").addEventListener("input", () => {
    const search = document.getElementById("searchBar").value.toLowerCase();
    const filtered = allCats.filter(cat => cat.name.toLowerCase().includes(search));
    displayCats(filtered);
});

const loop = document.querySelector(".loop");
    loop.innerHTML += loop.innerHTML;