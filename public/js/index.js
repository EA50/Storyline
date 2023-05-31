


const scrollIcon = document.querySelector('.scroll-down');
const arrow = document.querySelector('.arrow-a');
const title = document.querySelector('#title');

const containerImages = document.querySelectorAll('.container-grid-img');
const imgA = containerImages[0];
const imgB = containerImages[1];
const imgC = containerImages[2];

const e = window.innerWidth;
console.log(containerImages, imgA, imgB, imgC);

const yA = 50;
const yB = 58.5;
let yC = 67;

if (e < 1400) {
    yC = 100;

}





document.addEventListener('scroll', () => {
    let a = document.body.scrollHeight;    
    let b = window.pageYOffset;
    let c = window.innerHeight;

    if (b > 250) {
        scrollIcon.classList.add('removed');
        arrow.classList.add('arrow-1');
        title.classList.add('removed');
    } else {
        scrollIcon.classList.remove('removed');
        arrow.classList.remove('arrow-1');
        title.classList.remove('removed');
    
    }

    let d = b + c;
    let scrolledA = (yA + (-((d / a) * 100) * 1.5)) + '%';
    let scrolledB = (yB + (-((d / a) * 100) * 1.5)) + '%';
    let scrolledC = (yC + (-((d / a) * 100) * 1.5)) + '%';

    imgA.style.transform = `translate3d(0, ${scrolledA}, 0)`;
    imgB.style.transform = `translate3d(0, ${scrolledB}, 0)`;
    imgC.style.transform = `translate3d(0, ${scrolledC}, 0)`;



});




