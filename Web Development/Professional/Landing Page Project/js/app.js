/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


// Global Variables
const sections = document.getElementsByTagName('section');
const navItems = document.getElementById('navbar__list');
const navMenu = document.getElementsByClassName('page__header')[0];
const toTopBtn = document.getElementById("toTopBtn");


// ---------------- Helper functions ----------------

// Detect whether an element is in the viewport or not
function isInViewport(section) {
    const rect = section.getBoundingClientRect();
    return (
        rect.top >= 0 && rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


// build the nav
function buildNav() {
    let navInnerHTML = "";
    for (let section of sections) {
        navInnerHTML += `<li><a id=${section.getAttribute("data-nav").split(' ')[0]} class="menu__link" href="#${section.id}">${section.getAttribute("data-nav")}</a></li>\n`;
    }
    navItems.innerHTML = navInnerHTML;
}

buildNav(); 

// Scroll to section on link click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();

        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle scrolling events 
document.addEventListener('scroll', () => {
    // Set visible section as active
    for (let section of sections) {
        if (isInViewport(section)) {
            section.classList.add('your-active-class');
            document.getElementById(section.getAttribute("data-nav").split(' ')[0]).classList.add('nav--active');
        }
        else {
            section.classList.remove('your-active-class');
            document.getElementById(section.getAttribute("data-nav").split(' ')[0]).classList.remove('nav--active');
        }
    }

    // show/hide navbar based on scrolling activity
    if (window.scrollY > 200) navMenu.classList.add('nav--hidden');
    setTimeout(() => navMenu.classList.remove('nav--hidden'), 600);
})


// ---------------- scroll to top ----------------

// show/Hide "scroll to top" button based on it's distance from the top
window.onscroll = () => {
    if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
        toTopBtn.classList.remove('btn-hide');
    } else {
        toTopBtn.classList.add('btn-hide');
    }
};

// Scroll to top on button click
function topFunction() {
    document.querySelector('body').scrollIntoView({
        behavior: 'smooth'
    });
}