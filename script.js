const texts = ["Welcome!", "Maligayang pagdating!", "いらっしゃいませ!", "hwan-yeong!", "स्वागत!"];
    let index = 0;

    function fadeInOutText() {
        const textContainer = document.getElementById("textContainer");
        textContainer.style.opacity = 0;

        setTimeout(() => {
        index = (index + 1) % texts.length; 
        textContainer.textContent = texts[index];

        textContainer.style.opacity = 1;
        }, 2000); 
    }
    setInterval(fadeInOutText, 4000);

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.init("3vUcSPID5RR0jZF8B");

    emailjs.send("service_sz0a5ej", "template_ys3dwvk", {
        name: templateParams.name,
        email: templateParams.email,
        message: templateParams.message,
    }).then(
        function (response) {
            alert("Email sent successfully!");
        },
        function (error) {
            alert("Failed to send email.");
            console.error(error);
        }
    );
});


    
