
// Find the menu button
const menuButton = document.querySelector(".menu-button");

// Add click functionality
menuButton.addEventListener("click", function() {
    alert("Welcome to Spice Garden! Explore our delicious menu.");
});

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you! Your message has been received.");

    contactForm.reset();

});
