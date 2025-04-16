document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-entry");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-query");
    const icon = question.querySelector(".toggle-icon");

    
    question.setAttribute("role", "button");
    question.setAttribute("tabindex", "0");

    const toggleItem = () => {
      item.classList.toggle("active");
      icon.textContent = item.classList.contains("active") ? "−" : "+";
    };

    question.addEventListener("click", toggleItem);

    question.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleItem();
      }
    });
  });
});
