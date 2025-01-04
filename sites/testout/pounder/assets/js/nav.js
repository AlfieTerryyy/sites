document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    const closeBtn = document.getElementById('closeBtn');
    const navList = document.getElementById('navList');
    const navbar = document.getElementById('navbar');

    if (menuToggle && sideMenu) {
        menuToggle.addEventListener('click', () => {
            sideMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    if (closeBtn && sideMenu) {
        closeBtn.addEventListener('click', () => {
            sideMenu.classList.remove('active');
        });
    }

    const loadNavLinks = async () => {
        try {
            const response = await fetch('https://sites.alfieterry.co.uk/sites/testout/pounder/nav-links.json');
            if (!response.ok) throw new Error(`Failed to fetch navigation: ${response.statusText}`);
    
            const links = await response.json();
            const linkElements = links.map(link => `<li><a href="${link.url}">${link.text}</a></li>`).join('');
            navbar.innerHTML = `<ul>${linkElements}</ul>`;
            navList.innerHTML = linkElements;
        } catch (error) {
            console.error('Error loading navigation:', error);
            navbar.innerHTML = '<p>Error loading navigation links.</p>';
        }
    };
    loadNavLinks();
    

    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    if (header) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                header.classList.add('hidden');
            } else {
                header.classList.remove('hidden');
            }
            lastScrollTop = Math.max(scrollTop, 0);
        });
    }
});
