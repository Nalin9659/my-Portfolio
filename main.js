// form validation

 function validationForm(){
    const firstName= document.getElementById('firstName').Value;
    const email= document.getElementById('email').Value;
    const lastName= document.getElementById('lastName').Value;
    const phoneNumber= document.getElementById('phonenumber').Value;
    const message= document.getElementById('message').Value;
 
       if (!firstName || !lastName || !email || !phoneNumber || !message){
        alert("Please enter the name");
        return false;
        }

        if (!validateEmail(email)){
            alert('please enter the email');
            return false;
        }
        alert("Form Sumbmitted successful");

        function validateEmail(email){
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }
    }

    // Smooth scroll for navigation

     document.querySelectorAll('.navbar a').forEach(anchor =>{
        anchor.addEventListner('click', function (e) {
            e.preventDefault();
           document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
           });
        });
     });

     // Toggle info in skill section

     function toggleInfo(elementId){
        const element= document.getElementById(elementId);

        if (element.style.display==='none') {
            element.style.display==='block';
        }else{
            element.style.display==='none';
        }
    }

     //Using client-side server for the get the message
      
     document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission
    
        // Display success message
        const successMessage = document.getElementById("formSuccess");
        successMessage.style.display = "block";
    
        // Simulate a form submission (EmailJS or your backend)
        sendEmail();
    
        // Redirect after 3 seconds
        setTimeout(function () {
          window.location.href = "thankyou.html"; // Redirect to thank you page
        }, 3000);
      });
