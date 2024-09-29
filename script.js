document.getElementById('subscriptionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing, ${email}! Your free trial will start shortly.`);
    this.reset();
});
