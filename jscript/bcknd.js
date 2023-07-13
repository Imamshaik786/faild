burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.nav-list')
rightnav=document.querySelector('.right-nav')

burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class-res');
    navlist.classList.toggle('v-class-res');
    navbar.classList.toggle('h-nav-res');

})
