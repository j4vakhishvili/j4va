window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            document.getElementById("navbar").style.background = "rgba(36, 36, 36, 0.205)";
        } else {
            document.getElementById("navbar").style.background = "none";
        }
        }
        //Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

