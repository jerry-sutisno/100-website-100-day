document.addEventListener('DOMContentLoaded', () => {
    const elements = [
        '.profile-image', 
        '.profile-header', 
        '.profile-bio', 
        '.profile-actions'
    ];

    elements.forEach((el, index) => {
        const item = document.querySelector(el);
        item.style.opacity = '0';
        item.style.transform = 'translateY(15px)';
        item.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';

        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 200 * index);
    });
});