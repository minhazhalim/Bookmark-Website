const tab = document.querySelectorAll('.tab');
const panel = document.querySelectorAll('.panel');
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const logo = document.getElementById('logo');
function onTabClick(event){
     tab.forEach((tabs) => {
          tabs.children[0].classList.remove('border-softRed','border-b-4','medium:border-b-0');
     });
     panel.forEach((panels) => panels.classList.add('hidden'));
     event.target.classList.add('border-softRed','border-b-4');
     const dataTarget = event.target.getAttribute('data-target');
     document.getElementById('panels').getElementsByClassName(dataTarget)[0].classList.remove('hidden');
}
tab.forEach((tabs) => tabs.addEventListener('click',onTabClick));
function navToggle(){
     menuButton.classList.toggle('open');
     menu.classList.toggle('flex');
     menu.classList.toggle('hidden');
     if(menu.classList.contains('flex')){
          logo.setAttribute('src','./images/logo-bookmark-footer.svg');
     }else{
          logo.setAttribute('src','./images/logo-bookmark.svg');
     }
}
menuButton.addEventListener('click',navToggle);