

let scrollIcon = document.querySelector('.scroll-down');
let arrow = document.querySelector('.arrow-a');

let containerImages = document.querySelectorAll('.container-grid-img');
let imgA = containerImages[0];
let imgB = containerImages[1];
let imgC = containerImages[2];

console.log(containerImages, imgA, imgB, imgC);

let initialTranslateY = 50;




document.addEventListener('scroll', () => {
    let a = document.body.scrollHeight;    
    let b = window.pageYOffset;
    let c = window.innerHeight;

    if (b > 250) {
        scrollIcon.classList.add('removed');
        arrow.classList.add('arrow-1');
    } else {
        scrollIcon.classList.remove('removed');
        arrow.classList.remove('arrow-1');
    }

    let d = b + c;
    let scrolled = (initialTranslateY + (-((d / a) * 100) * 1.5)) + '%';


    console.log( scrolled, d);
    imgA.style.transform = `translate3d(0, ${scrolled}, 0)`;
    imgB.style.transform = `translate3d(0, ${scrolled}, 0)`;
    imgC.style.transform = `translate3d(0, ${scrolled}, 0)`;



});




