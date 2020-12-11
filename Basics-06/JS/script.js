// handle click event

const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal (e, current) {
    // e is event object here and we can hijack the event with preventDefault method.

    e.preventDefault();
    current.innerHTML == "Book Now!" ? CTA.innerHTML = "Ooops" : CTA.innerHTML = "Book Now!";
    ALERT.classList.toggle("hide");
}

// CTA.onclick = reveal;
// CTA.addEventListener("click", reveal, false); // use this when there are no arguments to be passed in reveal function

// use anonymous function while using addEventListener so we can use function inside the anonymous function to add arguments to function
CTA.addEventListener("click", function (e) {
    reveal(e, this);
}, false );

CTA.addEventListener("click", function () {
    console.log("The button was clicked!");
}, false);

