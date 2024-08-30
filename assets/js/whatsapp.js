document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const reference = document.getElementById('reference').value;
    const message = document.getElementById('message').value;

    // Construct the WhatsApp message
    const whatsappMessage = `Name: ${name}
Email: ${email}
Subject: ${subject}
Reference: ${reference}
Message: ${message} 
Throught the Portoflio`;

    // Encode the message
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp URL
    const whatsappUrl = `https://wa.me/+94772996907?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
});
