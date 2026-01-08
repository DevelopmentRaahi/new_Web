
  (function () {
    emailjs.init("ZwCQ7ozbJKcgTkgjW");
  })();
  const contactForm = document.getElementById("contact-form");
  const empForm = document.getElementById("emp-form");
  const successmsg = document.getElementById("success");
  const empSuccess = document.getElementById("emp-success");  

function validateData(e) { 
    e.preventDefault();
    //validation checks
     const name = this.name.value.trim();
     const email = this.email.value.trim();
     const phone = this.phone.value.trim();
    const message = this.message.value.trim();
   

     // Name validation
     if (name.length < 2) {
       alert("Please enter a valid name");
       return;
     }

     // Email validation (simple regex)
     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailPattern.test(email)) {
       alert("Please enter a valid email address");
       return;
     }

     // Phone validation (optional)
     if (phone && !/^[0-9]{10}$/.test(phone)) {
       alert("Phone number must be 10 digits");
       return;
     }

     // Message validation
     if (message.length < 5) {
       alert("Message should be at least 5 characters");
       return;
     }

   sendEmail(this);    
}

contactForm && contactForm.addEventListener("submit", validateData);
empForm && empForm.addEventListener("submit", validateData);

  // send the form
function sendEmail(form) {
  emailjs.sendForm("service_ao273su", "template_bsvd0rd", form).then(
    function () {
      alert("Message sent successfully!");
      if(contactForm){
        successmsg.classList.add("show");
        contactForm.reset();
      }
      if(empForm){
        empSuccess.classList.add("show");
        empForm.reset();
      }
    },
    function (error) {
      alert("Something went wrong!");      
      if (successmsg.classList.contains("show")) {
         successmsg.classList.remove("show");
      }
      if (empSuccess.classList.contains("show")) {
         empSuccess.classList.remove("show");
      } 
      console.error(error);
      
    }
  );
}

