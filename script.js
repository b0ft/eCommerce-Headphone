let total = document.querySelector('.total');

// Membuka overlay cart
const cart = document.getElementById('cart');
const overlay = document.querySelector('.total-cart');

document.addEventListener('click', function(e) {
    if(e.target.classList.contains('remove')){
        e.target.parentElement.parentElement.remove();
        const hargaRp = e.target.previousElementSibling.textContent;
        const harga = hargaRp.split("Rp")[1].split(".").join("");
        const jumlahBrg = e.target.parentElement.nextElementSibling.childNodes[1].nextElementSibling.nextElementSibling.textContent;
        const totalHarga = parseInt(harga * parseInt(jumlahBrg));
        let temp = parseInt(total.innerHTML.split(".").join(""));
        let tempTotal = temp - totalHarga;
        total.innerHTML = tempTotal;
    }
});



cart.addEventListener('click', function() {
    overlay.classList.toggle('show-cart');   


    // Tambah / kurang jumlah barang
    const up = document.querySelectorAll('.up');
    up.forEach(function(e) {
        e.addEventListener('click', function(u) {
            let tempJumlah = parseInt(u.target.nextElementSibling.nextElementSibling.textContent);
            tempJumlah++;
            u.target.nextElementSibling.nextElementSibling.innerHTML = tempJumlah;
        });
    });
    const down = document.querySelectorAll('.down');
    down.forEach(function(e) {
        e.addEventListener('click', function(d) {
            let tempJumlah = parseInt(d.target.previousElementSibling.previousElementSibling.textContent);
            if(tempJumlah != 1){
                tempJumlah--;
            }
            d.target.previousElementSibling.previousElementSibling.innerHTML = tempJumlah;
        });
    });
});

// Menutup cart
const x = document.querySelector('.x');
x.addEventListener('click', function() {
    overlay.classList.remove('show-cart');
});

// Ketika tombol tambah diklik
// Menyimpan harga
const cartContent = document.querySelector('.cart-content');
const tambah = document.querySelectorAll('#tambah');
tambah.forEach(function(e) {
    e.addEventListener('click', function(t) {
        const hargaRp = t.target.parentElement.nextElementSibling.nextElementSibling.textContent;
        const nama = t.target.parentElement.nextElementSibling.textContent;
        const gambar = t.target.nextElementSibling.getAttribute('src');
        const harga = hargaRp.split("Rp")[1].split(".").join("");
        t.target.classList.toggle("cancel");
        
            t.target.textContent == "+" ? t.target.textContent = "✓" : t.target.textContent = "+";
        

        cartContent.innerHTML += `<div class="cart-overlay-item">
        <img src="${gambar}">
        <div>
            <h4>${nama}</h4>
            <h4>${hargaRp}</h4>
            <h5 class="remove">remove</h5>
        </div>
        <div>
            <span class="up">&uarr;</span>
            <br><span class="cart-number">${jumlah = 1}</span><br>
            <span class="down">&darr;</span>
        </div>
        </div>`;

        

        let temp = parseInt(total.innerHTML.split(".").join(""));
        let tempTotal = temp + parseInt(harga);
        total.innerHTML = tempTotal.toLocaleString('id-ID');
    });
});





// tambah.addEventListener('click', function() {
//     console.log(tambah.parentElement.nextElementSibling.nextElementSibling);
// });