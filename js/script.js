function addToCart(productName, price) {
    const cartCount = document.getElementById('cartCount');
    let count = parseInt(cartCount.innerText);
    cartCount.innerText = count + 1;
    alert(`Produk "${productName}" telah ditambahkan ke keranjang.`);
}

document.getElementById('mobileToggle').addEventListener('click', function () {
    document.getElementById('navMenu').classList.toggle('active');
});
