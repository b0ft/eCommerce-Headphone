let total = document.querySelector('.total');
const cartItem = document.querySelector('.cart-item');
const produk = document.querySelectorAll('.product');

// Membuka overlay cart
const cart = document.getElementById('cart');
const overlay = document.querySelector('.total-cart');

document.addEventListener('click', function(e) {
    if(e.target.classList.contains('remove')){
        const hargaRp = e.target.previousElementSibling.textContent;
        const namaItemCart = e.target.previousElementSibling.previousElementSibling.textContent;
        e.target.parentElement.parentElement.remove();
        // const tambah = document.querySelectorAll('#tambah');
        produk.forEach(p => {
            const namaProduk = p.childNodes[1].nextElementSibling.nextElementSibling;
            if(namaProduk.textContent === namaItemCart){
                namaProduk.parentElement.childNodes[1].childNodes[1].classList.remove('hidden');
            }
        });
        // e.target.classList.remove("hidden");
        // console.log(e.target);
        const harga = hargaRp.split("Rp")[1].split(".").join("");
        const jumlahBrg = e.target.parentElement.nextElementSibling.childNodes[1].nextElementSibling.nextElementSibling.textContent;
        const totalHarga = parseInt(harga * parseInt(jumlahBrg));
        let temp = parseInt(total.innerHTML.split(".").join(""));
        let tempTotal = temp - totalHarga;
        total.innerHTML = tempTotal.toLocaleString('id-ID');

        let temp3 = parseInt(cartItem.textContent);
        temp3 -= parseInt(jumlahBrg);
        cartItem.innerHTML = temp3;
    }
    // Tambah / kurang jumlah barang
    if(e.target.classList.contains('up')){
        let tempJumlah = parseInt(e.target.nextElementSibling.nextElementSibling.textContent);
        tempJumlah++;
        let temp = parseInt(cartItem.textContent);
        temp++;
        cartItem.innerHTML = temp;
        e.target.nextElementSibling.nextElementSibling.innerHTML = tempJumlah;

        let temp2 = parseInt(total.innerHTML.split(".").join(""));
        let hargaAsli = parseInt(e.target.parentElement.previousElementSibling.childNodes[1].nextElementSibling.textContent.split("Rp")[1].split(".").join(""));
        temp2 += hargaAsli;
        total.innerHTML = temp2.toLocaleString('id-ID');
    }
    if(e.target.classList.contains('down')){
        let tempJumlah = parseInt(e.target.previousElementSibling.previousElementSibling.textContent);
        if(tempJumlah != 1){
            tempJumlah--;        
            let temp = parseInt(cartItem.textContent);
            temp--;
            cartItem.innerHTML = temp;
    
            let temp2 = parseInt(total.innerHTML.split(".").join(""));
            let hargaAsli = parseInt(e.target.parentElement.previousElementSibling.childNodes[1].nextElementSibling.textContent.split("Rp")[1].split(".").join(""));
            temp2 -= hargaAsli;
            total.innerHTML = temp2.toLocaleString('id-ID');
        }
        e.target.previousElementSibling.previousElementSibling.innerHTML = tempJumlah;
    }
    if(e.target.classList.contains("reset")){
        cartContent.innerHTML = "";
        total.innerHTML = 0;
        cartItem.innerHTML = 0;
        const tambah = document.querySelectorAll('#tambah');
        tambah.forEach(e => {
            e.classList.remove("hidden");
        });
    }
});



cart.addEventListener('click', function() {
    overlay.classList.toggle('show-cart');   
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
        t.target.classList.add("hidden");
        const hargaRp = t.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.textContent;
        const nama = t.target.parentElement.nextElementSibling.nextElementSibling.textContent;
        const gambar = t.target.nextElementSibling.getAttribute('src');
        const harga = hargaRp.split("Rp")[1].split(".").join("");
        
        // t.target.textContent == "+" ? t.target.textContent = "✓" : t.target.textContent = "+";
        

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
        let tempCount = parseInt(cartItem.textContent);
        tempCount++;
        cartItem.innerHTML = tempCount;

        

        let temp = parseInt(total.innerHTML.split(".").join(""));
        let tempTotal = temp + parseInt(harga);
        total.innerHTML = tempTotal.toLocaleString('id-ID');
    });
});


