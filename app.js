const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.nav_menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active')
})
menu.addEventListener('click', mobileMenu);
// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const aboutMenu = document.querySelector('#about-page');
    const eduMenu = document.querySelector('#education-page');
    const expMenu = document.querySelector('#exp-page');
    const servicesMenu = document.querySelector('#services-page');
    const contactMenu = document.querySelector('#contact-page');

    let scrollPos = window.scrollY;
  
    // adds 'highlight' class to my menu items
    if (window.innerWidth > 960 && scrollPos < 600) {
      aboutMenu.classList.add('highlight');
      eduMenu.classList.remove('highlight')
      expMenu.classList.remove('highlight')
      return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
      eduMenu.classList.add('highlight');
      aboutMenu.classList.remove('highlight');
      expMenu.classList.remove('highlight');
      return;
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
      expMenu.classList.add('highlight');
      aboutMenu.classList.remove('highlight');
      eduMenu.classList.remove('highlight');
      servicesMenu.classList.remove('highlight');
      return;
    } else if (window.innerWidth > 960 && scrollPos < 3290) {
      servicesMenu.classList.add('highlight');
      aboutMenu.classList.remove('highlight');
      eduMenu.classList.remove('highlight');
      expMenu.classList.remove('highlight');
      return;
    }
    else if (window.innerWidth > 960 && scrollPos < 4235) {
      contactMenu.classList.add('highlight');
      aboutMenu.classList.remove('highlight');
      servicesMenu.classList.remove('highlight');
      eduMenu.classList.remove('highlight');
      expMenu.classList.remove('highlight');
      return;
    }
    
  
    if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
      elem.classList.remove('highlight');
    }
  };
  
  window.addEventListener('scroll', highlightMenu);
  window.addEventListener('click', highlightMenu);
  
  //  Close mobile Menu when clicking on a menu item
  const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
      menu.classList.toggle('is-active');
      menuLinks.classList.remove('active');
    }
  };
  
  menuLinks.addEventListener('click', hideMobileMenu);
  navLogo.addEventListener('click', hideMobileMenu);
  