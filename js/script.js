// document.addEventListener('DOMContentLoaded', function () {
//     const navItems = document.querySelectorAll('.nav-item');

//     navItems.forEach(item => {
//         item.addEventListener('click', function () {
//             // Reset semua item ke tampilan awal
//             navItems.forEach(btn => {
//                 btn.classList.remove('bg-white', 'text-[#7a1f1f]', 'font-bold');
//                 btn.classList.add('text-white');
//             });

//             // Set item yang diklik jadi aktif
//             this.classList.add('bg-white', 'text-[#7a1f1f]', 'font-bold');
//             this.classList.remove('text-white');
//         });
//     });
// });

function onToggleMenu(e) {
    const navLinks = document.getElementById('navLinks');
    const icon = e.querySelector('i');
    
    // Toggle class hidden
    navLinks.classList.toggle('hidden');
    
    // Ganti icon bars ke xmark jika terbuka
    if (navLinks.classList.contains('hidden')) {
        icon.classList.replace('fa-xmark', 'fa-bars');
    } else {
        icon.classList.replace('fa-bars', 'fa-xmark');
    }
}

function onToggleMenu(e) {
    // 1. Ambil elemen menu navigasi berdasarkan ID
    const navLinks = document.getElementById('navLinks');
    
    // 2. Ambil elemen ikon (<i>) yang ada di dalam div yang diklik
    const icon = e.querySelector('i');

    // 3. Logic Toggle: Cek atribut 'name' pada ikon
    if (icon.getAttribute('name') === 'menu') {
        // Ganti jadi ikon 'close'
        icon.setAttribute('name', 'close');
        // Ganti class FontAwesome ke silang (xmark)
        icon.classList.replace('fa-bars', 'fa-xmark');
        // Munculkan menu (geser ke posisi terlihat)
        navLinks.classList.remove('top-[-100%]');
        navLinks.classList.remove('hidden');
        navLinks.classList.add('top-[10%]');
        navLinks.classList.add('flex');
    } else {
        // Balikin jadi ikon 'menu'
        icon.setAttribute('name', 'menu');
        // Ganti class FontAwesome kembali ke bars
        icon.classList.replace('fa-xmark', 'fa-bars');
        // Sembunyikan menu kembali ke atas
        navLinks.classList.remove('top-[10%]');
        navLinks.classList.remove('flex');
        navLinks.classList.add('top-[-100%]');
        navLinks.classList.add('hidden');
    }
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    
    },

    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});