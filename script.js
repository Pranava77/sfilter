

let productDiv = document.querySelector('.product');
var categoryListDiv = document.querySelector('.categoryList');
let allCat = [];
let displayProduct = async (allCheckCat = []) => {
    productDiv.innerHTML = '';
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    data.forEach(element => {

        if (!allCat.includes(element.category)) {
            categoryListDiv.innerHTML +=
                ` 
            <label for="" >
            <input type="checkbox" onclick='categoryFilter()' value="${element.category}"> ${element.category}
            </label>
            `
            allCat.push(element.category);
        }


        if (allCheckCat.length == 0) {
            allCheckCat = allCat;
        }


        if (allCheckCat.includes(element.category)) {
            productDiv.innerHTML +=
                `
            <div class="productItems">
                <img src="${element.image}" alt="">
                <h4>category: ${element.category}</h4>
                <p> price: Rs ${element.price} | ${element.rating.rate} </p>
                <h3>${element.title}</h3>
            </div>
            `;
        }
    });
}

displayProduct();

let categoryFilter = () => {
    let checkInput = document.querySelectorAll('input[type="checkbox"]');
    let checkData = [];
    checkInput.forEach(element => {
        if (element.checked) {
            checkData.push(element.value);
            console.log(element.value);
        }
    });
    displayProduct(checkData);
}

