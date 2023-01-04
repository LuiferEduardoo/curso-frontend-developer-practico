const menuEmail = document.querySelector('.navbar-email').addEventListener('click', toggleDestopMenu);
const menuHamIcon = document.querySelector('.menu').addEventListener('click', toggleMovileMenu);
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart').addEventListener('click', taggleShoppingCart);

const productDetailContainer = document.querySelector('#productDetail');
const mobileMenu = document.querySelector('.mobile-menu');
const destopMenu = document.querySelector('.desktop-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailClose = document.querySelector('.product-detail-close').addEventListener('click', closeProductDetailAside);

function toggleDestopMenu()
{
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const isproductDetailClose = productDetailContainer.classList.contains('inactive');
    if(!isAsideClosed)
    {
        shoppingCartContainer.classList.add('inactive');
    }
    if(!isproductDetailClose)
    {
        productDetailContainer.classList.add('inactive');
    }  
    destopMenu.classList.toggle('inactive');
}
function toggleMovileMenu()
{
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const isproductDetailClose = productDetailContainer.classList.contains('inactive');
    if(!isAsideClosed)
    {
        shoppingCartContainer.classList.add('inactive');
    }
    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}
function taggleShoppingCart()
{
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDestopoMenuClosed = destopMenu.classList.contains('inactive');
    const isproductDetailClose = productDetailContainer.classList.contains('inactive');
    if(!isMobileMenuClosed ||!isDestopoMenuClosed)
    {
        mobileMenu.classList.add('inactive');
        destopMenu.classList.add('inactive');
    }
 if(!isproductDetailClose)
    {
        productDetailContainer.classList.add('inactive');
    }   
    shoppingCartContainer.classList.toggle('inactive');

}

function openProductDetailAside()
{
    shoppingCartContainer.classList.add('inactive');
    destopMenu.classList.add('inactive');
    productDetailContainer.classList.remove('inactive'); 
}

function closeProductDetailAside()
{
    productDetailContainer.classList.add('inactive'); 
}
const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Laptop',
    price: 500,
    image: 'https://images.pexels.com/photos/461064/pexels-photo-461064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

productList.push({
    name: 'Teclado',
    price: 20,
    image: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

productList.push({
    name: 'Monitor',
    price: 200,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

productList.push({
    name: 'Reloj',
    price: 40,
    image: 'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

productList.push({
    name: 'Moto',
    price: 600,
    image: 'https://images.pexels.com/photos/5803142/pexels-photo-5803142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

function renderProducts (arr)
{
    const cardsContainer = document.querySelector('.cards-container');
    for (product of arr)
    {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener("click", openProductDetailAside);
    
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$ ' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
        productInfo.append(productInfoDiv,productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }

}
renderProducts (productList);