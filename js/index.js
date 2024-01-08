document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const errorSpan = document.querySelector(".error-msg");
  const subscribeButton = document.querySelector(".btn-primary");
  const dismissButton = document.querySelector(".btn-dismiss");
  const newslSection = document.querySelector(".newsl-wrapper");
  const successSection = document.getElementById("success-wrapper");
  const successEmailSpan = document.querySelector(".success-email");

  subscribeButton.addEventListener("click", function () {
    const email = emailInput.value;
    if (validateEmail(email)) {
      successEmailSpan.textContent = email;
      toggleSections(true);
    } else {
      errorSpan.style.display = "inline";
      emailInput.style.borderColor = getComputedStyle(errorSpan).color;
      emailInput.style.backgroundColor =
        getComputedStyle(errorSpan).backgroundColor;
    }
  });

  dismissButton.addEventListener("click", function () {
    toggleSections(false);
  });

  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }

  function toggleSections(isSuccessVisible) {
    if (isSuccessVisible) {
      newslSection.style.display = "none";
      successSection.style.display = "block";
    } else {
      newslSection.style.display = "block";
      successSection.style.display = "none";
      emailInput.value = "";
      emailInput.style = "";
      errorSpan.style.display = "none";
    }
  }
});
