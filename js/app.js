// GLOBAL VARIABLES
const title = document.getElementById("title");
const hero = document.getElementById("hero");
const toggle = document.querySelector(".toggle");
const header = document.getElementById("header");
const main = document.querySelector(".main");
const logo = document.querySelector(".logo");
const bottomNav = document.querySelector(".bottom-nav");
const topBtn = document.getElementById("top-btn");
const aside = document.querySelector("aside");
const dropdownBtn = document.querySelectorAll(".aside-dropdown")
const links = document.querySelectorAll('#aside ul li a');

// ACTIVE PAGE LINKS
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-link');


navLinks.forEach(link => {
    if(link.href.includes(`${activePage}`)) {
        link.classList.add('active');
    }
})

// HAMBURGER TOGGLE
toggle.addEventListener("click",  () => {
    // ADD ACTIVE CLASS TO : 
    // MAIN = OVERLAY , NAV = DISPLAY, HEADER = BLACK BG, REMOVE HERO HEADER  
    aside.classList.toggle("active");
    toggle.classList.toggle("active");
    main.classList.toggle("active");
    // header.classList.remove("scroll");
    header.classList.remove("hero-header");
    header.classList.toggle("toggle-header");
    header.classList.toggle("main-header");
    console.log("open");
    // logo.classList.remove("active-logo");
});
// REMOVE ACTIVE CLASSES WHEN NAV LINKS CLICKED
links.forEach(link => {
    link.addEventListener("click", () => {
        aside.classList.remove("active");
        toggle.classList.remove("active");
        main.classList.remove("active");
        header.classList.remove("active");
        header.classList.add("main-header");
        header.classList.remove("toggle-header");
    });
});
// REMOVE ACTIVE CLASSES WHEN AREA OUTSIDE MENU IS CLICKED
main.addEventListener("click", () => {
    aside.classList.remove("active");
    toggle.classList.remove("active");
    main.classList.remove("active");
    header.classList.remove("active");
    header.classList.remove("toggle-header");
    header.classList.add("main-header");
});

// REMOVE ACTIVE CLASSES WHEN LOGO IS CLICKED
logo.addEventListener("click", () => {
    aside.classList.remove("active");
    toggle.classList.remove("active");
    main.classList.remove("active");
    header.classList.remove("active");
    header.classList.remove("toggle-header");
});

// HERO INTERSECTION OBSERVER
    // OPTIONS = TRANSITION TAKES PLACE AT -100% MARGIN TOP
        // TRANSITIONS = 1) HEADER BACKGROUND.  2) LOGO HEIGHT
const pageHeader = document.querySelector("[data-header]");
const heroOptions = {
    rootMargin: "-95% 0px 0px 0px"
};
const heroObserver = new IntersectionObserver(
    function(
        entries, heroObserver
    ) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                // console.log("hero NOT intersecting");
                pageHeader.classList.remove("hero-header");
                logo.classList.remove("active-logo");
            } else {
                // console.log("hero intersecting");
                pageHeader.classList.add("hero-header");
                logo.classList.add("active-logo");
            }
        });
    }, heroOptions
);
heroObserver.observe(hero);

// MAIN SECTION OBSERVER 
    // OPTIONS = TRANSITION TAKES PLACE -80% MARGIN-BOTTOM OF 'MAIN' SECTION
        // TRANSITIONS = 1) HEADER- FROM TRANSPARENT TO WHITE
        //              = 2) BUTTON LINK TO TOP OF THE PAGE
const mainOptions = {
    rootMargin: '0px 0px -80% 0px',
};
const mainObserver = new IntersectionObserver(
    function(entries, mainObserver){
        entries.forEach( entry => {
            if(!entry.isIntersecting){
                // console.log('MAIN NOT IO');
                header.classList.remove("main-header");
                bottomNav.classList.remove("active-footer");

            } else {
                console.log('MAIN IS IO');
                header.classList.add("main-header");
                bottomNav.classList.add("active-footer");

            }
        });
    }, mainOptions
);
mainObserver.observe(main);



// SECTION TITLE INTERSECTION OBSERVERS
// const topLine = document.querySelector(".decoration-line");
const titles = document.querySelectorAll(".section-title");
const titlesOptions = {
    rootMargin: '00% 0px -30% 0px',
}

titles.forEach(title => {
    const titleObserver = new IntersectionObserver(
        function(entries, titleObserver){
            entries.forEach(entry => {
                if(!entry.isIntersecting) {
                    // console.log("title NOT io");
                    title.classList.remove("active-title");
                    // topLine.classList.add('active-line');
                } else {
                    // console.log("title is io");
                    title.classList.add("active-title");
                    // topLine.classList.remove('active-line');

                }
            });
        }, titlesOptions
    );

    titleObserver.observe(title);
});


const ioItem = document.querySelectorAll('.io-item');
const itemOptions = {
    rootMargin: '0px 0px -30% 0px', 
} 

ioItem.forEach(item => {
    const itemObserver = new IntersectionObserver(
        function(entries, itemObserver) {
            entries.forEach(entry => {
                if(!entry.isIntersecting){
                    // console.log("Item NOT io");
                    item.classList.remove("active-item");
                } else {
                    // console.log("Item IS io");
                    item.classList.add("active-item");
                }
            })
        }, itemOptions
    );
    itemObserver.observe(item);
});