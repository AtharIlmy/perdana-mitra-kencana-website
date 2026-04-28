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
        const logo = document.getElementById('logo');
        const menuBtn = document.getElementById('menuBtn');
        const icon = e.querySelector('i');

        icon.setAttribute('name', 'close');
        icon.classList.replace('fa-bars', 'fa-xmark');

        navLinks.classList.remove('hidden');
        navLinks.classList.add('flex');

        logo.classList.add('hidden');
        menuBtn.classList.add('hidden');
    }

    function closeMenu() {
        const navLinks = document.getElementById('navLinks');
        const logo = document.getElementById('logo');
        const menuBtn = document.getElementById('menuBtn');
        const icon = menuBtn.querySelector('i');

        icon.setAttribute('name', 'menu');
        icon.classList.replace('fa-xmark', 'fa-bars');

        navLinks.classList.remove('flex');
        navLinks.classList.add('hidden');

        logo.classList.remove('hidden');
        menuBtn.classList.remove('hidden');
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


    emailjs.init('DrG9NNxTyUGNwsVhf'); // ganti dengan public key kamu

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

 function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    const chevron = document.getElementById('chevron');
    dropdown.classList.toggle('hidden');
    chevron.classList.toggle('rotate-180');
 }
