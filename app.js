document.querySelectorAll('.nav_links').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
var popup1 = document.getElementById("popup1");
var popup2 = document.getElementById("popup2");
var popup3 = document.getElementById("popup3");
var popup4 = document.getElementById("popup4");
var popup5 = document.getElementById("popup5");
var popup6 = document.getElementById("popup6");
var popup7 = document.getElementById("popup7");

function openPopup(popup){
  popup.classList.add("open-popup");
}

function closePopup(popup){
  popup.classList.remove("open-popup");
}

function openPopup(popup){
  popup.classList.add("open-popup");
  // Calculate the center of the screen
  var centerX = window.innerWidth / 2;
  var centerY = window.innerHeight / 2 + window.scrollY; // Account for scroll position
  // Adjust the position of the popup based on its own width and height
  var popupWidth = popup.offsetWidth;
  var popupHeight = popup.offsetHeight;
  var popupLeft = centerX - popupWidth / 15;
  var popupTop = centerY - popupHeight / 5.5;
  // Set the top and left positions of the popup to be near the middle of the screen
  popup.style.top = popupTop + "px";
  popup.style.left = popupLeft + "px";
}

