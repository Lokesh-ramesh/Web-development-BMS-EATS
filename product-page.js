const sideBar = document.getElementById("sideBar");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
function openSide() {
    sideBar.style.display = "block";
  }
  function closeSide() {
    sideBar.style.display = "none";
  }
  let x = localStorage.getItem("name");
  let y = localStorage.getItem("pic");
  let z = localStorage.getItem("or-price");
  let w = localStorage.getItem("dis-price");
  document.getElementById("product-name").innerHTML = x;
  document.getElementById("product-img").src = y;
  document.getElementById("op").innerHTML = z;
  document.getElementById("dp").innerHTML = w;
const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every 2 seconds
}
function incrementValue() {
  var number = parseInt(document.getElementById('number').value);
  number=number+1;
  if(number <= 100000000) {
    document.getElementById('number').value = number;
  }
}
function decrementValue() {
  var number = parseInt(document.getElementById('number').value);
  number=number-1;
  if(number >= 0){
    document.getElementById('number').value = number;
  }
}