var element =document.querySelectorAll('.list');
var hamburger=document.querySelector('.hamburger');
var navigation=document.querySelector('.navigation');
function activeLink(){
    element.forEach(item => {
      item.classList.remove('active');
      this.classList.add('active')
    });
}

element.forEach(item => {
    item.addEventListener('click',activeLink)
});
function toggleNav(){
 navigation.classList.toggle('active');
}
hamburger.addEventListener('click',toggleNav);