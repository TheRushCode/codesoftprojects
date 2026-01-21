document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contact-form");

    if (!form) {
        console.error("❌ Contact form not found");
        return;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // 🚨 THIS STOPS URL SUBMISSION

        emailjs.sendForm(
            "service_zb1douc",      // ✅ your Service ID
            "template_7grs9e9",     // 🔴 paste Template ID
            this
        ).then(
            function () {
                alert("Message sent successfully ✅");
                form.reset();
            },
            function (error) {
                console.error("EmailJS Error:", error);
                alert("Failed to send message ❌");
            }
        );
    });

});
