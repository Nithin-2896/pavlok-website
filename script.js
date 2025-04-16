<<<<<<< HEAD
 document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-entry");
  
    // FAQ accordion toggle
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-query");
      question.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    });
  });
=======
 document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-entry");
  
    // FAQ accordion toggle
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-query");
      question.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    });
  });
>>>>>>> 3b9d7b2c0dc91c2c6c70b10677a87fe3e990865b
