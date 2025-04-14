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
