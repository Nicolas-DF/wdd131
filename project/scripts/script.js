const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;


// Form Handling
document.getElementById("subscriptionForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name && email) {
        document.getElementById("formMessage").textContent = "Subscription successful! Thank you for subscribing.";
        this.reset();
    } else {
        document.getElementById("formMessage").textContent = "Please, enter at least your full name and email address.";
    }
});