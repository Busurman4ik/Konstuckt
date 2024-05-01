// MENU STICKY
const menuInner = document.querySelector('.menu');
const menuExternal = document.querySelector('.external__menu');

if(menuInner || menuExternal) {
    document.addEventListener('scroll', () => {
        const posTop = menuExternal.getBoundingClientRect().top;
        menuInner.classList.toggle('_sticky', posTop <= 0);
    })
}

// MENU-BURGER

const menuBurger = document.querySelector('.menu__burger')

if(menuInner || menuBurger) {
    menuBurger.addEventListener('click', () => {
        document.body.classList.toggle('_lock');
        menuInner.classList.toggle('_active');
    })
}

// SCROLL

const menuLinks = document.querySelectorAll('.menu__list-item[data-goto]');
if (menuLinks.length > 0){
    menuLinks.forEach((item) => {
        item.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector(".menu__list").offsetHeight;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            })
            e.preventDefault();
        };
    }
}

//Dark

const itemsNight = document.querySelectorAll('.menu, .menu__burger, .menu__burger-line, .menu__list, .touch')
const buttonSwitchDark = document.querySelector('.switch-btn')
if(itemsNight || buttonSwitchDark) {
    buttonSwitchDark.addEventListener('click', () => {
        document.body.classList.toggle('darkstyle');
        buttonSwitchDark.classList.toggle('dark')
        itemsNight.forEach((item) => {
            item.classList.toggle('darkstyle')
        })
    })
}
