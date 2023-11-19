  showForm();

  function showForm() {
    let messageButton = document.getElementById("msgButton");
    let messageForm = document.getElementById("msgForm");

    messageButton.onclick = function() {
      if (messageForm.style.display === "none") {
        messageForm.style.display = "flex";
        setTimeout(() => {
          messageForm.style.opacity = "1";
        }, 10);
      } else {
        messageForm.style.opacity = "0";
        setTimeout(() => {
          messageForm.style.display = "none";
        }, 500);
      }
    };
  }


  document.getElementById("msgButton").addEventListener("click", function() {
    let iconElement = this.querySelector("i.fa");
    if (iconElement.classList.contains("fa-times")) {
      iconElement.classList.remove("fa-times");
      iconElement.classList.add("fa-comment");
    } else {
      iconElement.classList.remove("fa-comment");
      iconElement.classList.add("fa-times");
    }
  });

  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
    });

    document.getElementById("sendButton").addEventListener("click", function() {
      let senderName = document.getElementById("emailSenderName");
      let senderEmail = document.getElementById("emailSender");
      let email = document.getElementById("emailBody");

      senderName.value = "";
      senderEmail.value = "";
      email.value = "";

      let emailAlert = document.getElementsByClassName("send-alert")[0];

      emailAlert.style.display = 'flex'
      setTimeout(function() {
        emailAlert.style.display = 'none';
      }, 2000);
    });