document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you! Your message has been sent.");
        form.reset();
    });
});