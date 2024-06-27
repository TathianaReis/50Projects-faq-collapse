const toggleButtons = document.querySelectorAll('.faq-toggle');
const faqLlist = document.querySelectorAll('.faq');

toggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.parentNode.classList.toggle('active');
    //removeActive(); Actually, I want to be able to open as many as we want
    // const faq = button.closest('.faq');
    // faq.classList.toggle('active');
  });
});

// function removeActive() {
//   faqLlist.forEach((element) => {
//     element.classList.remove('active');
//   });
// }
