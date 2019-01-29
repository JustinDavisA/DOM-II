// Your code goes here

const navLink = document.querySelector('.nav-link');
navLink.addEventListener('click', e => {
    navLink.style.backgroundColor = 'red';
    navLink.style.borderRadius = "3px";
    e.stopPropagation();
});

const busImg = document.querySelector('.intro img');
busImg.addEventListener('mouseenter', e => {
    busImg.setAttribute('src', 'img/fun-bus-reverse.jpg');
});
busImg.addEventListener('mouseleave', e => {
    busImg.setAttribute('src', 'img/fun-bus.jpg');
});

const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', e => {
  logoHeading.textContent = `It's not fun at all, is it Steve!?`;
});
logoHeading.addEventListener('mouseout', e => {
    logoHeading.textContent = `Fun Bus`;
});


const imageContent = document.querySelector('.img-content');
const letsGoText = document.querySelector('.text-content h2');
imageContent.addEventListener('drag', e => {
    letsGoText.textContent = `Don't take my adventures away!`;
});
imageContent.addEventListener('dragend', e => {
    letsGoText.textContent = `Thanks, that's better.`;
});
letsGoText.addEventListener('dblclick', e => {
    letsGoText.style.fontSize = '80px';
});
letsGoText.addEventListener('auxclick', e => {
    letsGoText.style.fontSize = '32px';
});


const wholePageBody = document.querySelector('body');
wholePageBody.addEventListener('keydown', e => {
    wholePageBody.style.backgroundColor = 'lightblue';
});
wholePageBody.addEventListener('keyup', e => {
    wholePageBody.style.backgroundColor = 'white';
});
