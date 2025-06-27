document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    // Update CSS variables for the spotlight effect
    card.style.setProperty('--x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--y', `${e.clientY - rect.top}px`);
    });
});
    // form handling
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show success message
      document.getElementById('successMessage').style.display = 'block';
      
      // Reset form
      this.reset();
      
      // Hide success message after 3 seconds
      setTimeout(function() {
        document.getElementById('successMessage').style.display = 'none';
      }, 3000);

    });


    // Send mail
    document.addEventListener("DOMContentLoaded", function () {
      emailjs.init("9c9UABgvXx_XjFIfd"); 
    
      document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
    
        emailjs.sendForm("service_5buonrg", "template_5gqsi34", this);
      });
    });
