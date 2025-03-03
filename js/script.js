// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});

// Đóng menu khi click bên ngoài
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('toggle');
    }
});

// Thêm vào file script.js để tự động thêm class active
document.querySelectorAll('.nav-links a').forEach(link => {
    if(link.href === window.location.href) {
        link.classList.add('active');
    }
});

// Hiệu ứng cuộn navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(44, 62, 80, 0.95)';
    } else {
        navbar.style.background = '#2c3e50';
    }
});