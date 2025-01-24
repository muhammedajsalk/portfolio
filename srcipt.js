function sentMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.init("cZZzbN4lXBT7tTcIa");

    const serviceID = "service_21zuhqi";
    const templateID = "template_59bopu9";

    emailjs
        .send(serviceID, templateID, params) // Corrected from `.sent` to `.send`
        .then((res) => {
            document.getElementById("name").value = ""; 
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message was sent successfully!");
        })
        .catch((err) => {
            console.error(err);
            alert("Failed to send your message. Please try again.");
        });
        console.log("Service ID:", serviceID, "Template ID:", templateID);
}
