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

    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const btn = this.querySelector('button[type="submit"]');
        const btnText = btn.querySelector('span:first-child');

        // Disable tombol saat loading
        btn.disabled = true;
        btnText.textContent = 'Mengirim...';

        const templateParams = {
            name:    document.getElementById('name').value,
            time:   new Date().toLocaleString(),
            email:   document.getElementById('email').value,
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
document.getElementById('hubungiInput').addEventListener('keydown', function(e) {
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

// Fungsi Mengubah Tampilan Isi Produk (Nge-filter Halaman)
function filterCategory(categoryName) {
    const items = document.querySelectorAll('.product-item');

    items.forEach(item => {
        // Jika memilih 'all', tampilkan semuanya kecuali yang disembunyikan di 'all'
        if (categoryName === 'all') {
            if (item.getAttribute('data-hide-on-all') === 'true') {
                item.style.display = 'none';
            } else {
                item.style.display = '';
            }
        } else {
            // Cek kesesuaian atribut data-category
            if (item.getAttribute('data-category') === categoryName) {
                item.style.display = ''; // Munculkan kembali
            } else {
                item.style.display = 'none'; // Sembunyikan
            }
        }
    });

    // Opsional: Update Swiper slider di mobile jika menggunakan Swiper.js agar tidak nge-bug spacingnya setelah di-filter
    if (typeof myProduct !== 'undefined' && myProduct.update) {
        myProduct.update();
    }
}