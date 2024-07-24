document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    window.onscroll = () => {
        let header = document.querySelector('.header');
        header.classList.toggle('sticky', window.scrollY > 10);

        // Highlight the current section
        let sections = document.querySelectorAll('section');
        let navLinks = document.querySelectorAll('.navbar a');

        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');

        // Close menu on scroll
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };

    let darkModeIcon = document.querySelector('#darkModeIcon');

    darkModeIcon.onclick = () => {
        darkModeIcon.classList.toggle('bx-sun');
        document.body.classList.toggle('dark-mode');
    };
});

const handleSubmit = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert("Thank you for your submission"))
      .catch((error) => alert(error));
  };
  
  document
    .querySelector("form")
    .addEventListener("submit", handleSubmit);
  