const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('top');

function handleEnter(){
  this.classList.add('trigger-enter');
  setTimeout(() => this.classList.add('trigger-enter-active'), 150)

}

function handleLeave() {


}

triggers.forEach(triggers => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(triggers => trigger.addEventListener('mouseleave', handleLeave));
