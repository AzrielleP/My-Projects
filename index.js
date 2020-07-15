const toggleMenu = (() => {

    const burgerIcon = document.querySelector('.burger-icon');
    const burgerIconContainer = document.querySelector('.burger-icon-container');
    const nav = document.querySelector('.link-container');

    burgerIcon.addEventListener('click', ()=> {
        nav.classList.toggle('expanded');
        burgerIconContainer.classList.toggle('expanded');
    })

})();

const styleNav = (() => {
    const links = document.querySelector('.page-links');
    
    const resetLinkColor = () => {
        const childLinks = links.getElementsByTagName('a');
        for (let i = 0; i < childLinks.length; i += 1) {
            childLinks[i].style.border = 'none';
        }
    }

    links.addEventListener('click', (event) => {
        if (event.target !== event.currentTarget) {
            resetLinkColor();
            event.target.style.borderBottom = '4px solid #f7ce3e';
        }
        event.stopPropagation();
    })
})();


