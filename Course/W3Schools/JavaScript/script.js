const Teks = document.getElementById("test");
const Lampu = document.getElementById('lampu');
const Penjumlahan = document.getElementById('penjumlahan');

function Nyalakan() {
    Lampu.src = 'pic_bulbon.gif';
}

function Matikan() {
    Lampu.src= 'pic_bulboff.gif';
}

function tombolTambah() {
    Penjumlahan.textContent = "Hello World!";
}