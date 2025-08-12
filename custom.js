menuButton = document.querySelector('.active');
menuButton3 = document.querySelector('.active3');
menuButton4 = document.querySelector('.active4');
menuButton5 = document.querySelector('.active5');
menuButton6 = document.querySelector('.active6');
menuButton.addEventListener('click',function() {

    menuButton.classList.add('active2');
     menuButton4.classList.remove('active2');
    menuButton6.classList.remove('active2');
     menuButton5.classList.remove('active2');
    menuButton3.classList.remove('active2');

    
})

menuButton3.addEventListener('click',function() {


    menuButton3.classList.add('active2');
     menuButton.classList.remove('active2');
      menuButton4.classList.remove('active2');
      menuButton6.classList.remove('active2');
      menuButton5.classList.remove('active2');
})

menuButton4.addEventListener('click',function() {

    menuButton4.classList.add('active2');
     menuButton3.classList.remove('active2');
      menuButton6.classList.remove('active2');
      menuButton.classList.remove('active2');
      menuButton5.classList.remove('active2');
})

menuButton5.addEventListener('click',function() {

    menuButton5.classList.add('active2');
     menuButton4.classList.remove('active2');
      menuButton6.classList.remove('active2');
         menuButton.classList.remove('active2');
    menuButton3.classList.remove('active2');
})

menuButton6.addEventListener('click',function() {

    menuButton6.classList.add('active2');
     menuButton5.classList.remove('active2');
        menuButton4.classList.remove('active2');
           menuButton.classList.remove('active2');
       menuButton3.classList.remove('active2');
})






let iconsing = document.querySelector('.iconsign');
let navbarlist = document.querySelector('.navbarlist');
let close = document.querySelector('.close');

iconsing.addEventListener('click', function() {
  navbarlist.style.display = 'flex' ;
  navbarlist.style.fontSize = '8px' ;
  iconsing.style.display = 'none' ;
//   navbarlist.style.display = 'flex' ;
close.style.display = 'inline' ;
  
  
    
});

close.addEventListener('click', function() {

   navbarlist.style.display = 'none' ;
   iconsing.style.display = 'inline' ;
   close.style.display = 'none' ;
  
    
});

