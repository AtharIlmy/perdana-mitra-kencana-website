document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(btn => {
                btn.classList.remove('bg-white', 'text-[#7a1f1f]', 'font-bold');
                btn.classList.add('text-white');
            });

            this.classList.add('bg-white', 'text-[#7a1f1f]', 'font-bold');
            this.classList.remove('text-white');
        });
    });
});