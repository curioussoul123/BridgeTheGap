document.getElementById('contactButton').addEventListener('click', function() {
    // Redirect to the dashboard page when the Contact Us button is clicked
    window.location.href = 'dashboard.html';
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('contactModal').style.display = 'none';
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent. We will get back to you soon.');
    document.getElementById('contactModal').style.display = 'none';
});
