function onToggleMenu(e) {
    const navLinks = document.getElementById('navLinks');
    const menuBackdrop = document.getElementById('menuBackdrop');
    const menuBtn = document.getElementById('menuBtn');
    const icon = menuBtn ? menuBtn.querySelector('i') : (e ? e.querySelector('i') : null);

    if (navLinks) {
        const isOpen = navLinks.classList.contains('translate-x-0');
        if (!isOpen) {
            navLinks.classList.remove('translate-x-full');
            navLinks.classList.add('translate-x-0');
            if (menuBackdrop) {
                menuBackdrop.classList.remove('opacity-0', 'pointer-events-none');
                menuBackdrop.classList.add('opacity-100', 'pointer-events-auto');
            }
            document.body.classList.add('overflow-hidden');
            if (icon) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            }
        } else {
            closeMenu();
        }
    }
}

function closeMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuBackdrop = document.getElementById('menuBackdrop');
    const menuBtn = document.getElementById('menuBtn');
    const icon = menuBtn ? menuBtn.querySelector('i') : null;

    if (navLinks) {
        navLinks.classList.remove('translate-x-0');
        navLinks.classList.add('translate-x-full');
    }
    if (menuBackdrop) {
        menuBackdrop.classList.remove('opacity-100', 'pointer-events-auto');
        menuBackdrop.classList.add('opacity-0', 'pointer-events-none');
    }
    document.body.classList.remove('overflow-hidden');
    if (icon) {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
}

// Global keyboard & resize event listeners for smooth UX
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeMenu();
    }
});

window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
        closeMenu();
    }
});

document.querySelectorAll('button[data-target]').forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
    });
});

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

var swiper = new Swiper(".myProduct", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 7,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,

    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


emailjs.init('DrG9NNxTyUGNwsVhf');

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const btn = this.querySelector('button[type="submit"]');
    const btnText = btn.querySelector('span:first-child');

    // Disable tombol saat loading
    btn.disabled = true;
    btnText.textContent = 'Mengirim...';

    const templateParams = {
        name: document.getElementById('name').value,
        time: new Date().toLocaleString(),
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    emailjs.send('service_pmk', 'template_j4s813h', templateParams)
        .then(() => {
            btnText.textContent = 'Terkirim!';
            btn.classList.remove('bg-[#7a1f1f]', 'hover:bg-[#651818]');
            btn.classList.add('bg-green-600');
            document.getElementById('contactForm').reset();

            setTimeout(() => {
                btnText.textContent = 'Kirim Pesan';
                btn.classList.add('bg-[#7a1f1f]', 'hover:bg-[#651818]');
                btn.classList.remove('bg-green-600');
                btn.disabled = false;
            }, 3000);
        })
        .catch((error) => {
            console.error(error);
            btnText.textContent = 'Gagal, coba lagi';
            btn.classList.add('bg-red-600');
            btn.disabled = false;

            setTimeout(() => {
                btnText.textContent = 'Kirim Pesan';
                btn.classList.remove('bg-red-600');
            }, 3000);
        });
});

// BONUS: Supaya user juga bisa kirim pesan hanya dengan menekan tombol 'Enter' di keyboard
document.getElementById('hubungiInput').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        document.getElementById('hubungiBtn').click(); // Memicu fungsi klik di atas
    }
});
// Fungsi Dropdown Menu Samping
function toggleDropdown(dropdownId, arrowId) {
    const dropdown = document.getElementById(dropdownId);
    const arrow = document.getElementById(arrowId);

    if (!dropdown) return;

    const isExpanded = dropdown.style.maxHeight && dropdown.style.maxHeight !== "0px";

    if (isExpanded) {
        dropdown.style.maxHeight = "0px";
        if (arrow) arrow.classList.remove('rotate-90');
    } else {
        dropdown.style.maxHeight = (dropdown.scrollHeight + 500) + "px";
        if (arrow) arrow.classList.add('rotate-90');
    }
}

