
  (function () {
    emailjs.init("jPZ46x_3Ye2z5q1rf");
  })();
  const successmsg = document.getElementById("success");
  document.getElementById("contact-form").addEventListener("submit", function (e) {
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
    
  });

  // send the form
function sendEmail(form) {
  emailjs.sendForm("service_46b31nw", "template_m7fhwl8", form).then(
    function () {
      alert("Message sent successfully!");
      successmsg.classList.add("show");
      document.getElementById("contact-form").reset();
    },
    function (error) {
      alert("Something went wrong!");
      successmsg.classList.remove("show");
      console.log(error);
    }
  );
}

