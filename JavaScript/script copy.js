/*$(".order").click(function (e) {
    let button = $(this);

    if (!button.hasClass("animate")) {
        button.addClass("animate");
        setTimeout(() => {
            button.removeClass("animate");
        }, 10000);
    }
});*/
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".order");

  buttons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault(); // Stop the default submit

      const form = button.closest("form");

      // Check if form is valid
      if (!form.checkValidity()) {
        form.reportValidity(); // Show built-in browser error
        return;
      }

      // Prevent re-click
      if (!button.classList.contains("animate")) {
        button.classList.add("animate");

        // Submit form after animation
        setTimeout(() => {
          form.submit(); // Submits to the hidden iframe
          button.classList.remove("animate");
        }, 10000); // Match your truck animation duration
      }
    });
  });
});