// Fungsi Toggle Menu Filter Produk di Mobile
function toggleMobileProductFilter() {
    const menu = document.getElementById('mobileProductMenu');
    const arrow = document.getElementById('mobileProductArrow');

    if (menu) {
        const isHidden = menu.classList.contains('hidden');
        if (!isHidden) {
            menu.classList.add('hidden');
            if (arrow) arrow.classList.remove('rotate-180');
        } else {
            menu.classList.remove('hidden');
            if (arrow) arrow.classList.add('rotate-180');
        }
    }
}

// === DATA PRODUK UNTUK MOBILE SWIPER ===
var productData = {
    'all': [
        { src: '../images/Galvanized Mesh DIA 44 MM.png', title: 'Galvanized Mesh DIA 44 MM' },
        { src: '../images/Galvanized_2 1.png', title: 'Galvanized Mesh DIA 48.5 MM' },
        { src: '../images/Galvanized Mesh DIA 52 MM.png', title: 'Galvanized Mesh DIA 52 MM' },
        { src: '../images/Steel Net KYT MESH 18.png', title: 'Steel Net KYT MESH #18' },
        { src: '../images/Steel Net Slinder Type 34.png', title: 'Steel Net Silinder Type 34' },
        { src: '../images/Steel Net Tabung MESH 20.png', title: 'Steel Net Tabung MESH 20' }
    ],
    'galvanized44': [
        { src: '../images/Galvanized Mesh DIA 44 MM.png', title: 'Galvanized Mesh DIA 44 MM' },
        { src: '../images/galvanized.44.jpeg', title: 'Galvanized Mesh DIA 44 MM' },
        { src: '../images/Galvanized.jpeg', title: 'Galvanized Mesh DIA 44 MM' }
    ],
    'galvanized48.5': [
        { src: '../images/Galvanized_2 1.png', title: 'Galvanized Mesh DIA 48.5 MM' },
        { src: '../images/Galvanized_48.5.jpeg', title: 'Galvanized Mesh DIA 48.5 MM' },
        { src: '../images/Galvanized_1 1.png', title: 'Galvanized Mesh DIA 48.5 MM' }
    ],
    'galvanized52': [
        { src: '../images/Galvanized Mesh DIA 52 MM.png', title: 'Galvanized Mesh DIA 52 MM' },
        { src: '../images/Galvanized_3 1.png', title: 'Galvanized Mesh DIA 52 MM' },
        { src: '../images/Galvanized.52.jpeg', title: 'Galvanized Mesh DIA 52 MM' }
    ],
    'mesh-kyt': [
        { src: '../images/Steel Net KYT MESH 18.png', title: 'Steel Net KYT MESH #18' },
        { src: '../images/mesh_kyt.jpeg', title: 'Steel Net KYT MESH #18' },
        { src: '../images/mesh_kyt.1.jpeg', title: 'Steel Net KYT MESH #18' }
    ],
    'mesh-tandem': [
        { src: '../images/mesh_2.jpeg', title: 'Steel Net Mesh #20 Tandem' },
        { src: '../images/mesh_3.jpeg', title: 'Steel Net Mesh #20 Tandem' },
        { src: '../images/mesh 3.png', title: 'Steel Net Mesh #20 Tandem' }
    ],
    'mesh-tabung': [
        { src: '../images/Steel Net Tabung MESH 20.png', title: 'Steel Net Tabung MESH 20' },
        { src: '../images/Tabung.mesh.jpeg', title: 'Steel Net Tabung MESH 20' },
        { src: '../images/net_tabung.jpeg', title: 'Steel Net Tabung MESH 20' }
    ],
    'mesh-gravity': [
        { src: '../images/net_gravity.jpeg', title: 'Steel Net Gravity Single Mesh #18' },
        { src: '../images/net_gravity.1.jpeg', title: 'Steel Net Gravity Single Mesh #18' },
        { src: '../images/net_gravity.2.jpeg', title: 'Steel Net Gravity Single Mesh #18' }
    ],
    'mesh-bulat': [
        { src: '../images/mesh_kyt.jpeg', title: 'Steel Net Bulat Mesh SS #18' },
        { src: '../images/mesh_kyt.1.jpeg', title: 'Steel Net Bulat Mesh SS #18' },
        { src: '../images/product_sample2.png', title: 'Steel Net Bulat Mesh SS #18' }
    ],
    'mesh-silinder': [
        { src: '../images/silinder_type.38.jpeg', title: 'Steel Net Silinder Type 38' },
        { src: '../images/silinder_type.38 1.jpeg', title: 'Steel Net Silinder Type 38' },
        { src: '../images/silinder_type.38 2.jpeg', title: 'Steel Net Silinder Type 38' }
    ],
    'mesh-34': [
        { src: '../images/Steel Net Slinder Type 34.png', title: 'Steel Net Silinder Type 34' },
        { src: '../images/type.34.jpeg', title: 'Steel Net Silinder Type 34' },
        { src: '../images/type_34.2.jpeg', title: 'Steel Net Silinder Type 34' }
    ]
};

