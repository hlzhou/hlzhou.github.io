// STICKY HEADER 

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {setSticky()};

// Get the header
var header = document.getElementById("headernav");
var notheader = document.getElementById("notheader")

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function setSticky() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
    notheader.classList.add("padded")
  } else {
    header.classList.remove("sticky");
    notheader.classList.remove("padded")
  }
}

// SCROLL SPY

$(document).ready(function(){
  $('.scrollspy').scrollSpy();
});

// scrolls to top
$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top 
    });
});

// PORTFOLIO FILTER
filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  if (c == "all") c = "proj-card";
  $(".proj-card").each(function () {
  	$(this).hide();
  });
  $(".proj-card").each(function () {
  	if ($(this).hasClass(c)) {
  	  $(this).fadeIn(1000);
  	}
  });
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("filter-buttons");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active-card");
    current[0].className = current[0].className.replace(" active-card", "");
    this.className += " active-card";
  });
}

