// Sticky Navigation Bar
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50);
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        let targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});

// Booking Form Submission
document.getElementById("bookingForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let date = document.getElementById("date").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || date === "") {
        alert("Please fill in all required fields.");
        return;
    }

    document.getElementById("confirmationMessage").innerHTML =
        `<p style="color: green; font-weight: bold;">Thank you, ${name}! Your appointment for ${date} has been booked successfully.</p>`;

    // Clear form fields
    document.getElementById("bookingForm").reset();
});

// Add Animation Effects When Scrolling
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll("section").forEach(section => observer.observe(section));