var categoryLabels = {
    'all': 'Semua Produk',
    'galvanized44': 'Galvanized Mesh DIA 44 MM',
    'galvanized48.5': 'Galvanized Mesh DIA 48.5 MM',
    'galvanized52': 'Galvanized Mesh DIA 52 MM',
    'mesh-kyt': 'Steel Net KYT MESH #18',
    'mesh-tandem': 'Steel Net Mesh #20 Tandem',
    'mesh-tabung': 'Steel Net Tabung MESH 20',
    'mesh-gravity': 'Steel Net Gravity Single Mesh #18',
    'mesh-bulat': 'Steel Net Bulat Mesh SS #18',
    'mesh-silinder': 'Steel Net Silinder Type 38 Tandem Mesh #24',
    'mesh-34': 'Steel Net Silinder Type 34 Tandem Mesh #24'
};

var mobileDynSwiper = null;

function buildMobileSwiper(categoryName) {
    var slides = productData[categoryName] || productData['all'];
    var label = categoryLabels[categoryName] || 'Semua Produk';
    var wrapper = document.getElementById('mobileSwiperWrapper');
    var labelEl = document.getElementById('mobileSwiperLabel');
    var countEl = document.getElementById('mobileSwiperCount');

    if (!wrapper) return;

    if (mobileDynSwiper) {
        mobileDynSwiper.destroy(true, true);
        mobileDynSwiper = null;
    }

    wrapper.innerHTML = slides.map(function (p) {
        return '<div class="swiper-slide product-item">' +
            '<div class="w-full bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 mb-1">' +
            '<div class="aspect-square w-full bg-gray-50 overflow-hidden">' +
            '<img src="' + p.src + '" alt="' + p.title + '" class="w-full h-full object-cover">' +
            '</div>' +
            '<div class="px-4 py-3.5 bg-white">' +
            '<h2 class="text-sm font-semibold text-[#7A1F1F] leading-snug">' + p.title + '</h2>' +
            '</div>' +
            '</div>' +
            '</div>';
    }).join('');

    if (labelEl) labelEl.textContent = label;
    if (countEl) countEl.textContent = slides.length + ' item';

    mobileDynSwiper = new Swiper('#mobileProductSwiper', {
        slidesPerView: 1,
        spaceBetween: 16,
        grabCursor: true,
        loop: slides.length > 1,
        pagination: {
            el: '#mobileProductSwiper .swiper-pagination',
            clickable: true,
        }
    });
}

// Fungsi Mengubah Tampilan Isi Produk (Nge-filter Halaman)
function filterCategory(categoryName, element) {
    const items = document.querySelectorAll('.product-item');

    items.forEach(item => {
        if (categoryName === 'all') {
            if (item.getAttribute('data-hide-on-all') === 'true') {
                item.style.display = 'none';
            } else {
                item.style.display = '';
            }
        } else {
            if (item.getAttribute('data-category') === categoryName) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        }
    });

    buildMobileSwiper(categoryName);

    // Auto-close mobile product filter dropdown after picking a category
    const mobileMenu = document.getElementById('mobileProductMenu');
    const mobileArrow = document.getElementById('mobileProductArrow');
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        if (mobileArrow) mobileArrow.classList.remove('rotate-180');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    buildMobileSwiper('all');
});