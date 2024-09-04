const buttons = document.querySelectorAll('.add-to-cart');
const emptycart = document.querySelector('.your-cart')
const yourcartitems = document.querySelector('.your-cart-items')
const menuItems = document.querySelectorAll(".dessert-menu");


function addToCartHandler() {
    emptycart.style.display = 'none';
    yourcartitems.style.display = 'block'
};

buttons.forEach(button => {
    button.addEventListener('click', addToCartHandler);
});

buttons.forEach(button => {
    button.addEventListener("click", () => {
        button.style.backgroundColor = "red";
    });
});

