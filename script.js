//####################################################


const svg_btn = document.querySelector('.svg_btn');

const nested_headers = document.querySelector('.nested_headers');

const closed_btn = document.querySelector('.close_header');

svg_btn.addEventListener('click', () => {
        nested_headers.showModal()
})

closed_btn.addEventListener('click', () => {
        nested_headers.close();
})

// ##################################################
// ***************** HOME *********************
// Panels Display
const circle1 = document.querySelector('#circle1');
const circle2 = document.querySelector('#circle2');
const circle3 = document.querySelector('#circle3');
const circle4 = document.querySelector('#circle4');


const tradition = document.querySelector('#traditional');
const modern = document.querySelector('#modern');
const asia = document.querySelector('#asia');
const mediteraneen = document.querySelector('#mediteraneen');


circle1.addEventListener('click', () => {
        tradition.style.display = 'block';
        modern.style.display = 'none';
        asia.style.display = 'none';
        mediteraneen.style.display = 'none';

        circle1.style.background = 'yellow';
        circle2.style.background = 'black';
        circle3.style.background = 'black';
        circle4.style.background = 'black';
});

circle2.addEventListener('click', () => {
        tradition.style.display = 'none';
        modern.style.display = 'block';
        asia.style.display = 'none';
        mediteraneen.style.display = 'none';

        circle1.style.background = 'black';
        circle2.style.background = 'red';
        circle3.style.background = 'black';
        circle4.style.background = 'black';
});

circle3.addEventListener('click', () => {
        tradition.style.display = 'none';
        modern.style.display = 'none';
        asia.style.display = 'block';
        mediteraneen.style.display = 'none';

        circle1.style.background = 'black';
        circle2.style.background = 'black';
        circle3.style.background = 'blue';
        circle4.style.background = 'black';
});

circle4.addEventListener('click', () => {
        tradition.style.display = 'none';
        modern.style.display = 'none';
        asia.style.display = 'none';
        mediteraneen.style.display = 'block';

        circle1.style.background = 'black';
        circle2.style.background = 'black';
        circle3.style.background = 'black';
        circle4.style.background = 'green';
});
// MOUSEOVER
circle1.addEventListener('mouseover', () => {
        tradition.style.display = 'block';
        modern.style.display = 'none';
        asia.style.display = 'none';
        mediteraneen.style.display = 'none';

        circle1.style.background = 'yellow';
        circle2.style.background = 'black';
        circle3.style.background = 'black';
        circle4.style.background = 'black';
});

circle2.addEventListener('mouseover', () => {
        tradition.style.display = 'none';
        modern.style.display = 'block';
        asia.style.display = 'none';
        mediteraneen.style.display = 'none';

        circle1.style.background = 'black';
        circle2.style.background = 'red';
        circle3.style.background = 'black';
        circle4.style.background = 'black';
});

circle3.addEventListener('mouseover', () => {
        tradition.style.display = 'none';
        modern.style.display = 'none';
        asia.style.display = 'block';
        mediteraneen.style.display = 'none';

        circle1.style.background = 'black';
        circle2.style.background = 'black';
        circle3.style.background = 'blue';
        circle4.style.background = 'black';
});

circle4.addEventListener('mouseover', () => {
        tradition.style.display = 'none';
        modern.style.display = 'none';
        asia.style.display = 'none';
        mediteraneen.style.display = 'block';

        circle1.style.background = 'black';
        circle2.style.background = 'black';
        circle3.style.background = 'black';
        circle4.style.background = 'green';
});

// ################################################