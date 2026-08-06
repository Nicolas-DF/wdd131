const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;


// Form Handling
let subscribed = [];

document.getElementById("subscriptionForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name && email) {
        //Check if the email is already subscribed
        if (subscribed.includes(email)) {
            document.getElementById("formMessage").textContent = "You are already subscribed! You will receive our updates soon.";
        } else {
            subscribed.push(email);
            document.getElementById("formMessage").textContent = "Subscription successful! Thank you for subscribing.";
            this.reset();
        };
    } else {
        document.getElementById("formMessage").textContent = "Please, enter at least your full name and email address.";
    }
});

// Menu Toggle
const toggleButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggleButton.addEventListener("click",() => {
    menu.classList.toggle("active");
})
