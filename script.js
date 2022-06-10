// @NAV SCRIPT
// window.onscroll = function() {
//     myScroll()
// }

// function myScroll() {
//     _scroll('topNav', 10, 'slideDown', 0, '-50px')
// }

// function openSearch() {
//     _drop('thisSearch', 'btnSearch', 'show-search')
// }

// function openMenu() {
//     _drop('thisMenu', 'btnMenu', 'show-menu')
// }

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
        // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)







// @HERO2 SCRIPT
document.addEventListener(
    "DOMContentLoaded",
    function() {
        setTimeout(function() {
            document.getElementById("hero2-image").className = "shrink";
        }, 100);
    },
    false
);




// @HERO1 SCRIPT
const background = document.getElementById("background");
const subject = document.getElementById("subject");
const text = document.getElementById("hero1-text");

window.addEventListener("load", function() {
    text.style.marginLeft = "1em";
    text.style.opacity = 1;
})

window.addEventListener("scroll", function() {
    let value = window.scrollY;
    background.style.top = value * 0.50 + "px";
    text.style.left = value * 2 + "px";
    subject.style.left = value * 0.5 + "px";
})




// @HOME SECTION







const typed = select('.typed')
if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}




// @  PARCOURS

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
gsap.defaults({ ease: "none" });



const pulses = gsap.timeline({
        defaults: {
            duration: 0.05,
            autoAlpha: 1,
            scale: 2,
            transformOrigin: 'center',
            ease: "elastic(2.5, 1)"
        }
    })
    .to(".ball02, .text01", {}, 0.2)
    .to(".ball03, .text02", {}, 0.33)
    .to(".ball04, .text03", {}, 0.46)

const main = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
            trigger: "#svg",
            scrub: true,
            start: "top center",
            end: "bottom center"
        }
    })
    .to(".ball01", { duration: 0.01, autoAlpha: 1 })
    .from(".theLine", { drawSVG: 0 }, 0)
    .to(".ball01", {
        motionPath: {
            path: ".theLine",
            align: ".theLine",
            alignOrigin: [0.5, 0.5],
        }
    }, 0)
    .add(pulses, 0);