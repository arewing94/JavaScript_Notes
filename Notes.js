//Java Script Toggle ~ Smoothe animation//

var toggleMe = document.getElementById("wrapper");

toggleMe.addEventListener("click", function(){
  var slideDown = document.getElementById("toggleMe");
  if (slideDown.classList.contains('showElement')) {
    slideDown.classList.remove("showElement");
  }
  else {
    slideDown.classList.add("showElement");
  }
});


/*how to add jquery to a document, you want to bring this link in before you paste the J query below 
( both go in header) 

<script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>

<script src="#"></script>
*/

//always start Jquery with a $ sign//

$(".button") .on("click, fucniton () { consol.log(")


