var toggleButton = document.querySelector('.main-header button');
var mainNavInner = document.querySelector('.main-nav__inner ul');

toggleButton.addEventListener('click', () => {
    if(mainNavInner.style.display == 'none') {
        mainNavInner.style.display = 'block';
        mainNavInner.style.backgroundColor = '#cd7f52'
        mainNavInner.style.borderRadius = '5px';
        toggleButton.classList.add('change');
    } else {
        mainNavInner.style.display = 'none';
        toggleButton.classList.remove('change');
    }
});

window.addEventListener('scroll',()=> {
    var navbar = document.querySelector('.main-header');
    if (window.pageYOffset > 150 ) {
        navbar.classList.add('dark');
    } else {
        navbar.classList.remove('dark');
    }
});
