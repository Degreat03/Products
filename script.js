const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");
const foodCheck = document.getElementById("foodCheck");
const fruitCheck = document.getElementById("fruitCheck");
const vegetableCheck = document.getElementById("vegetableCheck");
const fragranceCheck = document.getElementById("fragranceCheck");
const accessoriesCheck = document.getElementById("accessoriesCheck");
const result = document.getElementById("result");


const products = [
    {name: "Bread", price: 700, category: "Food"},
    {name: "Beans", price: 1500, category: "Food"},
    {name: "Rice", price: 1000, category: "Food"},
    {name: "Plantain", price: 1000, category: "Food"},

    {name: "Pineapple", price: 200, category: "Fruit"},
    {name: "Orange", price: 500, category: "Fruit"},
    {name: "Apple", price: 700, category: "Fruit"},
    {name: "Banana", price: 300, category: "Fruit"},

    {name: "Carrot", price: 500, category: "Vegetable"},
    {name: "Lettuce", price: 800, category: "Vegetable"},
    {name: "Pepper", price: 700, category: "Vegetable"},
    {name: "Onions", price: 700, category: "Vegetable"},

    {name: "Sugar", price: 7000, category: "Fragrance"},
    {name: "Avanti", price: 5000, category: "Fragrance"},
    {name: "Riggs", price: 4000, category: "Fragrance"},
    {name: "24k", price: 6000, category: "Fragrance"},

    {name: "Make-up", price: 30000, category: "Accessories"},
    {name: "Earring", price: 6000, category: "Accessories"},
    {name: "Wristwatch", price: 10000, category: "Accessories"},
    {name: "Necklace", price: 5000, category: "Accessories"},
];


function displayProduct(products){
    result.innerHTML = products.map(product =>{
        return `
            <div class="item">
             <span>${product.name}</span>
             <span>${"₦"}${product.price}</span>
             <span>${product.category}</span>
            </div>
        `
    }).join("") 
}

function searchProduct(){
    const selectCategories = [];
    if(foodCheck.checked) selectCategories.push("Food");
    if(fruitCheck.checked) selectCategories.push("Fruit");
    if(vegetableCheck.checked) selectCategories.push("Vegetable");
    if(fragranceCheck.checked) selectCategories.push("Fragrance");
    if(accessoriesCheck.checked) selectCategories.push("Accessories");

    const searchText = searchBox.value.toLowerCase();
    const filterProducts = products.filter(product =>{
        const correctText = product.name.toLowerCase().includes(searchText) ||
                            product.category.toLowerCase().includes(searchText)

        const correctProduct = selectCategories.length === 0 || selectCategories.includes(product.category) 

        return correctText && correctProduct;
    })
    displayProduct(filterProducts)
}

displayProduct(products)

searchBox.addEventListener("input", searchProduct);
searchBtn.addEventListener("click", searchProduct);
foodCheck.addEventListener("change", searchProduct);
fruitCheck.addEventListener("change", searchProduct);
vegetableCheck.addEventListener("change", searchProduct);
fragranceCheck.addEventListener("change", searchProduct);
accessoriesCheck.addEventListener("change", searchProduct);



