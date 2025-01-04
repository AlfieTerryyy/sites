document.addEventListener('DOMContentLoaded', () => {
    document.body.style.overflow = 'auto';
    console.log('Scrolling enabled');
    const scrollProgress = document.getElementById('scroll-progress');
    window.addEventListener('scroll', () => {
        if (!scrollProgress) return;
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollProgress.style.width = scrolled + '%';
    });
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
function handleScroll() {
    const scrollThreshold = 100;
    const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - scrollThreshold;
    if (nearBottom) {
        loadMoreContent();
    }
}
async function loadMoreContent() {
    const container = document.querySelector('.grid-container');
    const newContent = await fetchMoreContent();
    container.appendChild(newContent);
}
document.addEventListener("DOMContentLoaded", () => {
    const root = document.documentElement;
    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        const hue = Math.round((scrollPercent / 100) * 240);
        const dynamicColor = `hsl(${hue}, 90%, 50%)`;
        root.style.setProperty("--scrollbar-color", dynamicColor);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer');
    const content = document.querySelector('main');
    const adjustFooter = () => {
        const footerHeight = footer.offsetHeight;
        const windowHeight = window.innerHeight;
        const contentHeight = content.offsetHeight;
        if (contentHeight + footerHeight < windowHeight) {
            content.style.minHeight = `${windowHeight - footerHeight}px`;
        } else {
            content.style.minHeight = 'auto';
        }
    };
    adjustFooter();
    window.addEventListener('resize', adjustFooter);
});
