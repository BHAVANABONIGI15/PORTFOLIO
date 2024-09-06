var typed = new Typed(".text", {
    strings: ["Aspiring Web Designer", "Aspiring Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const progressBars = document.querySelectorAll('.progress-bar');

progressBars.forEach(progressBar => {
    progressBar.addEventListener('click', () => {
        const percentage = progressBar.querySelector('.percentage');
        
        
        progressBars.forEach(pb => {
            const pbPercentage = pb.querySelector('.percentage');
            if (pbPercentage !== percentage) {
                pbPercentage.classList.remove('show');
            }
        });
        
        
        percentage.classList.toggle('show');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.contact form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        if (nameInput.value.trim() === '') {
            alert('Please enter your name.');
            nameInput.focus();
            return false;
        }

        
        if (emailInput.value.trim() === '') {
            alert('Please enter your email.');
            emailInput.focus();
            return false;
        } else if (!validateEmail(emailInput.value.trim())) {
            alert('Please enter a valid email address.');
            emailInput.focus();
            return false;
        }

        
        if (messageInput.value.trim() === '') {
            alert('Please enter a message.');
            messageInput.focus();
            return false;
        }

        
        alert('Form submitted successfully!');
        form.reset(); 
    });

    
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});